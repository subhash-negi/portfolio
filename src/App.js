import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/navigation';
import Main from './components/main_container';
import Second from './components/second';
import Block from './block.png';
import Ukfj from './ukfj.png';
import Movie from './movie.png';
import Skills from './components/skillset';
import html from './html.png';
import css from './css.png';
import js from './js.png';
import blockchain from './blockchain.png';
import smart from './smart.png';
import reactt from './logo192.png';
import c from './c.png';
import cpp from './c++.png';
import web3 from './web3.png';
import node from './node.png';
import Footer from './components/footer';
function App() {
  return (
    <div className="App border-2 rounded-md">
        <Navigationbar/>
        <Main/>
        <div className='flex'>
          <Second image={Block} name='fraud detection and prevention using blockchain'/>
          <Second image={Ukfj} name='full stack web app for a restaurent chain in dehradun'/>
        </div>
        <div className='flex'>
          <Second image={Movie} name='Movie recommendation system'/>
          <Second image={Movie} name='Movie recommendation system'/>
        </div>
        <p className='my-4 text-left ml-32 text-2xl font-bold'> SKILLS</p>
        <div className='flex'>
            <Skills image={html} />
            <Skills image={css}/>
            <Skills image={js}/>
        </div>
        <p className='mb-6'></p>
        <div className='flex'>
            <Skills image={c} />
            <Skills image={blockchain} />
            <Skills image={cpp} />
        </div>
        <p className='mb-6'></p>
        <div className='flex'>
            <Skills image={smart} />
            <Skills image={reactt} />
            <Skills image={node} />
        </div>
        <Footer/>
      </div>

  );
}

export default App;
