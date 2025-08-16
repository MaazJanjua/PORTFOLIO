import React from "react";
import "./Main.css";
import { FaGithub, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import logo from "../../Assits/Img/2.png";
import "animate.css";

const Main = () => {
  return (
    <section className="hero">
     


      <div className="left-side "> 
        <div className="leftsubdiv">
          <div className="leftinfo">
            <h2
              className="hiheading animate__animated animate__bounce"
              style={{
                animationDuration: "1.3s",
                animationDelay: "0.3s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              Hi, I am
            </h2>

            <h1
              className="hiheading animate__animated animate__bounceInLeft"
              style={{
                animationDuration: "2.3s",
                animationDelay: "0.6s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              Muhammad Maaz
            </h1>

            <h3
              className="hiheading after headingjob animate__animated animate__bounceInUp"
              style={{
                animationDuration: "1.8s",
                animationDelay: "1s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              Front-end Developer / UI Designer
            </h3>
          </div>

          <div
            className="social-icons animate__animated animate__fadeInUp"
            style={{
              animationDelay: "1.2s",
              animationDuration: "1.2s",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "both",
            }}
          >
            <a
              href="https://github.com/MaazJanjua/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.3s",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/muhammad.maaz.rajpoot/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.5s",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              <FaInstagram />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hafizmaaz256@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.7s",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.facebook.com/share/16V2Hpm1Yb/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.9s",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "both",
              }}
            >
              <FaFacebook />
            </a>
          </div> 
        </div>
      </div>

      <div className="right-side">
        <img src={logo} alt="Muhammad Maaz" className="profile-image" />
      </div>
   
    </section>
  );
};

export default Main;
