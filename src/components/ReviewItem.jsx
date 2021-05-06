import React, { useState } from 'react'
import { Image, Button, Box } from "@chakra-ui/react"
import Updateform from './Updateform'
import { Text, useToast } from "@chakra-ui/react"




function ReviewItem({review, onUpdatedReview, onDeleteReview} ){
const [show, setShow] = useState(false)
const [likes, setLikes] = useState(0)
const toast = useToast();



function handleLikes(){
  setLikes(likes + 1)

}


  const handleDelete = () => {
  
    fetch(`http://localhost:3001/reviews/${review.id}`, {
      method: "DELETE",
    })
        onDeleteReview(review);
      };




    return(


  <Box w="350px" border="4px" borderColor="blue">
          <Button colorScheme="red" onClick={() => {
          handleDelete();
          toast({
            isClosable: false,
            title: "Review Removed",
            duration: 5000,
            position: "top",
            status: "error",
          });
        }}>X</Button>
          <Button colorScheme="blue" onClick={()=>setShow(!show)}>Edit Review</Button>
          <Button colorScheme="blue" onClick={handleLikes}>👍 {review.likes}</Button>
          
    <Image boxSize="300px" src={review.game.image} alt={review.game.name} />
    
      <Text fontSize="3xl" color="blue.200">{review.game.name}</Text>
      <Text color="blue.200">Rating:{review.rating}/10</Text>
      <Text color="blue.200">{review.comments}</Text>
  

      <div>
        {show?<Updateform review={review} onUpdatedReview={onUpdatedReview}/>: null}
      </div>

     </Box>
     

    
)

}

export default ReviewItem