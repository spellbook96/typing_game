import React from 'react'
import Sandbox from './Sandbox';
import GameScreen from './GameScreen';

export default function App() {
  return (
    <div><Sandbox>
      <GameScreen></GameScreen>
    </Sandbox>
    </div>
  )
}
