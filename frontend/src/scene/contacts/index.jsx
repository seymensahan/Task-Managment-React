import {Box}from "@mui/material";
import {DataGrid ,GridToolbar} from '@mui/x-data-grid'
import { tokens } from "../Dashboard/theme";
import {mockDataContacts} from '../../data/mockdata'
import Header from "../../components_Admin/Admin/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [{field: "id", headerName: "ID" ,flex:0.5},
    {
        field:"registarId",headerName:"Registar ID"
    },
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
        field: "address",
        headerName: "Address",
        flex:1,
        },
        {
         field: "city",
          headerName: "City",
          flex:1,
           },
           {
            field: "zipCode",
            headerName: "ZipCode",
            flex:1,
            },
        
    ]

    return(
<Box m="20px">
    <Header title="CONTACTS" subtitle="List of contacts for Future Refernce"/>
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
        },
        "& .MuiDataGrind-toolbarContainer .MuiButton-text":{
        color :`${colors.grey[100]}  !important`,
        },
    }}
    >
        <DataGrid 
        rows={mockDataContacts}
        columns={columns}
        components={{toolbar:GridToolbar}}
        />
    </Box>
</Box>
    )
}

export default Contacts;