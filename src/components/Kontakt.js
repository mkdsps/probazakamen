export default function Kontakt(){
   return(
      <div className="Kontakt" id="kontakt">
         <hr></hr>
         <div className="kontaktKutija">
            <div className="logo">
             <img src="slike/DNLOGO.png" alt="logo"/>
            </div>
            <div className="info">
               <div>
                  
                  <h2>Kontakt</h2>
               </div>
               <div>
                  <img src="slike/lokacija.png" alt="location icon"/>
                  <h3>Kosovska 35, Kragujevac 34000</h3>
               </div>
               <div>
                  <img src="slike/mail.png" alt="mail icon"/>
                  <h3><a href="mailto:alkicafiks1@gmail.com">alkicafiks1@gmail.com</a></h3>
               </div>

               <div>
                  <img className="kuk" src="slike/phone.png" alt="phone icon"/>
                  <h3 className="fon"><a href="tel:+0693120388">069 3120388</a></h3>
                  <h3 className="komp">069 3120388</h3>
               </div>
               <div className="social">
                  <a href="https://www.facebook.com/kamendn/?locale=sr_RS" target="_blank" rel="noreferrer"><img src="slike/fbook.png" alt="facebook icon"/></a>
                  <a href="https://instagram.com/prirodni_kamen_dn?igshid=Zjc2ZTc4Nzk=" target="_blank"  rel="noreferrer"><img src="slike/ig.png" alt="instagram icon"/></a>
               </div>
            </div>
         </div>
         
         <div className="mapica">
            <iframe class="gmap_iframe"  frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=1000&amp;height=350&amp;hl=en&amp;q=Prirodni kamen dn&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map"></iframe>
         </div>
         
      </div>
   )
}