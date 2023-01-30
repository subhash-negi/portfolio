import React from 'react'
import insta from '../insta.png';
const fb= require('../fb.webp');
function footer(){
    return(
        <>
        <div className='px-2 rounded bg-zinc-200'>
            <p className='text-xl font-bold'>GET IN TOUCH</p>
            <div className='justify-end  flex'>
                <p className=''>Email to: subhaahnegi@gmail.com</p>
                <a href="#"><img className='h-14 w-14 rounded-full' src={insta}></img></a>
                <a href="*"><img className='mt-2 h-10 w-10 rounded-full' src={fb}></img></a>
            </div>
        </div>
        </>
    );
}
export default footer;