import React from 'react';

const SResult=(props)=>{
    const img=`https://source.unsplash.com/400x300/?${props.text}`
    return(
        <>
        <div>
            <img src={img} alt="Shakti" />

        </div>

        </>
    )
}

export default SResult;