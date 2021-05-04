import React from 'react'
import { Image, Stack } from "@chakra-ui/react"
import Updateform from './Updateform'
import { Button } from "@chakra-ui/react"
import { Wrap, WrapItem, Center } from "@chakra-ui/react"


function ReviewItem({review, onUpdatedReview, onDeleteReview} ){
  
  const handleDelete = () => {
    alert("Review Deleted!")
    fetch(`http://localhost:3001/reviews/${review.id}`, {
      method: "DELETE",
    })
        onDeleteReview(review);
      };

    return(




      <div>
  
       

       
 
 
    <Image boxSize="300px" src={review.game.image} alt={review.game.name} />
 
       


    <Stack spacing={8}>
 
      <p>{review.game.name}</p>
      <p>Rating:{review.rating}/10</p>
      <p>{review.comments}</p>
      </Stack>
    


      <Updateform review={review} onUpdatedReview={onUpdatedReview}/>
      <Button colorScheme="red" onClick={handleDelete}>X</Button>
     
     
    </div>
    
  
  



           
    
)

}





export default ReviewItem