
import './App.css';
import 'atropos/css'
import Astro from './Astro.jpg'
import bgvideo from './video.mp4'
import Atropos from 'atropos/react';

export default function App () {
  return (
    <div id="app"> 
    <div className="card">

      {/* <video autoplay loop muted plays-inline class="back-video" >
        <source src={bgvideo} type="video/mp4"/>
      </video> */}
      <Atropos className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <img src={Astro} data-atropos-offset="-5" className="App-logo" alt="logo" />
        <h1 data-atropos-offset="5">WEB3 SUMMIT</h1>
        <button id="btn" data-atropos-offset="5" >Register</button>
      
      </Atropos>
      </div>
    </div>
  )
}