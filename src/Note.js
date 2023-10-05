import React from 'react';

const Note=(props)=>{

const Ondelete=()=>{
    props.deleteItem(props.id);
}

    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <br></br>
            <p>{props.content}</p>
            <button onClick={Ondelete}>Delete</button>
        </div>
        </>
    )
}

export default Note;