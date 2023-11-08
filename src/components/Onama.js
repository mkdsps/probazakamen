export default function Onama(){
   const nesto = '//';
   return(
      <div className="Onama" id="onama">
         <h1>O NAMA</h1>
         <img className="komp" src="slike/a.png" alt="kameni put"/>
         <img className="telefon" src="slike/b.png" alt="kameni put"/>
         <div className="kutijaZaKutije">
            <div className="margina">
               <p>
               <span>{nesto}</span> <span className="crna">Prirodni kamen DN</span> je osnovan 2014. godine kako bi klijentima pruzio najbolju uslugu ugradnje brajkovackog pescara i druge vrste dekorativnog kamena. 
               Nas rad odlikuju <span>preciznost</span>, <span>postovanje dogovorenih rokova</span>, a pre svega zelja da svakom klijentu ispunimo <span>zeljena ocekivanja</span>.
               </p>
            </div>

            <div>
               <p>
               <span>{nesto}</span> Ovim poslom bavili su se i nasi preci, a mi smo tu danas da njihov rad i istrajnost predstavimo u najboljem svetlu.
               Dugotrajnost kamena moze se prepoznati u domovima koje ovaj kamen ukrasava preko 60 godina. 
               </p>
            </div>
         </div>
      </div>
   )
}