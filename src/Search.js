import React, { useState } from 'react';
import SResult from './SResult';

const Search=()=>{

    const [name,setname]=useState("");

    const InputText=(event)=>{
        setname(event.target.value);
    }

    return(
        <>
        <div>
            <input type="text" placeholder="Write a name" value={name} onChange={InputText} />
        </div>
        <SResult text={name} />
        </>
    )
}

export default Search;