import React, { useState } from "react"
import { Input, Stack, Button, Flex } from "@chakra-ui/react"
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
      <div>
  
        <form onSubmit={handleSubmit} >
        <Flex align="center" justify="center">
            <Stack c >
          <Input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
          <Input placeholder="Image" value={image} onChange={(event) => setImage(event.target.value)} />
          <Input placeholder="Comments" value={comments} onChange={(event) => setComments(event.target.value)} />
          <Input  placeholder="Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
          </Stack>
          </Flex>
        <Flex align="center" justify="center">
         <Button colorScheme="blue" type="submit">Submit Review</Button>
         </Flex>
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
