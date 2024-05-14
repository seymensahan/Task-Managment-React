import {Box,Typography , useTheme}from "@mui/material";
import {DataGrid} from '@mui/x-data-grid'
import { tokens } from "../Dashboard/theme";
import {mockDataTeam} from '../../data/mockdata'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Header from "../../components_Admin/Admin/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [{field: "id", headerName: "ID"},
    {
     field: "name",
     headerName: "Name",
     flex:1,
     cellClassName: "name-column--cell",
     },
     {
      field: "age",
      headerName: "Age",
      type:"number",
      headerAlign: "left",
      align:"left",
      cellClassName: "name-column--cell",
      },
      {
       field: "phone",
        headerName: "Phone Numbers",
       flex:1,
        },
        {
        field: "email",
        headerName: "Email",
        flex:1,
        },
         {
           field: "acces",
           headerName: "Access Level",
           flex:1,
           renderCell: ({row:{access}}) => {
             return(
             <Box
             width="60%"
             m="0 auto"
             p="5px"
              display="flex"
            justifyContent="center"
             backgroundColor={
             access === "admin"
            ? colors.greenAccent[600]
            : colors.greenAccent[700]
          }
            borderRadius="4px"
        >
            {access === "admin" && <SettingsOutlinedIcon />}
            {access === "manager" && <SecurityIcon/>}
            {access === "user" && <LockOpenIcon />}
             <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                {access}
             </Typography>
             </Box>
                    )

                }
            },
    ]

    return(
<Box m="20px">
    <Header title="TEAM" subtitle="Managing the Team Members"/>
    <Box 
    m="40px 0 0 0 " 
    height="75vh" 
    sx={{
        "& .MuiDataGrind-root": {
            border:"none",
        },
        "& .MuiDataGrind-cell":{
            borderBottom: "none"
        },
        "& .name-column--cell":{
            color:colors.greenAccent[300]
        },
        "& .MuiDataGrind-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
        },
        "& .MuiDataGrind-virtualScroller":{
            backgroundColor:colors.primary[400]
        },
        "& .MuiDataGrind-footerContainer":{
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
        }
    }}
    >
        <DataGrid 
        rows={mockDataTeam}
        columns={columns}
        />
    </Box>
</Box>
    )
}

export default Team;