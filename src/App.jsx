/* eslint-disable react/prop-types */
import { useState } from "react"
import { calculateWinner } from "./CalculateWinner";

function Squeare({value, onSqueareClick}) {
  return <button className="squeare" onClick={onSqueareClick}>{value}</button>
}

function Reset({onResetClick}){
  return(
    <button className="reset" onClick={onResetClick}>reset</button>
  )

}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [histories, setHistories] = useState([Array(20).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = histories[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...histories.slice(0, currentMove + 1), nextSquares];
    setHistories(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setHistories([Array(20).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = histories.map((squeares, move) => {
    let description = move > 0 ? `Go to move#${move}` : 'Go to start';

    return(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squeares={currentSquares} onPlay={handlePlay} onReset={handleReset} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({xIsNext, squeares, onPlay, onReset}) {
  function handleClick(i) {
    if(squeares[i] || calculateWinner(squeares))return;
    const nextSqueare = squeares.slice();
    nextSqueare[i] = xIsNext ? "X" : "O";
    onPlay(nextSqueare);
  }

  const winner = calculateWinner(squeares);
  let status = "";
  if(winner){
    status = 'Winner :' + winner;
  }else{
    status = 'Next Player:' + (xIsNext ? 'X' : 'O');
  }

  return(
    <>
    <div className="status">{status}</div>
    <div className="board">
      <Squeare value={squeares[0]} onSqueareClick={() => {handleClick(0)}}/>
      <Squeare value={squeares[1]} onSqueareClick={() => handleClick(1)}/>
      <Squeare value={squeares[2]} onSqueareClick={() => handleClick(2)}/>
      <Squeare value={squeares[3]} onSqueareClick={() => handleClick(3)}/>
      <Squeare value={squeares[4]} onSqueareClick={() => handleClick(4)}/>
      <Squeare value={squeares[5]} onSqueareClick={() => handleClick(5)}/>
      <Squeare value={squeares[6]} onSqueareClick={() => handleClick(6)}/>
      <Squeare value={squeares[7]} onSqueareClick={() => handleClick(7)}/>
      <Squeare value={squeares[8]} onSqueareClick={() => handleClick(8)}/>
      <Squeare value={squeares[9]} onSqueareClick={() => handleClick(9)}/>
      <Squeare value={squeares[10]} onSqueareClick={() => handleClick(10)}/>
      <Squeare value={squeares[11]} onSqueareClick={() => handleClick(11)}/>
      <Squeare value={squeares[12]} onSqueareClick={() => handleClick(12)}/>
      <Squeare value={squeares[13]} onSqueareClick={() => handleClick(13)}/>
      <Squeare value={squeares[14]} onSqueareClick={() => handleClick(14)}/>
      <Squeare value={squeares[15]} onSqueareClick={() => handleClick(15)}/>
      <Squeare value={squeares[16]} onSqueareClick={() => handleClick(16)}/>
      <Squeare value={squeares[17]} onSqueareClick={() => handleClick(17)}/>
      <Squeare value={squeares[18]} onSqueareClick={() => handleClick(18)}/>
      <Squeare value={squeares[19]} onSqueareClick={() => handleClick(19)}/>
    </div>
    <div>
      <Reset onResetClick={onReset}/>
    </div>
    </>
  )
}