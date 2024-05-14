import {Box,IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
// import { ColorModeContext ,tokens} from "../../theme";
import { ColorModeContext , tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlineIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlineIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlineIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

 const Topbar=()=>{
    const theme = useTheme();
    const  colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box 
    display="flex" 
    justifyContent="space-between"
     p={2}
    // position="fixed" // Fix the position of the topbar
    // top={0} // Position it at the top of the viewport
    // left={0} // Align it to the left edge
     //right={0} // Stretch it to the right edge
     // / alignItems="center" // Align items to center vertically
     >
        {/* SEARCH BAR */}
        <Box 
        display="flex"  
        backgroundColor={colors.primary[400]} 
        borderRadius="3px"
        >
         <InputBase sx={{ml: 2, flex:1}} placeholder="Search" />
         <IconButton type="button" sx={{p:1}}>
            <SearchIcon />
         </IconButton>
        </Box>

{/* ICONS */}
 <Box display="flex">
    <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
         <DarkModeOutlineIcon />
        ) : (
            <LightModeOutlineIcon />
        )}
    </IconButton>
    <IconButton>
    <NotificationsOutlineIcon />
    </IconButton>
    <IconButton>
    <SettingsOutlineIcon />
    </IconButton>
    <IconButton>
    <PersonOutlineIcon />
    </IconButton>
</Box>
 {/* <IconButton ></IconButton> */}
    </Box>)
}
export default Topbar;