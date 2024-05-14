import {Box,useTheme, Typography} from "@mui/material"
import Header from "../../components_Admin/Admin/Header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../Dashboard/theme";

const FAQ =()=>{
const theme = useTheme();
const colors= tokens(theme.palette.mode);

return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5" >

            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Iam the one who jowjdwjoedjodw
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5" >

            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
               your favorit questio {/* Iam the one who jowjdwjoedjodw */}
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5" >

            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Iam the one who jowjdwjoedjodw
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5" >

            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            THe final Questions
            </Typography>
        </AccordionDetails>
    </Accordion>
</Box>
}

export  default FAQ