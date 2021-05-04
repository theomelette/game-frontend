import React from 'react'
import "./ReviewItem.css"
import Updateform from './Updateform'

function ReviewItem({review, onUpdatedReview, onDeleteReview} ){
  
  const handleDelete = () => {
    alert("Review Deleted!")
    fetch(`http://localhost:3001/reviews/${review.id}`, {
      method: "DELETE",
    })
        onDeleteReview(review);
      };

    return(



<main className="card">
  <div>
    <img className='bg-img' src={review.game.image} alt={review.game.name} />
    <div className="content">
      <h1>{review.game.name}</h1>
      <h2>Rating:{review.rating}/10</h2>
      <h3>{review.comments}</h3>
      <Updateform review={review} onUpdatedReview={onUpdatedReview}/>
      <button onClick={handleDelete}className='button2'>X</button>
    </div>
  </div>
</main>


           
    
)

}





export default ReviewItem