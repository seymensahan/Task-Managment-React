// Layout.js

import React from "react";
import Sidebar from "./scene/Dashboard/global/Sidebar";
import Topbar from "./scene/Dashboard/global/Topbar";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";


const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{  }}>
        <Topbar />
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
