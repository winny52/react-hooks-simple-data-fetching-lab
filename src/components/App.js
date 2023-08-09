
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((answer) => answer.json())
      .then((data) => setImage(data.message));
  }, []);

  if (!image) {
    return <p>"Loading ..."</p>;
  }

  return (
    <div>
      <h2>A lovely Dog for you:</h2>
      <img src={image} alt="A Random Dog"></img>
    </div>
  );
}

export default App;