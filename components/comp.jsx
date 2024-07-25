import React from "react";
export function Square({ value, onsquareclick }) {
  if(value==='x'){
    return (
      <button onClick={onsquareclick} className="square">
        {value}
      </button>
    );}
    else{
      return (
        <button onClick={onsquareclick} className="square2">
          {value}
        </button>);
    }
  }
export const Isnameaddedbox = React.memo(function({onnameadd}){
  return(
    <div className="nameinputdiv">
      <p className="heading">PLAYER 1</p>
    <input type="text" placeholder="enter name 1" className="nameinputbox"/>
      <p className="heading">PLAYER 2</p>
    <input type="text" placeholder="enter name 2" className="nameinputbox"/>
    <button onClick={onnameadd} className="entergamebtn">Enter Game</button> 
    </div>
)
})
 