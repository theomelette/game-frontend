import React from 'react'
import ReviewItem from '../components/ReviewItem'
import { Grid } from "@chakra-ui/react"



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
        
            <div>{allReviews} </div>
    )
}






export default ReviewContainer