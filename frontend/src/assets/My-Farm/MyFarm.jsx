
import "./MyFarm.css";

import { useEffect, useState } from "react";

import {
  Building2,
  MapPin,
  Ruler,
  Sprout,
  Mountain,
  Layers,
  Droplets,
  Save,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import API from "../../api/axios";

export default function MyFarm({ initialData = null, onSaveSuccess }) {
  const [formData, setFormData] = useState({
    farmId: initialData?.id || null,
    farmName: initialData?.farmName || '',
    location: initialData?.location || '',
    farmSize: initialData?.farmSize || '',
    soilType: initialData?.soilType || '',
    elevation: initialData?.elevation || '',
    topography: initialData?.topography || '',
    waterAvailability: initialData?.waterAvailability || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState(null);

  /*
   * Convert Django's snake_case farm data
   * into the camelCase format used by this React component.
   */
  const convertBackendToForm = (farm) => {
    return {
      farmId: farm.id || null,
      farmName: farm.farm_name || '',
      location: farm.location || '',
      farmSize: farm.farm_size || '',
      soilType: farm.soil_type || '',
      elevation: farm.elevation || '',
      topography: farm.topography || '',
      waterAvailability: farm.water_availability || '',
    };
  };

  /*
   * Convert React form data into the format
   * expected by the Django API.
   */
  const convertFormToBackend = () => {
    return {
      farm_name: formData.farmName,
      location: formData.location,
      farm_size: formData.farmSize,
      soil_type: formData.soilType,
      elevation: formData.elevation,
      topography: formData.topography,
      water_availability: formData.waterAvailability,
    };
  };

  /*
   * Load the logged-in user's farm when the page opens.
   */
  const loadFarm = async () => {
    setIsLoading(true);

    try {
      const response = await API.get('/farms/');

      console.log('Farm data from backend:', response.data);

      /*
       * Our backend returns a list because we are using
       * a ModelViewSet and GET /api/farms/ is the list endpoint.
       *
       * Since each user can only have ONE farm,
       * we only need the first item.
       */
      if (response.data.length > 0) {
        const farm = response.data[0];

        setFormData(convertBackendToForm(farm));
      }
    } catch (err) {
      console.error(
        'Failed to load farm:',
        err.response?.data || err.message
      );

      /*
       * A failed GET shouldn't prevent the user from
       * seeing and filling out the form.
       */
      setStatusMessage({
        type: 'error',
        text: 'Could not load your farm details. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * Run once when MyFarm is opened.
   */
  useEffect(() => {
    loadFarm();
  }, []);

  /*
   * Handle changes to all form inputs.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Basic frontend validation.
   */
  const validateForm = () => {
    if (!formData.farmName.trim() || !formData.location.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Farm Name and Location are required.',
      });

      return false;
    }

    return true;
  };

  /*
   * CREATE FARM
   *
   * POST /api/farms/
   */
  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    /*
     * If we already have a farm ID, the farm already exists.
     * The user should update it instead of creating another one.
     */
    if (formData.farmId) {
      setStatusMessage({
        type: 'error',
        text: 'Your farm already exists. Use "Update Farm" instead.',
      });

      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const payload = convertFormToBackend();

      console.log('Sending POST payload to backend:', payload);

      const response = await API.post('/farms/', payload);

      console.log('Farm created successfully:', response.data);

      /*
       * Django returns the newly-created farm,
       * including its database ID.
       */
      const createdFarm = response.data;

      /*
       * Put the database ID into React state.
       *
       * Before creation:
       * farmId = null
       *
       * After creation:
       * farmId = 1
       */
      setFormData(convertBackendToForm(createdFarm));

      setStatusMessage({
        type: 'success',
        text: 'Farm profile created successfully!',
      });

      if (onSaveSuccess) {
        onSaveSuccess(createdFarm);
      }
    } catch (err) {
      console.error(
        'Failed to create farm:',
        err.response?.data || err.message
      );

      const errorData = err.response?.data;

      let errorMessage = 'Failed to save farm details. Try again.';

      if (errorData?.detail) {
        errorMessage = errorData.detail;
      } else if (errorData?.farm_name) {
        errorMessage = errorData.farm_name[0];
      } else if (errorData?.location) {
        errorMessage = errorData.location[0];
      }

      setStatusMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * UPDATE FARM
   *
   * PATCH /api/farms/<farmId>/
   */
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formData.farmId) {
      setStatusMessage({
        type: 'error',
        text: 'No existing farm found. Click "Save Farm" first.',
      });

      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const payload = convertFormToBackend();

      console.log(
        `Sending PATCH payload for Farm ID ${formData.farmId}:`,
        payload
      );

      const response = await API.patch(
        `/farms/${formData.farmId}/`,
        payload
      );

      console.log('Farm updated successfully:', response.data);

      /*
       * Replace the local form data with the exact
       * data returned by Django.
       */
      setFormData(convertBackendToForm(response.data));

      setStatusMessage({
        type: 'success',
        text: 'Farm profile updated successfully!',
      });

      if (onSaveSuccess) {
        onSaveSuccess(response.data);
      }
    } catch (err) {
      console.error(
        'Failed to update farm:',
        err.response?.data || err.message
      );

      const errorData = err.response?.data;

      let errorMessage = 'Failed to update farm details. Try again.';

      if (errorData?.detail) {
        errorMessage = errorData.detail;
      } else if (errorData?.farm_name) {
        errorMessage = errorData.farm_name[0];
      } else if (errorData?.location) {
        errorMessage = errorData.location[0];
      }

      setStatusMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="farm-page-wrapper">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="farm-container">
        <header className="page-header">
          <div className="header-badge">AgriVox Intelligence</div>

          <h1 className="page-title">My Farm Profile</h1>

          <p className="page-subtitle">
            Configure land metrics to generate accurate agricultural & market
            insights.
          </p>
        </header>

        {statusMessage && (
          <div className={`status-toast ${statusMessage.type}`}>
            {statusMessage.type === 'success' ? (
              <CheckCircle2 size={18} />
            ) : (
              <AlertCircle size={18} />
            )}

            <span>{statusMessage.text}</span>
          </div>
        )}

        {isLoading ? (
          <div className="status-toast success">
            <RefreshCw size={18} className="spin" />
            <span>Loading your farm details...</span>
          </div>
        ) : (
          <form className="farm-form">
            <section className="form-card">
              <div className="card-header">
                <div className="icon-badge">
                  <Building2 size={20} />
                </div>

                <div>
                  <h2>General Identification</h2>
                  <p>Basic location and ownership details</p>
                </div>
              </div>

              <div className="card-grid">
                <div className="form-group full-width">
                  <label htmlFor="farmName">Farm Name</label>

                  <div className="input-wrapper">
                    <Building2 className="input-icon" size={18} />

                    <input
                      type="text"
                      id="farmName"
                      name="farmName"
                      placeholder="e.g., Green Valley Organic Farm"
                      value={formData.farmName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>

                  <div className="input-wrapper">
                    <MapPin className="input-icon" size={18} />

                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g., Oromia, East Shewa"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="farmSize">Farm Size</label>

                  <div className="input-wrapper">
                    <Ruler className="input-icon" size={18} />

                    <input
                      type="text"
                      id="farmSize"
                      name="farmSize"
                      placeholder="e.g., 2.5 Hectares / 10 Timad"
                      value={formData.farmSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="form-card">
              <div className="card-header">
                <div className="icon-badge accent-sprout">
                  <Sprout size={20} />
                </div>

                <div>
                  <h2>Terrain & Soil Profile</h2>
                  <p>
                    Environmental variables used for crop advisories
                  </p>
                </div>
              </div>

              <div className="card-grid">
                <div className="form-group">
                  <label htmlFor="soilType">Soil Type</label>

                  <div className="input-wrapper">
                    <Sprout className="input-icon" size={18} />

                    <input
                      type="text"
                      id="soilType"
                      name="soilType"
                      placeholder="e.g., Black teff soil, Clay loam"
                      value={formData.soilType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="elevation">Elevation</label>

                  <div className="input-wrapper">
                    <Mountain className="input-icon" size={18} />

                    <input
                      type="text"
                      id="elevation"
                      name="elevation"
                      placeholder="e.g., 2,350m above sea level"
                      value={formData.elevation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="topography">Topography</label>

                  <div className="input-wrapper">
                    <Layers className="input-icon" size={18} />

                    <input
                      type="text"
                      id="topography"
                      name="topography"
                      placeholder="e.g., Gently sloping, Flat plain"
                      value={formData.topography}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="waterAvailability">
                    Water Availability
                  </label>

                  <div className="input-wrapper">
                    <Droplets className="input-icon" size={18} />

                    <input
                      type="text"
                      id="waterAvailability"
                      name="waterAvailability"
                      placeholder="e.g., Seasonal rain, River irrigation"
                      value={formData.waterAvailability}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="form-actions-dock">
              <button
                type="button"
                onClick={handleUpdate}
                disabled={isSubmitting || isLoading}
                className="btn btn-update"
              >
                <RefreshCw
                  size={18}
                  className={isSubmitting ? 'spin' : ''}
                />

                <span>
                  {isSubmitting ? 'Updating...' : 'Update Farm'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={isSubmitting || isLoading}
                className="btn btn-save"
              >
                <Save size={18} />

                <span>
                  {isSubmitting ? 'Saving...' : 'Save Farm'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

