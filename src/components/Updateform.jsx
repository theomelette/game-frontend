import React, { useState } from 'react'
import './Updateform.css'


function Updateform({review, onUpdatedReview}) {

const [editRating, setEditRating] = useState("")
const [editComment, setEditComment] = useState("")



    function handleRatingChange(event) {
        setEditRating(event.target.value)
      
    }

    function handleCommentChange(event) {
        setEditComment(event.target.value)
       
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/reviews/${review.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating: editRating,
                comments: editComment,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then((newReview) => onUpdatedReview(newReview))

            setEditRating("")
            setEditComment("")
    }

    return (

            <div>
                <button>Edit Review</button>
            <form onSubmit={handleSubmit}> 
            <input placeholder="Change Rating" onChange={handleRatingChange} value={editRating} />
            <input placeholder="Change Comment" onChange={handleCommentChange} value={editComment}/>
            <button className = 'button' type="submit">Save Changes</button>
            </form>
     
        </div>
       
    )
}

export default Updateform