import React from "react"
// import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
export default function Nav(){
   const crte = '//';
   

   return (
      <ul className="nav__links nesto">
         <li className="razmak"><HashLink to="/#pocetna"><span>{crte}</span>  Pocetna</HashLink></li>
         <li className="razmak"><HashLink to="/#onama"><span>{crte}</span>  O nama</HashLink></li>
         <li className="razmak"><HashLink to="/#proizvodi"><span>{crte}</span>  Proizvodi</HashLink></li>
         {/* <li className="razmak"><Link to="#proizvodi"><span>{crte}</span>  Proizvodi</Link></li> */}

         <li className="razmak"><HashLink to="/galerija"><span>{crte}</span>  Galerija</HashLink></li>
         
         <li className="razmak"><HashLink to="/#usluge"><span>{crte}</span>  Usluge</HashLink></li>
         <li className="razmak"><HashLink to="/#kontakt"><span>{crte}</span>  Kontakt</HashLink></li>
         
      </ul>  
   )
}