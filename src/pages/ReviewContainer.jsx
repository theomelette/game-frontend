import React from 'react'
import ReviewItem from '../components/ReviewItem'
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
        <div>
            <div>{allReviews} </div>
        </div>
    )
}






export default ReviewContainer