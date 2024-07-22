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
export function Isnameaddedbox({onnameadd}){
  return(
  <form action="">
    <input type="text" placeholder="enter name 2" className="Enternamebox"/>
    <input type="text" placeholder="enter name 1" className="Enternamebox"/>
    <button onClick={onnameadd}>Enter Game</button>
  </form>
)
}
 