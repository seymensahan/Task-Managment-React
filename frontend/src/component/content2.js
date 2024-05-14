import React from "react";
import PMOVideo from './images/PMO.mp4'; // Adjust the import path and file extension
import  '../component/component.css'
import Carousel from "./Carousel";


function Content2() {
    return (
        <div className="container2">
        <>
        <h1 className="Z1">Drive efficiency across all departments</h1>
<h2 className="Z2">Wrike streamlines work processes for maximum efficiency, 
                empowering teams across all departments to collaborate, 
                 manage projects, drive strategic initiatives, and achieve goals.</h2>
          
        <div className="content-wrapper">
                <div className="text-container">
                <h1 className="h1container2">Eliminate wasted efforts</h1>
<h2 className="h2container2">Automate workflows to maximize productivity, minimize duplicate work, and slash the time spent on routine administrative tasks.

Create automatic approvals, request forms, and repeatable blueprints so teams can focus on their most valuable work.</h2>
          
 <h1 className="h3container2">Deliver on business outcomes faster</h1>
<h2 className="h4container2"> Align strategy with execution to accelerate delivery. Improve accountability, transparency, and collaboration to keep teams focused on key goals.

Access instant insights and real-time dashboards that support data-led decisions and Agile leadership.</h2>
          
          </div>
          <div className="image-container">
          <video controls>
        <source src={PMOVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
        </>
        </div>
    )
}

export default Content2