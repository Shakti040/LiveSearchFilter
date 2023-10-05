import React, { useState } from 'react';

const CreateNote = (props) => {

    const [note,setnote]=useState({
        title:"",
        content:"",
    })

    const Inputtext=(event)=>{
        const {name,value}=event.target;
        setnote((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const Click=(event)=>{
        event.preventDefault();
        props.pass(note);
        setnote({
            title:"",
            content:"",
        });
    }


    return (
        <>
            <div>
                <form>
                    <input type='text' name="title" value={note.title} onChange={Inputtext} placeholder='Title' />
                    <textarea rows='' cols='' name="content" value={note.content} onChange={Inputtext} placeholder='Write a note' />
                    <button onClick={Click}>+</button>
                </form>
            </div>
        </>
    )
}
export default CreateNote;