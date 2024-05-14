import {Box} from "@mui/material"
import Header from "../../components_Admin/Admin/Header"
import  PieChart from "../../components_Admin/Admin/PieChart"

const Pie= () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75nh">
<PieChart/>
            </Box>
        </Box>
    )
}

export default Pie;