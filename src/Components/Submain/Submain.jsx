import React, { useEffect, useRef, useState } from "react";
import "./Submain.css";

const Submain = () => {
  const [headingText, setHeadingText] = useState("");
  const [paragraphText, setParagraphText] = useState("");
  const headingFullText = "DDESCRIPTION";
  const paragraphFullText = "I'm a Frontend Web Developer skilled in HTML, CSS, JavaScript, and ReactJS, focused on building clean, responsive, and interactive web interfaces. I enjoy turning ideas into fast, functional, and user-friendly digital products — from sleek landing pages to full-featured dashboards.";
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          typeWriterHeading();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      // Clean up timers 
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  const typeWriterHeading = () => {
    let i = 0;
    setHeadingText("");
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (i < headingFullText.length) {
        setHeadingText(prev => prev + headingFullText.charAt(i));
        i++;
      } else {
        clearInterval(intervalRef.current);
        typeWriterParagraph();
      }
    }, 70);
  };

  const typeWriterParagraph = () => {
    let i = 0;
    setParagraphText("");
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (i < paragraphFullText.length) {
        setParagraphText(prev => prev + paragraphFullText.charAt(i));
        i++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 20);
  };

  return (
    <div className="desccontainer" ref={containerRef}>
      <div className="dessubcontainer">
      <h2>
        {headingText}
        {headingText.length < headingFullText.length && <span className="cursor">|</span>}
      </h2>
      <p className="hipara">
        {paragraphText}
        {paragraphText.length < paragraphFullText.length && <span className="cursor">|</span>}
      </p>
      <button>
        | <span>Read More </span> |
      </button>
      </div>
    </div>
  );
};

export default Submain;