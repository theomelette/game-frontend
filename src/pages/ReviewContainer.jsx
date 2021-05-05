import React from 'react'
import ReviewItem from '../components/ReviewItem'
import { Box } from "@chakra-ui/react"
import './ReviewContainer.css'




function ReviewContainer({reviews, onUpdatedReview, onDeleteReview}){
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
            <Box className="card" w="300px" >{allReviews} </Box>
            </div>
    )
}






export default ReviewContainer