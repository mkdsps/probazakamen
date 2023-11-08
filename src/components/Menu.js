export default function Menu({toggle}){
   return(
      
      <svg onClick={toggle} viewBox='0 0 10 8' width='40' className="menu">
      <path d='M1 1h8M1 4h 8M1 7h8' 
            stroke='#FDF7DE' 
            stroke-width='1' 
            stroke-linecap='round'/>
      </svg>
      
   )
}