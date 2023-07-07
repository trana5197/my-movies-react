import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
    {/* <StarRating
      size={24}
      maxRating={10}
      color="blue"
      className="test"
      onSetRating={setmovieRating}
    /> */}
  </React.StrictMode>
);
