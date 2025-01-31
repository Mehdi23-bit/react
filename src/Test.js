import './Test.css';
function Test(props){
    console.log(props.container,props.cell)
let turn='X';
let game=[['#','#','#'],
          ['#','#','#'],
          ['#','#','#']]
const handleClick = (e) => {
    
    if(e.target.textContent===''){
        e.target.textContent=turn
 turn=(turn==='X')?'O':'X';
 document.getElementsByClassName('turn')[0].textContent=`Player ${turn}'s turn`
 let index=indexOf(document.getElementsByClassName('cell'),e.target)
 let x=Math.floor(index/3)
 let y=index%3
 console.log(x,y)
game[x][y]=e.target.textContent
if(isWon(x,y)){
    console.log("win")
}
console.log(game)
       }
   };
   function indexOf(array,object){
    for(let i=0;i<array.length;i++){
        if(array[i]==object)
            return i;
    }
   }
   function isWon(x,y){
return check(game[x] || check(extract(y,game)))
    
}
  
   function check(array){
    for(let i=0;i<array.length-1;i++){
        if(array[i]!=array[i+1]){
            return false;
        }
         }
         return true
        }
   function extract(y,array){
    let newarry;
    for(let i=0;i<array.length;i++){
         newarry.push(array[i][y]) 
           }
         return newarry;
    }

         return(<div className='tic_tac'>
            <h1>Tic Tac Toe</h1>
            <p className='turn'>Player {turn}'s turn</p>
                <div className={props.container}>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                </div>
                </div>);
                }
    
export default Test;

