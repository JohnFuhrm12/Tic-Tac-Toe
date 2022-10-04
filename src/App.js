import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [player, setPlayer] = useState('Player1')

  const [isActiveX1, setIsActiveX1] = useState(false);
  const [isActiveO1, setIsActiveO1] = useState(false);
  const [isActiveX2, setIsActiveX2] = useState(false);
  const [isActiveO2, setIsActiveO2] = useState(false);
  const [isActiveX3, setIsActiveX3] = useState(false);
  const [isActiveO3, setIsActiveO3] = useState(false);

  const [isActiveX4, setIsActiveX4] = useState(false);
  const [isActiveO4, setIsActiveO4] = useState(false);
  const [isActiveX5, setIsActiveX5] = useState(false);
  const [isActiveO5, setIsActiveO5] = useState(false);
  const [isActiveX6, setIsActiveX6] = useState(false);
  const [isActiveO6, setIsActiveO6] = useState(false);

  const [isActiveX7, setIsActiveX7] = useState(false);
  const [isActiveO7, setIsActiveO7] = useState(false);
  const [isActiveX8, setIsActiveX8] = useState(false);
  const [isActiveO8, setIsActiveO8] = useState(false);
  const [isActiveX9, setIsActiveX9] = useState(false);
  const [isActiveO9, setIsActiveO9] = useState(false);

  const [winner, setWinner] = useState('');

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [boardCounter, setBoardCounter] = useState(0);

  function play(e) {
    if (player === 'Player1') {
      showX(e);
    };
    if (player === 'Player2') {
      showO(e);
    };
  };

  function showX(e) {
    const id = e.target.id;
    if (id === '1' && isActiveO1 === false) {
      setIsActiveX1(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '2' && isActiveO2 === false) {
      setIsActiveX2(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '3' && isActiveO3 === false) {
      setIsActiveX3(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };

    if (id === '4' && isActiveO4 === false) {
      setIsActiveX4(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '5' && isActiveO5 === false) {
      setIsActiveX5(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '6' && isActiveO6 === false) {
      setIsActiveX6(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };

    if (id === '7' && isActiveO7 === false) {
      setIsActiveX7(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '8' && isActiveO8 === false) {
      setIsActiveX8(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '9' && isActiveO9 === false) {
      setIsActiveX9(true);
      setPlayer('Player2');
      setBoardCounter(boardCounter + 1);
    };
  };

  function showO(e) {
    const id = e.target.id;
    if (id === '1' && isActiveX1 === false) {
      setIsActiveO1(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '2' && isActiveX2 === false) {
      setIsActiveO2(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '3' && isActiveX3 === false) {
      setIsActiveO3(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };

    if (id === '4' && isActiveX4 === false) {
      setIsActiveO4(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '5' && isActiveX5 === false) {
      setIsActiveO5(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '6' && isActiveX6 === false) {
      setIsActiveO6(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };

    if (id === '7' && isActiveX7 === false) {
      setIsActiveO7(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '8' && isActiveX8 === false) {
      setIsActiveO8(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
    if (id === '9' && isActiveX9 === false) {
      setIsActiveO9(true);
      setPlayer('Player1');
      setBoardCounter(boardCounter + 1);
    };
  };

  useEffect(() => {
    checkRows();
    checkColumns();
    checkDiagonal();
    checkAll();
    console.log(boardCounter);
  });

  function checkRows() {
    if (isActiveX1 && isActiveX2 && isActiveX3) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO1 && isActiveO2 && isActiveO3) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
    if (isActiveX4 && isActiveX5 && isActiveX6) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO4 && isActiveO5 && isActiveO6) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
    if (isActiveX7 && isActiveX8 && isActiveX9) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO7 && isActiveO8 && isActiveO9) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
  };

  function checkColumns() {
    if (isActiveX1 && isActiveX4 && isActiveX7) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO1 && isActiveO4 && isActiveO7) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
    if (isActiveX2 && isActiveX5 && isActiveX8) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO2 && isActiveO5 && isActiveO8) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
    if (isActiveX3 && isActiveX6 && isActiveX9) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO3 && isActiveO6 && isActiveO9) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
  };

  function checkDiagonal() {
    if (isActiveX1 && isActiveX5 && isActiveX9) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO1 && isActiveO5 && isActiveO9) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
    if (isActiveX3 && isActiveX5 && isActiveX7) {
      setWinner('Player1');
      setBoardCounter(0);
      setPlayer1Score(player1Score + 1)
      clearBoard();
    };
    if (isActiveO3 && isActiveO5 && isActiveO7) {
      setWinner('Player2');
      setBoardCounter(0);
      setPlayer2Score(player2Score + 1)
      clearBoard();
    };
  };

  function checkAll() {
    if (boardCounter === 9) {
      clearBoard();
      setBoardCounter(0);
    };
  };

  function clearBoard() {
    setIsActiveX1(false);
    setIsActiveO1(false);
    setIsActiveX2(false);
    setIsActiveO2(false);
    setIsActiveX3(false);
    setIsActiveO3(false);
    setIsActiveX4(false);
    setIsActiveO4(false);
    setIsActiveX5(false);
    setIsActiveO5(false);
    setIsActiveX6(false);
    setIsActiveO6(false);
    setIsActiveX7(false);
    setIsActiveO7(false);
    setIsActiveX8(false);
    setIsActiveO8(false);
    setIsActiveX9(false);
    setIsActiveO9(false);
  };

  function refresh() {
    window.location.reload(false);
  };

  return (
    <>
    <h1 className='title'>Tic-Tac-Toe</h1>
    <div className="Page">
      <div className='board'>
      <div className='row'>
        <button id='1' onClick={play} className='square'><h1 style={{
          display: isActiveX1 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO1 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='2' onClick={play} className='square'><h1 style={{
          display: isActiveX2 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO2 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='3' onClick={play} className='square'><h1 style={{
          display: isActiveX3 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO3 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>
      </div>

      <div className='row'>
        <button id='4' onClick={play} className='square'><h1 style={{
          display: isActiveX4 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO4 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='5' onClick={play} className='square'><h1 style={{
          display: isActiveX5 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO5 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='6' onClick={play} className='square'><h1 style={{
          display: isActiveX6 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO6 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>
      </div>

      <div className='row'>
        <button id='7' onClick={play} className='square'><h1 style={{
          display: isActiveX7 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO7 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='8' onClick={play} className='square'><h1 style={{
          display: isActiveX8 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO8 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>

        <button id='9' onClick={play} className='square'><h1 style={{
          display: isActiveX9 ? 'block' : 'none',
        }} className='X'>X</h1><h1 style={{
          display: isActiveO9 ? 'block' : 'none',
        }} className='O'>O</h1><h1 className='filler'>V</h1></button>
      </div>
      </div>
      <div className='scoreBox'>
        <h1 className='turnTitle'>{player}'s Turn</h1>
        <div className='scores'>
          <h1>Player 1: {player1Score}</h1>
          <h1>Player 2: {player2Score}</h1>
          <button onClick={refresh} className='reset'>Reset</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
