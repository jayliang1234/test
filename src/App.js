import React from 'react';
import dexscreener from "../src/img/dexscreener.png"
import telegram from "../src/img/telegram.png"
import twitter from "../src/img/twitter.png"
import dextools from "../src/img/dextools.png"
import background from "../src/img/353kaymar.png"
import msvg from "../src/logos/3m.svg";
import './App.css';
function copyText() {
  const textToCopy = document.getElementById("textToCopy").innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Optional: Display a success message
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}
function App() {
  return (
    <div 
      className="App"
      style={{
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',   // Make sure the background covers the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        minHeight: '100vh', // Ensure the div takes up the full viewport height
      }}
    >
      <div class="logos">
        <div class="logos-slide">
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
        </div>

        <div class="logos-slide">
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
          <img src={msvg} />
        </div>
      </div>
        <header className="Meme-Intro">
          <p style={{fontWeight:'bold', fontSize:'50px', color:'white'}}>
            FUCK 350
          </p>
          <div style={{marginBottom:'5vh'}}>
            <button className='CA' id="textToCopy" onClick={copyText}>CA:FK350 </button>
          </div>
          <div>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <button className='CA' style={{ marginRight:'2vh'}}>
                <span>
                  <img src={telegram} alt="telegram" style={{width: 'auto', height:'auto'}}/>
                </span>
              </button>
            </a>{" "}  
            <a href="https://dexscreener.com" target="_blank" rel="noreferrer">
              <button className='CA' style={{ marginRight:'2vh'}}>
                <span>
                  <img src={dexscreener} alt="Dexscreener" style={{width: 'auto',height:'auto'}}/>
                </span>
              </button>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <button className='CA' style={{ marginRight:'2vh'}}>
                <span>
                  <img src={twitter} alt="twitter" style={{width: 'auto',height:'auto'}}></img>
                </span>
              </button>
            </a>
            <a href="https://dextools.io" target="_blank" rel="noreferrer">
              <button className='CA'>
                <span>
                  <img src={dextools} alt="dextools" style={{width: 'auto',height:'auto'}}></img>
                </span>
              </button>
            </a>
          </div>
        </header>
    </div>
  );
}


export default App;
