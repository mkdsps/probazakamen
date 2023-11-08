import React from "react"


export default function PocetnaStrana(){
   return(
      <div className="PocetnaStrana" id="pocetna">
         <div className="glavnaSlika">
            <div className="zutaKutija">
               <img src="slike/DNLOGO.png" alt="logo"/>
            </div>
         </div>
            <div className="zuta">
               <p className="razmacic">
                   <span>//</span> Jedna od <span className="crna">vodecih firmi</span> po obradjivanju, a prvi po <span>kvalitetu prirodnog kamena</span>  u Srbiji.
               </p>
               <p>
                   <span>//</span> Preko <span className="crna">20 razlicitih vrsti kamena</span> obradjenih na vise nacina mogu ukrasiti Vas dom.
               </p>     
            </div>
         <div className="muzej">
            <div>
               <p>
                  Spomen-muzej “21. oktobar” Kragujevac
               </p>
            </div>
         </div>
         <div className="zuta  odlikujuNas">
            <p>
            <span>//</span> Odlikuju nas:
            </p>
            <ul>
               <li>Brza realizacija dogovorenih poslova</li>
               <li>Dugotrajnost i kvalitet kamena</li>
               <li>Lako sklapanje dogovora</li>
            </ul>
         </div>
      </div>
   )
}