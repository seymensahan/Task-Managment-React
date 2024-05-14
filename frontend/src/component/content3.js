import React from "react";
import ProdImage from './images/Prod.avif'; // Adjust the import path and file extension 


function Content3() {
    return (
    <div className="container3">
    <>
    <h1 className="Z5">The Most Versatile Work Management Platform™</h1>
<h2 className="Z7">Maximize your team’s performance, accelerate growth, 
and improve customer experience with unique and extensive customization features 
that makes work seamless for any team or department.</h2>

    <div className="content-wrapper3">
            <div className="text-container3">
            <h1 className="h1container2">Improve visibility and alignment</h1>
<h2 className="h2container2">Create a single source of truth and align your teams and departments 
by centralizing all your work in one powerful platform.
Adapt workflows, change views, and tailor your workspaces to reflect your teams’ needs
 and preferences while maintaining 360° visualization.</h2>
          
 <h1 className="h3container2">A range of views</h1>
<h2 className="h4container2"> Visibility is mission critical for project management, 
but everyone digests information differently. 
That’s why we provide a range of views so you can visualize project progress, adjust resources quickly, and keep stakeholders informed. 
Try our industry-leading Gantt charts or easy-to-use Kanban boards.</h2>     </div>
      <div className="image-container3">
  {/* Render the SVG image */}
  <img  className="imgcontainer3"  src={ProdImage} alt="Prod Image" />
  </div>
</div>
    </>
    </div>
)
}

export default Content3