
const MicIcon = () => (
<svg 
  className="mic-svg" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
</svg>
);
export default function Homepage(){

  return(
    <div className='homepage-wrapper'>
      <div className='top-box'>
        <div className='highlighted-note'>
          <span className='flash-icon'>⚡</span> 
          Low-Latency Dialect Voice Engine
        </div>
        <h1 className='top-header'>Ask AgriVox Anything in Your Language</h1>
        <p className='sub-text'>Tap the microophone and ask for market prices, wewather advosories, or list your harvest</p>
        <div className='mic-button-wrapper'>
          <button className='voice-mic-btn' aria-label="Tap to speak">
            <MicIcon/>
            <span className='btn-label'>TAP TO SPEAK</span>
          </button>
        </div>

        <div className="suggested-container">
          <span className="suggested-title">SUGGESTED QUESTIONS</span>
          <div className="chips-wrapper">
            <button className="chip-btn">
              💬 "የዛሬ የጤፍ ዋጋ ስንት ነው?"
            </button>
            <button className="chip-btn">
              🌧️ "በሚቀጥሉት 3 ቀናት ዝናብ አለ?"
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}