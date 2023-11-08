import React, { useEffect } from 'react';
import Header from './components/Header';
import Kontakt from './components/Kontakt';
import Nav from './components/Nav';
import Onama from './components/Onama';
import Phonenav from './components/Phonenav';
import Proizvodi from './components/Proizvodi';
import PocetnaStrana from './components/PocetnaStrana';
import Usluge from './components/Usluge';

export default function Pocetna() {
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
        
        <PocetnaStrana />
        <Onama />
        <Proizvodi/>        
        <Usluge/>
        <Kontakt/>
      
      </div>
      <div className={`sajdNavigacija ${show && 'opac'}`}>
        <Nav />
      </div>
    </div>
  );
}
