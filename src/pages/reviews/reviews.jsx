import React, { useState } from "react";
import "./reviews.css";
import image1 from "../../assets/imagesAll/ava-1.jpg";
import image2 from "../../assets/imagesAll/ava-2.jpg";
import image3 from "../../assets/imagesAll/ava-3.jpg";
import image4 from "../../assets/imagesAll/ava-4.jpg";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

const Reviews = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const images = [
    {
      id: 1,
      name: "krishna",
      image: image1,
    },
    {
      id: 1,
      name: "krishna",
      image: image2,
    },
    {
      id: 1,
      name: "krishna",
      image: image3,
    },
    {
      id: 1,
      name: "krishna",
      image: image4,
    },
  ];

  const handlePrevClick = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    } else {
      setCurrentPhotoIndex(images.length - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPhotoIndex < images.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    } else {
      setCurrentPhotoIndex(0);
    }
  };
  return (
    <div className="reviewPage">
      <div className="reviewChild">
        <span>
          <b className="Testimonial">Testimonial</b> <br />
          <span className="custom">
            What our <b className="customers">customers</b> are saying
          </span>
        </span>
        <img
          src={images[currentPhotoIndex].image}
          alt=""
          className="renderImage"
        />
      </div>
      <div className="imageText">
        <AiOutlineLeftCircle
          className="OutlineIcons"
          onClick={handlePrevClick}
        />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto
          necessitatibus itaque nulla, quam possimus
        </span>
        <AiOutlineRightCircle
          className="OutlineIcons"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Reviews;
