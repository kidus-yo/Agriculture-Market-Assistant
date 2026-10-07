import { useState } from 'react';
import './Recommendations.css';

const farmInfo = {
  location: "Addis Ababa",
  temperature: "22°C",
  rainfall: "1100 mm",
  soil: "Clay loam",
  elevation: "2,355 m",
};

const cropsData = [
  {
    id: "c1",
    name: "Maize",
    icon: "🌽",
    suitability: "HIGH",
    category: "High Yield",
    growingPeriod: "~4 months",
    waterRequirement: "Medium",
    phRange: "5.8 - 7.0",
    recommendedFertilizer: "DAP / Urea",
    notes: "Plant at the onset of the main rainy season. Ensure adequate nitrogen application during vegetative growth.",
  },
  {
    id: "c2",
    name: "Wheat",
    icon: "🌾",
    suitability: "HIGH",
    category: "Low Water",
    growingPeriod: "~3.5 months",
    waterRequirement: "Medium-Low",
    phRange: "6.0 - 7.0",
    recommendedFertilizer: "NPS / Urea",
    notes: "Requires well-drained soil and cooler growing conditions. Performs exceptionally well in highland soil.",
  },
];

export default function Recommendations() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCrops = cropsData.filter((crop) => {
    if (activeTab === "All") return true;
    if (activeTab === "High Yield") return crop.category === "High Yield";
    if (activeTab === "Low Water") return crop.waterRequirement.includes("Low");
    return true;
  });

  return (
    <div className="recommendations-container">
      <div className="header-section">
        <h1 className="main-title">Crop Recommendation</h1>
        <p className="sub-title">AI-driven agricultural insights tailored to your field conditions</p>
      </div>

      <div className="farm-summary-card">
        <div className="farm-summary-header">
          <h2 className="farm-summary-title">Farm Environmental Profile</h2>
          <span className="location-badge">📍 {farmInfo.location}</span>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-icon">🌡️</span>
            <div className="stat-content">
              <span className="stat-label">Avg Temp</span>
              <span className="stat-value">{farmInfo.temperature}</span>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">🌧️</span>
            <div className="stat-content">
              <span className="stat-label">Rainfall</span>
              <span className="stat-value">{farmInfo.rainfall}</span>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">🧪</span>
            <div className="stat-content">
              <span className="stat-label">Soil Type</span>
              <span className="stat-value">{farmInfo.soil}</span>
            </div>
          </div>

          <div className="stat-box">
            <span className="stat-icon">⛰️</span>
            <div className="stat-content">
              <span className="stat-label">Elevation</span>
              <span className="stat-value">{farmInfo.elevation}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">Recommended Crops</h2>
        <div className="filter-tabs">
          {["All", "High Yield", "Low Water"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="crop-list">
        {filteredCrops.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
}

function CropCard({ crop }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="crop-card">
      <div className="crop-header">
        <div className="crop-title-group">
          <span className="crop-emoji">{crop.icon}</span>
          <h3 className="crop-name">{crop.name}</h3>
        </div>
        <span className="suitability-badge">
          SUITABILITY: {crop.suitability}
        </span>
      </div>

      <div className="crop-specs-grid">
        <div className="spec-item">
          <span className="spec-label">Growing Period</span>
          <span className="spec-value">{crop.growingPeriod}</span>
        </div>
        <div className="spec-item">
          <span className="spec-label">Water Requirement</span>
          <span className="spec-value">{crop.waterRequirement}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="extra-details">
          <div className="detail-block">
            <span className="spec-label">Ideal Soil pH</span>
            <span className="spec-value">{crop.phRange}</span>
          </div>
          <div className="detail-block">
            <span className="spec-label">Recommended Fertilizer</span>
            <span className="spec-value">{crop.recommendedFertilizer}</span>
          </div>
          <div className="detail-block full-width">
            <span className="spec-label">Agronomic Tips</span>
            <span className="spec-value">{crop.notes}</span>
          </div>
        </div>
      )}

      <button 
        className="details-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? "Hide Details" : "View Details"}</span>
        <span className={`chevron-icon ${isExpanded ? "rotated" : ""}`}>▼</span>
      </button>
    </div>
  );
}