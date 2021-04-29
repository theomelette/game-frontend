import React from 'react'
import "./ReviewItem.css"

function ReviewItem({review} ){
  
    return(




<main className="grid">
  <article>
    <img src={review.game.image} alt={review.game.name} />
    <div className="text">
      <h1>{review.game.name}</h1>
      <h2>Rating:{review.rating}</h2>
      <h3>{review.comments}</h3>
      <button>Delete Review </button>
    </div>
  </article>
</main>


           
    
    )

}





export default ReviewItem