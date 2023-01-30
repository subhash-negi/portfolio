import React from 'react';

function second(props){
    return(
        <>
        <div className='ml-6 mt-4 w-32 h-32 border-2 border-purple-300 hover:bg-green-200'>
            <img className='h-16 w-16 ml-7 mt-2 rounded-full object bg-black 'src={props.image}/>
            <p className='text-xs font-semibold'>{props.name}</p>
        </div>

        </>
    );
}
export default second;