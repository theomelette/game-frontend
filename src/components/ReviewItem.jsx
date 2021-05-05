import React, { useState } from 'react'
import { Image, Button, Box } from "@chakra-ui/react"
import Updateform from './Updateform'
import { Text } from "@chakra-ui/react"




function ReviewItem({review, onUpdatedReview, onDeleteReview} ){
const [show, setShow] = useState(false)
const [likes, setLikes] = useState(0)


function handleLikes(){
  setLikes(likes + 1)

}


  const handleDelete = () => {
    alert("Review Deleted!")
    fetch(`http://localhost:3001/reviews/${review.id}`, {
      method: "DELETE",
    })
        onDeleteReview(review);
      };




    return(


  <Box w="350px" border="4px" borderColor="blue">
          <Button colorScheme="red" onClick={handleDelete}>X</Button>
          <Button colorScheme="blue" onClick={()=>setShow(!show)}>Edit Review</Button>
          <Button colorScheme="blue" onClick={handleLikes}>👍 {review.likes}</Button>
          
    <Image boxSize="300px" src={review.game.image} alt={review.game.name} />
    
      <Text  as="u" fontSize="3xl" color="white">{review.game.name}</Text>
      <Text color="white">Rating:{review.rating}/10</Text>
      <Text color="white">{review.comments}</Text>
  

      <div>
        {show?<Updateform review={review} onUpdatedReview={onUpdatedReview}/>: null}
      </div>

     </Box>
     

    
)

}

export default ReviewItem