import React from 'react';

const ImageSlider = () => {
  const [index, setIndex] = React.useState(0);
  const images = [
    "https://images.pexels.com/photos/33915135/pexels-photo-33915135.jpeg",
    "https://images.pexels.com/photos/35678159/pexels-photo-35678159.jpeg",
    "https://images.pexels.com/photos/36462109/pexels-photo-36462109.jpeg"
  ];

  const left = () => {
    setIndex((index - 1 + images.length) % images.length);
  };
  const right = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Image Slider</h1>
      <img
        src={images[index]}
        alt="image-here"
        style={{ height: "200px", width: "200px" }}
      />
      <br />
      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );
};

export default ImageSlider;