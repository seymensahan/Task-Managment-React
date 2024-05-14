import {Box} from "@mui/material"
import Header from "../../components_Admin/Admin/Header"
import  LineChart from "../../components_Admin/Admin/LineChart"

const line= () => {
    return (
        <Box m="20px">
            <Header title="line Chart" subtitle="Simple line Chart" />
            <Box height="75nh">
<lineChart/>
            </Box>
        </Box>
    )
}

export default line;