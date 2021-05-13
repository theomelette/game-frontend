import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"

function NavBar() {
  return (
    <div className="body">
      <Text fontSize="4xl" color="blue.200">GameReview</Text>
       <br></br>
      <Box>
       
        <ul>
          <Button size="md">
            <Link to="/show"> Main</Link>
          </Button>
          <Button size="md">
            <Link to="/new"> Add New Review</Link>
          </Button>
        </ul>
      </Box>
    </div>
  );
}
export default NavBar;
