import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="brown" onSetRating={setMovieRating} />
//       <p>This movie rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating color="red" classname="test" maxRating={6} />
    <StarRating
      maxRating={3}
      // messages={["Terrible", "Bad", "Super"]}
      defaultRating={3}
    />

    <Test maxRating={6} /> */}
  </React.StrictMode>
);
