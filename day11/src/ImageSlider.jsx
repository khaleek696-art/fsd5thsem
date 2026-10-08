import React, { useEffect, useState } from "react";

const ImageSlider = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATKcSqS6F_dRWu9PNLysWnoqlIIJCAvgi5XhuoeS7Kw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvLl-pGOjX8vnnfLzg0y21QWOQqvjxTLIBP5nqQl7uQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z0X-3C2-N719Q-3C2-N719Q&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcXSn7icYiaSMc-cj2l5GCH8mxG1GKQL5NNF0MEtBLA&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJNRFYQIBBoz-JZXFigm7AlVzODE8ED0XFdkF5z5e4A&s=10",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>Image Slider</h1>

            <img
                src={images[index]}
                alt="slider"
                style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover"
                }}
            />
        </div>
    );
};

export default ImageSlider;