import Menu from "./Menu";
import {HashLink} from 'react-router-hash-link';
export default function Phonenav({toggle}){
   const crte = '//';
   return (
      <div className="phonenav" > 
      <div className="phonemeni"><Menu toggle={toggle}/></div>
      
         <ul className="nav__links nesto">
               <li><HashLink to="/#pocetna">Pocetna</HashLink></li>
               <li><HashLink to="/#onama">O nama</HashLink></li>
               <li><HashLink to="/#proizvodi">Proizvodi</HashLink></li>
               <li><HashLink to="/#usluge">Usluge</HashLink></li>
               <li><HashLink to="/#kontakt">Kontakt</HashLink></li>  
               <li><HashLink to="/galerija">Galerija</HashLink></li>  
         </ul>  
      </div>
   )
}