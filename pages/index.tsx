import { useCallback, useEffect, useRef, useState } from 'react';
import { initGame } from '../public/lib/game.js';

export default function Home() {
  const isGameInitialized = useRef(false);
  const [deathCount, setDeathCount] = useState(0);
  const [levelsCompleted, setLevelsCompleted] = useState({});

  /**
   * The game will set the initial state by reading localStorage. Key used is `level${id}`, where id is >= 1
   * The game will update the state every time a level is complete
   */
  const updateLevelsCompleted = useCallback(
    (levels: { [key: string]: boolean }) => {
      setLevelsCompleted((state) => ({ ...state, ...levels }));
    },
    []
  );

  useEffect(() => {
    if (!isGameInitialized.current) {
      isGameInitialized.current = true;
      initGame({ deathCount, setDeathCount, updateLevelsCompleted });
    }
  }, [deathCount, updateLevelsCompleted]);

  return (
    <div>
      <div>Death count: {deathCount} (Displayed on Next.js website)</div>
      <div>
        Level completed: {JSON.stringify(levelsCompleted)} (Displayed on Next.js
        website)
      </div>
      <div id='hang-by-a-thread'></div>
    </div>
  );
}
