import { useEffect, useRef, useState } from 'react';
import { initGame } from '../public/lib/game.js';

export default function Home() {
  const isGameInitialized = useRef(false);
  const [deathCount, setDeathCount] = useState(0);
  useEffect(() => {
    if (!isGameInitialized.current) {
      isGameInitialized.current = true;
      initGame({ deathCount, setDeathCount });
    }
  }, [deathCount]);

  return (
    <div>
      <span>Death count: {deathCount} (Displayed on Next.js website)</span>
      <div id='hang-by-a-thread'></div>
    </div>
  );
}
