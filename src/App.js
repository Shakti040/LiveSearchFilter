import React,{useState} from 'react';
import ToDolist from './ToDolist';



const App=()=>{
const [inputlist,setInputList]=useState("");
const [items,setItems]=useState([]);


 const itemEvent=(event)=>{
    setInputList(event.target.value);
 }

 const listofItems=()=>{
    setItems((prev)=>{
        return [...prev,inputlist];
     })
    setInputList('');
 }

 const deleteItems=(id)=>{
    console.log("deleted");

    setItems((old)=>{
        return old.filter((arr,index)=>{
            return id!==index;
        })
    })
 }
   
    return (
        <>
       <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>TODO List</h1><br/>
            <input type='text' placeholder='Add Items' onChange={itemEvent} value={inputlist} />
            <button onClick={listofItems}>  + </button>

            <ol>
                {items.map((val,index)=>{
                   return <ToDolist 
                   key={index}
                   id={index}
                   text={val}
                   onSelect={deleteItems} />
                })}
            </ol>

        </div>

       </div>
        
        </>
    )
};

export default App;