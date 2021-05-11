import React from "react";
import ReviewItem from "../components/ReviewItem";
import "./ReviewContainer.css";
import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";

function ReviewContainer({ reviews, onUpdatedReview, onDeleteReview }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const allReviews = reviews.map((review) => {
    return (
      <ReviewItem
        key={review.id}
        review={review}
        onUpdatedReview={onUpdatedReview}
        onDeleteReview={onDeleteReview}
      />
    );
  });

  return (
 
    <div className="body">
      <Flex align="center" justify="center" height="5vh">
        <Button size="md" onClick={() => toggleColorMode(colorMode)}>
          Theme
        </Button>
      </Flex>
      <Box className="card" w="300px">
        {allReviews}{" "}
      </Box>
  
    </div>
   
  );
}

export default ReviewContainer;
