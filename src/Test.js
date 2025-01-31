import './Test.css';
function Test(props){
    console.log(props.container,props.cell)
    
//     let cells=document.getElementsByClassName('cell')
//     cells.array.forEach(cell => {
//        cell.addEventListener('click',(e)=>{
//  console.log('you can do it man')
//        }) 
//     });
const handleClick = (e) => {
    e.target.textContent='X'
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

