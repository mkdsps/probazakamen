import React from "react";
import Kartica from "./Kartica";
import infoKartica from "./infoKartica.json"

export default function Proizvodi(){
   let kartice = infoKartica.Proizvodi.map(x=> <Kartica naziv={x.naziv} opis={x.opis} slika={x.slika}/>)

   return(
      <div className="PROIZVODI" id="proizvodi">
         <h1>Proizvodi</h1>
         <div className="proizvodi">
            {kartice}
         </div>
      </div>
   )
}