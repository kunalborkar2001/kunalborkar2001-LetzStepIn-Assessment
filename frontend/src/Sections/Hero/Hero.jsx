import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import heroSubImage from "../../Assets/heroSubImage.jpg";

const Hero = () => {
  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(
      heroLeftRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1.5 }
    ).fromTo(
      heroRightRef.current,
      { opacity: 0, x: -500 },
      { opacity: 1, x: 0, duration: 1.5 },
      "-=1"
    );
  }, []);

  return (
    <div className="Hero">
      <div className="heroLeft" ref={heroLeftRef}>
        <h1>
          Virtual Reality <span style={{ color: "red" }}>based <br /> Search Portal</span> for <br /> Real Existing Spaces
        </h1>
        <p>A digital platform that allows users to <br /> search, explore, and experience real-world environments through virtual reality technology.</p>
      </div>
      <div className="heroRight" ref={heroRightRef}>
        <img src={heroSubImage} alt="kunalborkar2001@gmail.com" />
      </div>
    </div>
  );
};

export default Hero;
