import {useState} from 'react';
import {Mic, Volume2, Bell, MapPin, User} from 'lucide-react';

export default function Header(currentLang, setLanguage, onVoiceClick){

    const [isRecording, setIsRecording] = useState(false);

    const handleMicToogle = () => {
        setIsRecording(!isRecording);
        if (onVoiceClick) onVoiceClick;
    };

    return(
        <header className="header-root">
            <div className="header-container">
                <div className='brand-wrapper'>
                    <div className='brand-icon'>
                        <svg className="svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                    <div>
                        <span className='brand-title'>AgriVox</span>
                        <span className='brand-subtitle'>Market Intelligence</span>
                    </div>
                </div>

                <div className='search-telemtry-container'>
                    <div className='search-wrapper'>
                        <input
                        type='text'
                        placeholder={currentLang === 'am' ? "የገበያ ዋጋ ወይም አየር ሁኔታ ይጠይቁ..." : "Search Prices, Weather, Advisories..."}
                        className='search-input'
                        />
                        <button onClick={handleMicToogle} className={`mic-btn ${isRecording ? 'recording' : 'idle'}`} title='Voice Input'>
                            <Mic size={20} strokeWidth={2.5}/>
                        </button>
                    </div>

                    <div className='weather-badge'>
                        <MapPin size={16} strokeWidth={2.5} className="weather-icon"/>
                        <span>Addis Ababa</span>
                        <span className='weather-dot'>•</span>
                        <span>28°C</span>
                    </div>
                </div>

                <div className='controls-wrapper'>
                    <button onClick={() => alert("Screen Reader Activated!")} className='icont-btn' title='Read Page Aloud'>
                        <Volume2 size={22} strokeWidth={2.2}/>
                    </button>

                    <div className='lang-switcher'>
                        <button onClick={() => setLanguage('am')} className={`lang-btn ${currentLang === 'am' ? 'active' : 'inactive'}`}>
                            አማርኛ
                        </button>
                        <button onClick={() => setLanguage('en')} className={`lang-btn ${currentLang === 'en' ? 'active' : 'inactive'}`}>
                            English
                        </button>
                        <button className='icon-btn' title='Notifications'>
                            <Bell size={22} strokeWidth={2.2}/>
                            <span className='notification-dot'></span>
                        </button>
                        <div className='user-avatar' title='User Profile'>
                            <User size={22} strokeWidth={2.5}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    );
}