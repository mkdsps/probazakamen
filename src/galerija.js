import React, { useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Phonenav from './components/Phonenav';
import Nesto from './components/Nesto';


export default function Galerija() {
  const [show, setShow] = React.useState(true);
  const [showPhonenav, setPhonenav] = React.useState(false);
  const myRef = React.useRef();

  useEffect(()=>{
    const observer = new IntersectionObserver((ent)=>{
      const entery = ent[0];
      setShow(!entery.isIntersecting);
    })
    observer.observe(myRef.current);
  },[])

  
  function toggle(){
    setPhonenav(x => !x);
  }

  return (
    <div className='App.css'>
      <div className='kanta'>
        <Header toggle={toggle}/>
        <div ref={myRef} className='triger'></div>
        {showPhonenav && <Phonenav toggle={toggle}/>}
        
        <div className='galerijaNaziv'>
            <h1 > Galerija </h1>
        </div>
        <Nesto linkovi={0}>Fasade</Nesto>
        <Nesto linkovi={1}>Štanglice</Nesto>
        <Nesto linkovi={2}>Stepenice</Nesto>
        <Nesto linkovi={3}>Staze</Nesto>
        <Nesto linkovi={4}>Razno</Nesto>

         <div className='nista'></div>
      </div>
      <div className={`sajdNavigacija ${show && 'opac'}`}>
        <Nav />
      </div>
    </div>
  );
}
