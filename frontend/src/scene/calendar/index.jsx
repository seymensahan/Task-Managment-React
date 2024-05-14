import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components_Admin/Admin/Header";
import { tokens } from "../Dashboard/theme";
import { format } from "date-fns";

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");

        if (title) {
            setCurrentEvents([
                ...currentEvents,
                {
                    id: `${selected.start}-${title}`,
                    title,
                    start: selected.start,
                    end: selected.end,
                },
            ]);
        }
    };

    const handleEventClick = (event) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${event.title}'`
            )
        ) {
            setCurrentEvents(currentEvents.filter((e) => e.id !== event.id));
        }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* Calendar sidebar */}
                <Box
                    flex="1 1 20%"
                    backgroundColor={color.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: color.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {format(event.start, "MMM dd, yyyy")}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <BigCalendar
                        localizer={localizer}
                        events={currentEvents}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectSlot={handleDateClick}
                        onSelectEvent={handleEventClick}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
