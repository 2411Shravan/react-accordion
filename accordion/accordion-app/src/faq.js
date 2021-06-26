import React,{useState} from 'react';
import{BsPlus,BsX} from 'react-icons/bs';

const DataRequired=({question,answer})=>{
    const [display,setdisplay] =useState(false);

    return(
        <article className='question'>
            <header>
            <h3>{question}</h3>
            <button className="btn" onClick={()=> setdisplay(!display)}>
                {
                    display?<BsX/>:<BsPlus/>
                }
            </button>
            </header>
        {
            display && <p>{answer}</p>
        }
        </article>
    );


}

export default DataRequired;