import React, { useState,useEffect } from 'react';
import axios from 'axios';
const ComA=()=>{

    const [num,set]=useState(1);
    const [name,setname]=useState();
    const [moves,setmoves]=useState();

    const check=(e)=>{
        set(e.target.value);
    }
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.length);
        }
        getData();
    });

    return(
        <>

        <h1>You choose {num}</h1>
        <h1>You choose {name}</h1>
        <h1>You choose {moves}</h1>
        <select value={num}  onChange={check}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="12"> 12 </option>
            <option value="16"> 16 </option>
        </select>
        
        </>
    )
}

export default ComA;