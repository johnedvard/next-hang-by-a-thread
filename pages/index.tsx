import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import { init } from '../public/lib/game.js';

export default function Home() {
  const isGameInitialized = useRef(false);
  const [deathCount, setDeathCount] = useState(1);
  useEffect(() => {
    if (!isGameInitialized.current) {
      isGameInitialized.current = true;
      init({ deathCount, setDeathCount });
    }
  }, [deathCount]);

  return (
    <div className={styles.container}>
      <div id='wrap'>
        <span>{deathCount}</span>
        <div id='loading-wrapper' className='overlay hide'>
          <div id='loading'></div>
        </div>
        <canvas id='game-canvas' width='800px' height='800px'></canvas>
        <div id='r-menu' className='menu'>
          <div id='hamburger'>––</div>
        </div>
        <menu id='main' className='overlay'>
          <button id='select-level-btn'>Select Level</button>

          <button id='music-btn' className='flat'>
            Music is OFF
          </button>
        </menu>
        <div id='bonus' className='overlay hide'>
          <div id='coil-subscriber' className='hide'>
            Thanks for subscribing to Coil
          </div>

          <span id='coil-btn'>Access more hats for Coil subscribers</span>

          <div className='bone'>
            🦴
            <div className='inverse'>🦴</div>
          </div>
          <div id='bonus-grid'></div>
        </div>
        <div id='levels' className='overlay hide'>
          <div className='bone'>
            🦴
            <div className='inverse'>🦴</div>
          </div>
          <div id='levels-grid'></div>
        </div>
        <div id='near-levels' className='overlay hide'>
          <div className='bone'>
            🦴
            <div className='inverse'>🦴</div>
          </div>
          <div id='loading-near-levels'>Loading NEAR levels..</div>
          <div id='near-levels-grid'></div>
        </div>
        <menu id='level-dialog' className='overlay hide'>
          <button id='next-btn'>Play next level</button>
          <button id='replay-btn'>Replay level</button>
        </menu>
        <div id='thanks' className='overlay hide'>
          Rest in peace my soul
          <br />
          Thank you for playing
        </div>
        <div id='hint'></div>
      </div>
      <Script src='../public/lib/game.js' />
    </div>
  );
}
