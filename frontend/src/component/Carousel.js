import React, { useRef } from "react";
import  '../component/component.css'

function Carousel() {
  const containerRef = useRef(null); // Ref for the container div

  // Function to handle scrolling down
  const scrollDown = () => {
    containerRef.current.scrollTop += 100; // Adjust scroll distance as needed
  };

  // Function to handle scrolling up
  const scrollUp = () => {
    containerRef.current.scrollTop -= 100; // Adjust scroll distance as needed
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel-item"><h1 className="h1">Improve visibility and alignment</h1>
          <h2 className="h2">Create a single source of truth and align your teams and departments by centralizing all your work in one powerful platform.
          
Adapt workflows, change views, and tailor your workspaces to reflect your teams’ needs and preferences while maintaining 360° visualization.</h2></div>
      
      <div className="carousel-item"><h1 className="h3">Eliminate wasted efforts</h1>
          <h2 className="h4">
Automate workflows to maximize productivity, minimize duplicate work, and slash the time spent on routine administrative tasks.

Create automatic approvals, request forms, and repeatable blueprints so teams can focus on their most valuable work.</h2></div>
      
      <div className="carousel-item"><h1 className="h5">Deliver on business outcomes faster</h1>
          <h2 className="h6">Align strategy with execution to accelerate delivery. Improve accountability, transparency, and collaboration to keep teams focused on key goals.

Access instant insights and real-time dashboards that support data-led decisions and Agile leadership..</h2></div>
      {/* <button onClick={scrollUp}>Scroll Up</button>
      <button onClick={scrollDown}>Scroll Down</button> */}
    </div>
  );
}

export default Carousel;
