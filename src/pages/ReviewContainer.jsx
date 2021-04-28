import React from 'react'
import ReviewItem from '../components/ReviewItem'


function ReviewContainer({reviews}){
const allReviews = reviews.map((review) => {
    return(
        <ReviewItem
        key={review.id}
        review={review} />
    )
} )

    return(
        <div>
            <h1>ReviewContainer {allReviews} </h1>

        </div>
    )
}






export default ReviewContainer