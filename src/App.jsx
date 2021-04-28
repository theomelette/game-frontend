
import './App.css';
import { useState, useEffect } from 'react'
import ReviewContainer from './pages/ReviewContainer'

function App() {
  const [reviews, setReviews] = useState([])
  useEffect (() => {
    fetch ('http://localhost:3001/reviews')
    .then(resp => resp.json())
    .then(reviews => {
      console.log(reviews)
      setReviews(reviews)
    })
  }, [])

  return (
    <div className="App">
      <ReviewContainer reviews={reviews} />
    </div>
  );
}

export default App;
