import React from "react";
import { useState } from "react";
import { Square } from "../components/comp";
import { Winnercheck } from "../winnercheck";
function App() {
  const [isXnext,setisXnext] = useState(true);
  const [squares, setsquares] = useState(Array(9).fill(null));
  function reset(){
  setsquares(Array(9).fill(null))
  return;
  }
  function handleclick(i) {
    if(Winnercheck(squares) || squares[i]){
      return;
    }
    const nextsquare = squares.slice();
    if(isXnext == true){
      nextsquare[i] = 'x';
    }else{
      nextsquare[i]= 'o';
    }
    setisXnext(!isXnext)
    setsquares(nextsquare);

  }
  const winner = Winnercheck(squares);
  let status;
  if(winner){
    status = "winner: "+ winner; 
  }else if(squares.every(places => places !== null)){
    status = "Draw"
  }
  else{
    status = "Nextplayer: " + (isXnext ? 'x':'o')
  }
  return (
    <>
      <div className="row">
        <Square value={squares[0]} onsquareclick={()=>handleclick(0)} />
        <Square value={squares[1]} onsquareclick={()=>handleclick(1)} />
        <Square value={squares[2]} onsquareclick={()=>handleclick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onsquareclick={()=>handleclick(3)} />
        <Square value={squares[4]} onsquareclick={()=>handleclick(4)} />
        <Square value={squares[5]} onsquareclick={()=>handleclick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onsquareclick={()=>handleclick(6)} />
        <Square value={squares[7]} onsquareclick={()=>handleclick(7)} />
        <Square value={squares[8]} onsquareclick={()=>handleclick(8)} />
      </div>
      <br />
      <div className="status">{status}</div>
      <br />
      <br />
      <div className="newgamebtndiv">
        <button id="newgamebtn" onClick = {reset}>New game</button>
      </div>
    </>
  );
}

export default App