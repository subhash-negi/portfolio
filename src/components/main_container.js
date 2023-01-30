import React from 'react';
import meriphoto from './subhash.jpeg';
function main(){
return(
    <section>
        <img className='border-4 border-purple-500 ml-24 mt-4 object-cover h-32 w-32 rounded-full' src={meriphoto}/>
        <p className='mt-3 ml-10 text-left text-lg text-blue-600'>Hi, this is Subhash Negi</p>
        <p className='ml-10 text-left text-lg text-blue-600'>I am a full-stack web developer</p>
        <p className='ml-10 text-left text-lg text-blue-600'>I also develop blockchain based DAPPS</p>
        <button className='px-2 my-2 items-left border-2 border-purple-500 rounded-md hover:bg-purple-200'>DOWNLOAD CV</button>
        <p className='text-left ml-28 text-2xl font-bold'> PROJECTS</p>
    </section>

    );
}
export default main;


