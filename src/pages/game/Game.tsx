import React, { FC } from 'react';
import Board from './Board';
import './game.scss';

const Game: FC<any> = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
