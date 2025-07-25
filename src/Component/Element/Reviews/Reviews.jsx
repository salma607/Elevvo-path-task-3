import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import reviews from "./constRev";

// ReviewCard component
function ReviewCard({ review }) {
  return (
    <Card className="w-full mb-4 shadow-md " variant="outlined"
      style={{ backgroundColor: "var(--color-header)",
         borderRadius: "20px", padding: "16px",
         
       }}>
      <CardContent>
        <Typography variant="h6" className="font-bold mb-1 "
          style={{ color: "var(--color-main)" }}>
          {review.username}
        </Typography>
        <Typography variant="body1" className="mb-2 "
          style={{ color: "var(--color-helper)" }}>
          {review.review}
        </Typography>
        <Rating name="read-only" value={review.rate} readOnly />
        <Typography
          variant="body2"
          className="ml-2 inline-block align-middle text-gray-600"
        >
          {review.rate} / 5
        </Typography>
      </CardContent>
    </Card>
  );
}

// Main vertical carousel component
export default function Reviews({ reviewsData = reviews }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const handleNext = () => setIndex((i) => (i < reviewsData.length - 1 ? i + 1 : i));

  return (
    <div className="max-w-lg mx-auto mt-10 font-sans">
      <div className="flex items-center">
        <IconButton
          onClick={handlePrev}
          disabled={index === 0}
          className="mx-2"
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <div className="flex-1">
          <ReviewCard review={reviewsData[index]} />
          <Typography className="text-center text-var(--color-main)">
            {index + 1} of {reviewsData.length}
          </Typography>
        </div>
        <IconButton
          onClick={handleNext}
          disabled={index === reviewsData.length - 1}
          className="mx-2"
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}