import React from 'react'
import ReviewItem from '../components/ReviewItem'
import { Box } from "@chakra-ui/react"
import './ReviewContainer.css'
import {Button, Flex, useToast, useColorMode} from '@chakra-ui/react'




function ReviewContainer({reviews, onUpdatedReview, onDeleteReview}){
   const {colorMode, toggleColorMode} = useColorMode()
    const allReviews = reviews.map((review) => {
    return(
        
        <ReviewItem
        key={review.id}
        review={review}
        onUpdatedReview={onUpdatedReview}
        onDeleteReview={onDeleteReview}/>
      
    
    )
} )

    return(
      
        <div className="body">
            <Flex align="left" justify="left" height="5vh">
                <Button size="md" onClick={() => toggleColorMode()}>Theme</Button>
                
            </Flex>
            <Box className="card" w="300px" >{allReviews} </Box>
            </div>
     
    )
}






export default ReviewContainer