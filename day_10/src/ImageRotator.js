import React from 'react';

const ImageRotator = () => {
  const [degree, setDegree] = React.useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Rotator
      </h1>
      <img
        src="https://images.pexels.com/photos/33915135/pexels-photo-33915135.jpeg"
        alt="image-here"
        style={{
          height: "200px",
          width: "200px",
          transform: `rotate(${degree}deg)`
        }}
      />
      <br />
      <button onClick={() => setDegree(degree - 90)}>Left</button>
      <button onClick={() => setDegree(degree + 90)}>Right</button>
    </div>
  );
};

export default ImageRotator;