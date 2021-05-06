import React, { useState } from "react";
import { Button, Stack, Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function Updateform({ review, onUpdatedReview }) {
  const [editRating, setEditRating] = useState("");
  const [editComment, setEditComment] = useState("");

  function handleRatingChange(event) {
    setEditRating(event.target.value);
  }

  function handleCommentChange(event) {
    setEditComment(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: editRating,
        comments: editComment,
        user_id: 1,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onUpdatedReview(newReview));

    setEditRating("");
    setEditComment("");
  }

  return (
    <Box w="300px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} width="300px" variant="outline">
          <Input
            variant="outline"
            placeholder={review.rating}
            onChange={handleRatingChange}
            value={editRating}
          />
          <Input
            variant="outline"
            placeholder="Change Comment"
            onChange={handleCommentChange}
            value={editComment}
          />
        </Stack>
        <Button colorScheme="blue" type="submit">
          Save Changes
        </Button>
      </form>
    </Box>
  );
}

export default Updateform;
