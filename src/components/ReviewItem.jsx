import React from 'react'

function ReviewItem({review} ){
    console.log(review)


    return(
        <div> 
            <img src={review.game.image}/>
            <p>Game:{review.game.name}</p>
            <p>Rating:{review.rating}</p>
            <p>Comment:{review.comments}</p>
            <br></br>
            <br></br>
            <br></br>
           
           

        </div>
    )

}







export default ReviewItem