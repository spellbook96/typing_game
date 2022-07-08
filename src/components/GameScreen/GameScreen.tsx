import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { GameOver } from './GameOver';
import { Home } from './Home'
import { Playing } from './Playing';

export default function GameScreen() {
  const gameState = useSelector((state: RootState) => state.game.state);
  switch(gameState) {
    case "home":
      return <Home></Home>
    case "playing":
      return <Playing></Playing>
    case "gameOver":
      return <GameOver></GameOver>
    default:
      return <div>Game Screen</div>
  }  
}
