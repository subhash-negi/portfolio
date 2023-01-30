import React from 'react';
function skills(props){
    return(
        <div className='flex-col'>
            <img className=' ml-10 mb-2 border-2 border-purple-300 object-cover rounded-full h-16 w-16 hover:animate-spin' src={props.image}/>
        </div>
    );
}
export default skills;