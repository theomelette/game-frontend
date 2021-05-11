import React, { useState } from "react";
import { Input, Stack, Button, Flex, useToast, useColorMode  } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";


function AddForm({ onAddReview }) {
  const history = useHistory();
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode()

  function handleSubmit(event) {
    event.preventDefault();
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
      .then((newReview) => {
        onAddReview(newReview);
        history.push("/");
      });


    setRating("");
    setComments("");
    setName("");
    setImage("");
  }

  return (
    <div className="body">
       <Flex align="center" justify="center" height="5vh">
              <Button size="md" onClick={() => toggleColorMode(colorMode)}>
          Theme
        </Button>
        </Flex>
      <form onSubmit={handleSubmit}>
        <Flex align="center" justify="center">
          <Stack spacing={8} width="300px">
            <Input
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              placeholder="Image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <Input
              placeholder="Comments"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
            <Input
              placeholder="Rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </Stack>
        </Flex>
        <Flex align="center" justify="center">
          <Button
            colorScheme="blue"
            type="submit"
            onClick={() =>
              toast({
                isClosable: false,
                title: "Review Added!",
                duration: 2000,
                position: "top",
                status: "info",
              })
            }
          >
            Submit Review
          </Button>
        </Flex>
      </form>
    </div>
  );

}

export default AddForm;
