import React, { useContext , useState} from "react";
import { ColorModeContext, useMode } from "./scene/Dashboard/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scene/Dashboard/global/Topbar";
import Dashboard from "./scene/Dashboard";
import Sidebar from "./scene/Dashboard/global/Sidebar";
import Invoices from "./scene/invoices";
import Contacts from "./scene/contacts";
import Team from "./scene/team";
// import Bar from "./scene/bar";
import Form from "./scene/form";
import Line from "./scene/line";
import Pie from "./scene/Pie";
import FAQ from "./scene/faq";
// import Geography from "./scene/geography";
import Calendar from "./scene/calendar";

function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Check if colorMode is null
  // if (colorMode === null) {
  //   // Handle the case where colorMode is null, such as setting a default value
  //   // or rendering a loading state
  //   return <div>Loading...</div>;
  // }

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contant" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default Admin;


//

//App.js or your router component

// import React from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Layout from "./Layout";
// import Dashboard from "./scene/Dashboard"; // Import your admin pages
// import { ColorModeContext, useMode } from "./scene/Dashboard/theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import Invoices from "./scene/invoices";
// import Contacts from "./scene/contacts";
// import Team from "./scene/team";
// // import Bar from "./scene/bar";
// import Form from "./scene/form";
// import Line from "./scene/line";
// import Pie from "./scene/Pie";
// import FAQ from "./scene/faq";
// // import Geography from "./scene/geography";
// import Calendar from "./scene/calendar";
// import Login from './Login';
// import Signup from './Signup';
// import Home from "./Home";


// const Admin = () => {
//   return (
//     <Router>
//       <Routes> {/* Wrap routes in a Routes component */}
//         <Route path="/admin">
//           {/* <Layout> */}
//           <>
//               <Route path="/admin/dashboard" element={<Dashboard />} />
//               {/* Add more routes for other admin pages */}
              
//           {/* </Layout> */}
//           </>
//         </Route>
//         {/* Add routes for non-admin pages */}
//         <Route exact path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/home' element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Admin;


///

// App.js or your router component

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Login from './Login'
// import Signup from './Signup'
// import Dashboard from "./scene/Dashboard"; // Import your admin pages
// import { ColorModeContext,useMode } from "./scene/Dashboard/theme";
// import { CssBaseline,ThemeProvider } from "@mui/material";
// import Invoices from "./scene/invoices";
// import Contacts from "./scene/contacts";
// import Team from "./scene/team";
// // import Bar from "./scene/bar";
// import Form from "./scene/form";
// import Line from "./scene/line";
// import Pie from "./scene/Pie";
// import FAQ from "./scene/faq";
// // import Geography from "./scene/geography";
// import Calendar from "./scene/calendar";
// import Home from "./Home"; // Import your non-admin pages

// const Admin = () => {
//   return (
//     <Router>
//       <Route path="/admin">
//         <Layout>
//           <Route path="/admin/dashboard" component={Dashboard} />
//           {/* Add more routes for other admin pages */}
//           <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contant" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                  {/* <Route path="/bar" element={<Bar />} /> */}
//                     <Route path="/pie" element={<Pie />} />
//                     <Route path="/line" element={<Line />} />
//                     <Route path="/faq" element={<FAQ />} />
//                     {/* <Route path="/geography" element={<Geography />} /> */}
//                     <Route path="/calendar" element={<Calendar />} />
//         </Layout>
//       </Route>
//       {/* Routes for non-admin pages */}
   
//     </Router>
    
//   );
// };

// export default Admin;

