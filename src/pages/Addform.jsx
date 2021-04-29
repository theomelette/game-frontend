import React, { useState } from 'react'



function AddForm( { onAddPost }) {
    const [rating, setRating] = useState("")
    const [comments, setComments] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")


    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3001/reviews", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating: parseInt(rating),
                comments: comments,
                games: 
                    {
                        name:name,
                        image:image
                    },
                user_id: 1,
     
               
            })
        })
            .then(response => response.json())
            .then((newPost) => onAddPost(newPost))
            
            setRating('')
            setComments('')
            setName('')
            setImage('')
           
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-review-form">
            <input placeholder="Game" value={name} onChange={(event) => setName(event.target.value)} />
                <input placeholder="Image" value={image} onChange={(event) => setImage(event.target.value)} />
                <input placeholder="Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
                <input placeholder="Comments" value={comments} onChange={(event) => setComments(event.target.value)} />
                <input className="form-submit" type="submit" value="New Review" />
            </form>

            
        </>
    )
}

export default AddForm