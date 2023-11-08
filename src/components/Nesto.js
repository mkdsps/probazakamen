import React from "react";
import fajl from "./slike.json";


export default function Nesto(props){
 
   let x = fajl.slike[props.linkovi].linkovi.map(x=> <img src={x} alt='Slika prirodnog kamena'/>);
   console.log(props.children);
   return(
      <div id={props.children} className="Nesto" >
         <h1>{props.children}</h1>
         <div className="kanticar">
            {x}   
         </div>
         
         <img className="inlajn" src={fajl.slike[props.linkovi].pored} alt="slika kamena"/>
         
      </div>
   )
}