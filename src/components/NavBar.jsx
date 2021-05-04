import React from 'react'
import {Link} from 'react-router-dom'




function NavBar() {
return ( 
            <ul>
          <li><Link to="/home"> Home</Link></li>
          <li><Link to="/show"> All Reviews</Link></li>
          <li><Link to="/new"> Add New Review</Link></li>
          </ul>
       
    )
}
export default NavBar