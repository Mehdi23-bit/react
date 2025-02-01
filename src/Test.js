import './Test.css';
function Test(props){
    console.log(props.container,props.cell)
let turn='X';
let game=[['#','#','#'],
          ['#','#','#'],
          ['#','#','#']]
let Win=false;
const handleClick = (e) => {
    
    if(e.target.textContent==='' && !Win){
        e.target.style.color=(turn==='X')?'green':'red';
        e.target.textContent=turn
 turn=(turn==='X')?'O':'X';
 document.getElementsByClassName('turn')[0].textContent=`Player ${turn}'s turn`
 let index=indexOf(document.getElementsByClassName('cell'),e.target)
 let x=Math.floor(index/3)
 let y=index%3
 console.log(x,y)
game[x][y]=e.target.textContent;

if(isWon(x,y)){
     document.getElementsByClassName('turn')[0].textContent=`Player ${game[x][y]} is won`
     Win=true

}else{
    document.getElementsByClassName('turn')[0].textContent=`Player ${turn}'s turn`
}
       }
   };
   function indexOf(array,object){
    for(let i=0;i<array.length;i++){
        if(array[i]==object)
            return i;
    }
   }
 
   function isWon(x,y){
    console.log(check(game[x]) ,check(extract_Y(y,game)) ,check(extract_D1(game)),check(extract_D2(game)))
return (check(game[x]) || check(extract_Y(y,game)) || check(extract_D1(game)) || check(extract_D2(game)) )
    
}
  
   function check(array){
    console.log("check"+array)
    for(let j=0;j<2;j++){
        if(array[j]!=array[j+1] || (array[j] ==='#')){
            return false;
        }
         }
         return true
        }
   function extract_Y(y,array){
    let newarry=[];
    for(let i=0;i<3;i++){
         newarry.push(array[i][y]) 
           }
         return newarry;
    }
function extract_D1(array){
    let newarry=[]
    for(let i=0;i<3;i++){
        newarry.push(array[i][i])
    }
    return newarry
}
function extract_D2(array){
    let myarray=[]
    for(let i=0;i<3;i++){
        myarray.push(array[i][2-i])
    }
    console.log(myarray)
    return myarray
}
function clear(){
console.log(Win)
Win=false
game=[['#','#','#'],
          ['#','#','#'],
          ['#','#','#']]
let cells=document.querySelectorAll('.cell');
 document.getElementsByClassName('turn')[0].textContent=`Player ${turn}'s turn`
cells.forEach(element => {
    element.textContent=''
});
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
                <button onClick={clear}>restart</button>
                </div>);
                }
    
export default Test;

