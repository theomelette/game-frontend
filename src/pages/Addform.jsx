import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

function AddForm({ onAddReview }) {
  const history = useHistory()
  const [rating, setRating] = useState("")
  const [comments, setComments] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
//   let history = useHistory(); 

function handleSubmit(event)  {
    event.preventDefault();
    alert("New Review Submitted!")
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: parseInt(rating),
        comments: comments,
        games: {
          name: name,
          image: image,
        },
        user_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((newReview) => {onAddReview(newReview); history.push("/show")}) 
    //   history.push("/show")

    setRating("");
    setComments("");
    setName("");
    setImage("");
  }

  return (
      <div className="new-form">
        <h2>Add a New Review</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
          <input placeholder="Image" value={image} onChange={(event) => setImage(event.target.value)} />
          <input placeholder="Comments" value={comments} onChange={(event) => setComments(event.target.value)} />
          <input placeholder="Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
         <button type="submit">New Review</button>
    
        </form>
      </div>

    );

  // return (

  //         <form onSubmit={handleSubmit}>

  //             <input placeholder="Game" value={name} onChange={(event) => setName(event.target.value)} />
  //             <input placeholder="Image" value={image} onChange={(event) => setImage(event.target.value)} />
  //             <input placeholder="Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
  //             <input placeholder="Comments" value={comments} onChange={(event) => setComments(event.target.value)} />
  //             <Link to="/show">
  //             <input type="form-submit" type="submit" value="New Review">
  //             </input>
  //             </Link>
  //         </form>

  // )

}

export default AddForm;
