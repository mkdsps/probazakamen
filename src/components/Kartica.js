import React from "react";
import { HashLink } from 'react-router-hash-link';

export default function Kartica({naziv,opis,slika}){
   // console.log(naziv);
   return (
      <div className="kartica">
         <img className="" src={slika} alt="kameni put"/>
         <h1>{naziv}</h1>
         <p>
            {opis}
         </p>
            <button ><HashLink to={`galerija#${naziv}`} preventScrollReset={false}>Saznaj vise</HashLink></button>
      </div>
   )
}