import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReviewContainer from "./pages/ReviewContainer";
import AddForm from "./pages/AddForm";
import Updateform from "./components/Updateform";
import Homepage from "./pages/Homepage";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((resp) => resp.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, []);

  function handleAddReview(newReview) {
    const updatedReviewsArray = [newReview, ...reviews];
    setReviews(updatedReviewsArray);
  }

  function handleUpdatedReview(updatedNewReview) {
    const updatedReview = reviews.map((review) => {
      if (review.id === updatedNewReview.id) return updatedNewReview;

      return review;
    });

    setReviews(updatedReview);
  }

  const handleDeleteReview = (ReviewToDelete) => {
    const updatedReview = reviews.filter(
      (review) => review.id !== ReviewToDelete.id
    );
    setReviews(updatedReview);
  };

  return (
    <div className="App">
      {/* <AddForm onAddReview={handleAddReview} /> */}

      <Switch>

        <Route exact path="/home">
          <Homepage />
        </Route>

        <Route exact path="/new">
            <AddForm onAddReview={handleAddReview} />
        </Route>

        <Route exact path="/show">
          <ReviewContainer
            reviews={reviews}
            onUpdatedReview={handleUpdatedReview}
            onDeleteReview={handleDeleteReview}
          />
        </Route>


        <Route exact path="/update">
          <Updateform onUpdatedReview={handleUpdatedReview} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
