import {Box,Typography,useTheme}from "@mui/material";
import {DataGrid ,GridToolbar} from '@mui/x-data-grid'
import { tokens } from "../Dashboard/theme";
import {mockDataInvoices} from '../../data/mockdata'
import Header from "../../components_Admin/Admin/Header";

const Invoices = () => {
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
       field: "phone",
        headerName: "Phone Numbers",
       flex:1,
        },
        {
        field: "email",
        headerName: "Email",
        flex:1,
        renderCell: (params) =>(
            <Typography colors={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )
        },
        {
            field: "cost",
            headerName: "Cost",
            flex:1,
            },
        {
        field: "date",
        headerName: "Date",
        flex:1,
        },
        
    ]

    return(
<Box m="20px">
    <Header title="Invoices" subtitle="List of Invoice Balances"/>
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
        "& .MuiCheckbox-root":{
        color :`${colors.greenAccent[200]}  !important`,
        },
    }}
    >
        <DataGrid 
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        components={{toolbar:GridToolbar}}
        />
    </Box>
</Box>
    )
}

export default Invoices;