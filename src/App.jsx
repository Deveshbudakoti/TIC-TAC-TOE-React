import React from "react";
import { useState } from "react";
import { Isnameaddedbox, Square } from "../components/comp";
import { Winnercheck } from "../winnercheck";
function App() {
  const [isXnext,setisXnext] = useState(true);
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isnameadded, setisnameadded] = useState(false);
  function renderrow(rowindices){
    return(
    <div className="row">
      {rowindices.map(indice => (<Square value={squares[indice]} onsquareclick={()=>handleclick(indice)} />))}
    </div>
    )
  }

  function IsNameEnteredbtnclicked(){
    setisnameadded(true);
  }
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
    <div>
      {!isnameadded && <Isnameaddedbox onnameadd={IsNameEnteredbtnclicked} />}
    </div>
      <div>
        {renderrow([0,1,2])}
        {renderrow([3,4,5])}
        {renderrow([6,7,8])}
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