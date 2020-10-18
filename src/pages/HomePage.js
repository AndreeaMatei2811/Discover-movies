import React from "react";
import image from "./images/popcorn.png";

export default function HomePage() {
  return (
    <div>
      <h1>This is the home page</h1>
      <img src={image} alt="popcorn" />
      <h1>Go to Discover Movies to discover more movies!</h1>
    </div>
  );
}
