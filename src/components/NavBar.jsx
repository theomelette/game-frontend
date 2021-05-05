import React from 'react'
import {Link } from 'react-router-dom'
import { Box } from "@chakra-ui/react"



function NavBar() {
return ( 
  <div className="body">
  <Box w="300px" color="white">
            <ul>

          <li><Link to="/show"> All Reviews</Link></li>
          <li><Link to="/new"> Add New Review</Link></li>
          </ul>
       </Box>
       </div>
    )
}
export default NavBar