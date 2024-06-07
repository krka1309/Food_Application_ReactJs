import React from "react";
import "./contact.css";
import restaurant from "../../assets/images/resturant.jpeg";
import { FiSend } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contactMainDiv">
      <div className="contactMainDiv1">
        <div className="childDiv11">
          <div className="childDiv12">
            <img src={restaurant} alt="" className="restaurantImg1" />
            <span className="AmbrosyiaT">Ambrosyia</span>
            <p className="parag">
              Lorem ipsum dolor sit amet consectetur, adipisicing <br />
              elit. Quod libero dolorum et autem esse <br /> consequatur id
              harum corporis aut neque.
            </p>
          </div>
        </div>
        <div className="childDiv2">
          <div className="childDiv21">
            <p>
              <span className="deli">Delivery Time</span> <br />
              <span>10:00am - 11.00pm</span>
            </p>
            <p className="time">
              Friday-Saturday <br /> Off day
            </p>
          </div>
        </div>
        <div className="childDiv3">
          <div className="childDiv31">
            <span className="contact">Contact</span>
            <span className="location">
              Location: Ambarkhana
              <br />
              Sylhet-3100, Bangladesh <br />
            </span>
            Phone: 01XXXXXXXX <br />
            example@gmail.com
          </div>
        </div>
        <div className="childDiv4">
          <div className="childDiv41">
            <p className="pcontact">
              <span className="Newsletter">Newsletter</span> <br />
              Subscribe our newsletter
            </p>
            <div className="inputContainer">
              <input type="input" className="inputtag" />{" "}
              <FiSend className="sendIcon" />
            </div>
          </div>
        </div>
      </div>
      <div className="iconsYo">
        <div>
          <p className="">
            Copyright - 2023, website made by Ajor. All Rights Reserved.
          </p>
        </div>
        <div className="iconsDi">
          <span className="follow">Follow:</span>
          <FaFacebook className="widthIc" />
          <FaYoutube className="widthIc" />
          <FaLinkedin className="widthIc" />
          <FaGithub className="widthIc" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
