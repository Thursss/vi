import React, { FC } from 'react';
import Board from './board';
import './game.scss';

const Game: FC<any> = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
