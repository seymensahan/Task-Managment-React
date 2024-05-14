import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box,IconButton, Typography, useTheme } from "@mui/material";
import {Link} from "react-router-dom";
import { tokens } from "../theme";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlined";
// //import ContactsOutlineIcon from "@mui/icons-material/ContanctsOutlined";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ReceiptOutlineIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlineIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlineIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlineIcon from "@mui/icons-material/MenuOutlined";
import MapOutlineIcon from "@mui/icons-material/MapOutlined";
import HomeIcon from '@mui/icons-material/Home';


const Item = ({title,to,icon,selected,setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
     return (
        <MenuItem
        active={selected === title}
        style={{color: colors.grey[100]}}
        onClick={() => setSelected(title)}
        icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
     );
}

const Sidebar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected ] = useState("Dashboard");

    return (
        <Box
        sx={{
           "& .pro-sidebar-inner":{
            background:`${colors.primary[400]} !important`
           },
           "& .pro-icon-wrapper":{
            backgroundColor:"transparent !important"
           },
           "& .pro-inner-item:":{
            padding: "5px 35px 5px 20px !important"
           },
           "& .pro-inner-item:hover":{
             color: "#868dfb ! important"
           },
           "& .pro-menu-item.active":{
            color: "#6870fa ! important"
          },
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0, // Set bottom to 0 to make the sidebar span from top to bottom
          
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
               {/* LOGO AND MENU ICON */}
            <MenuItem
               onClick={() => setIsCollapsed(!isCollapsed)}
               icon={isCollapsed ? <MenuOutlineIcon /> : undefined}
               style={{ 
                margin: "10px 0 20px 0",
                color: colors.grey[100],
               }}
            >
        {!isCollapsed && (
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
            >
                <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                </Typography>
                <IconButton onClick={( ) => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlineIcon />
                </IconButton>
            </Box>
        )}
        </MenuItem>

        {/*USER*/}
        {!isCollapsed && (
        <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
            <img 
            alt="profile-user"
            width="100px"
            height="100px"
            src={`.../../assets/user.jpg`}
            style={{ cursor: "pointer",borderRadius: "50%"}}
            />
            </Box>

            <Box textAlign="center">
             <Typography 
             variant="h2" 
             color={colors.grey[100]} 
             fontWeight="bold" sx={{m:"10px 0 0 0"}}
             >
             Adrien
             </Typography>
             <Typography variant="h5" color={colors.greenAccent[500]}> Fancy Admin</Typography>
            </Box>
        </Box>
        )}
        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        <Item
        title="Dashboard"
        to="/Admin"
        icon={<HomeIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
        <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}
        >
          Data
        </Typography>
         <Item
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
         <Item
        title="Contact informations"
        to="/contant"
        icon={<PersonOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
         <Item
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
          <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}
        >
          Pages
        </Typography>
         <Item
        title="Profile Form"
        to="/form"
        icon={<PersonOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
         <Item
        title="Calendar"
        to="/calander"
        icon={<CalendarTodayIcon />}
        selected={selected}
        setSelected={setSelected}
        />
         <Item
        title="FAQ"
        to="/faq"
        icon={<HelpOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
          <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px"}}
        >
          Chart
        </Typography>
         <Item
        title="Bar Chart"
        to="/bar"
        icon={<BarChartOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
          <Item
        title="Pie Chart"
        to="/pie"
        icon={<PieChartOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />
          <Item
        title="Line Chart"
        to="/line"
        icon={<TimelineOutlineIcon />}
        selected={selected}
        setSelected={setSelected}
        />
          <Item
        title="Line chart"
        to="/line"
        icon={<TimelineOutlineIcon />}
        selected={selected}
        setSelected={setSelected}
        />
          <Item
        title="Geography Chart"
        to="/geography"
        icon={<MapOutlineIcon/>}
        selected={selected}
        setSelected={setSelected}
        />

</Box>
        </Menu>
        </ProSidebar>
        </Box>
    )
}
export default Sidebar;