import './Test.css';
function Test(props){
    console.log(props.container,props.cell)
    
//     let cells=document.getElementsByClassName('cell')
//     cells.array.forEach(cell => {
//        cell.addEventListener('click',(e)=>{
//  console.log('you can do it man')
//        }) 
//     });
let turns=['X','O']
let turn;
 window.addEventListener('DOMContentLoaded',()=>{
let turn=turns[Math.floor(Math.random()*10)%2]
 })

const handleClick = (e) => {
    // A ra
    if(e.target.textContent===''){
        e.target.textContent=turn
 turn=(turn==='X')?'O':'X';
    }
   
};

    return(<div className={props.container}><div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                <div className={props.cell} onClick={handleClick}></div>
                
    </div>);
   } 
 function Button(){
    return(<button>btn</button>)
}
export default Test;

