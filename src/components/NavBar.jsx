import React from 'react'
import {Link } from 'react-router-dom'
import { Box, Button } from "@chakra-ui/react"



function NavBar() {
return ( 
  <div className="body">
  <Box>
            <ul>

          <Button size="md" ><Link to="/show"> All Reviews</Link></Button>
          <Button size="md" ><Link to="/new"> Add New Review</Link></Button>
          </ul>
       </Box>
       </div>
    )
}
export default NavBar