import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import "../Styles/Navbar.css";


function Navbar () {
const [expandNavbar, setExpandNavbar ]= useState(false);

const location = useLocation();

useEffect(()=>{
  setExpandNavbar(false);
},[location])
  return (
    <>
     <div className='navbar' id={expandNavbar ? "open" : "close"}>
    
     <div className='togglebtn'>
     <button onClick={()=> {setExpandNavbar((prev)=>!prev);}}>
     <IoMenu />

     </button>
     
     </div>
     <div className={`links ${expandNavbar ? "mobile" : "desktop"}`}>
     <Link to='/'>Home</Link>
<Link to= '/about'>About</Link>
<Link to='/project'>Projects</Link>
<Link to='/contact'>Contact</Link>

</div>
        
        </div>
    </>
   
  )
}

export default Navbar