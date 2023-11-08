import React from 'react';
import Menu from './Menu';
import {HashLink} from 'react-router-hash-link';

export default function Header({toggle}){
   // const [show, setShow] = React.useState(false);

  

   return(
      <header id="pocetak">
         <div className='pomocniHeader'>
            <img src="slike/icon.png" alt="logo"/>
            <h1>Prirodni Kamen DN</h1>
         </div>
         
         <nav>
            <ul className="nav__links skloni">
               <li><HashLink to="/#pocetna">Pocetna</HashLink></li>
               <li><HashLink to="/#onama">O nama</HashLink></li>
               <li><HashLink to="/#proizvodi">Proizvodi</HashLink></li>
               <li><HashLink to="/#usluge">Usluge</HashLink></li>
               <li><HashLink to="/#kontakt">Kontakt</HashLink></li>
            </ul>
         </nav>
         <Menu toggle={toggle}/>
      </header>
   )
}
