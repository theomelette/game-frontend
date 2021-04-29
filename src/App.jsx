
import './App.css';
import { useState, useEffect } from 'react'
import ReviewContainer from './pages/ReviewContainer'
import AddForm from './pages/AddForm'

function App() {
  const [reviews, setReviews] = useState([])
  useEffect (() => {
    fetch ('http://localhost:3001/reviews')
    .then(resp => resp.json())
    .then(reviews => {
      setReviews(reviews)
    })
  }, [])

  function handleAddReview(newReview) {
    const updatedReviewsArray = [ newReview, ...reviews]
    setReviews(updatedReviewsArray)
}


  return (
    <div className="App">
      <AddForm onAddPost={handleAddReview}/>
      <ReviewContainer reviews={reviews} />
 
    </div>
  );
}

export default App;
