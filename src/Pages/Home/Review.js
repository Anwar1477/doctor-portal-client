import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl pb-5">
      <div class="card-body">
        <p>{review.review}</p>
      </div>
      <div className="flex items-center gap-5 ml-5">
      <div class="avatar">
        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
          <img src={review.img} alt='' />
        </div>
      </div>
      <div>
        <h2>{review.name}</h2>
        <h3>{review.city}</h3>
      </div>
      </div>
    </div>
  );
};

export default Review;
