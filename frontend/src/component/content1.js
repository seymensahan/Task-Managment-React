import React from "react";
import heroImage from './images/hero.svg'; // Adjust the import path and file extension


function Content1() {
    return (
        <div className="container1">
        <>
        <div className="content-wrapper1">
                <div className="text-container1">
          <h1 className="h1container1">One platform to
streamline all workflows</h1>
<h2 className="h2container1"> “Wrike helps us collaborate in the best possible way, and it gives our teams the support they need to work better.
 We could roll out [Wrike] tool on a global scale, and we were also able to offer a secure and an integrated tool.”</h2>
          </div>
          <div className="image-container1">
      {/* Render the SVG image */}
      <img className="imgcontainer1" src={heroImage} alt="hero Image" />
    </div>
    </div>
        </>
        </div>
    )
}

export default Content1