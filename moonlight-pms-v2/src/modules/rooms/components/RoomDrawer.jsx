import {
    Drawer,
    Box,
    Typography,
    Divider,
    Stack
} from "@mui/material";

export default function RoomDrawer({

    open,

    room,

    onClose

}) {

    if (!room) return null;

    return (

        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <Box
                sx={{
                    width: 420,
                    p: 3
                }}
            >

                <Typography variant="h6">

                    Room Details

                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2}>

                    <Typography>

                        <strong>Room Number:</strong>

                        {" "}

                        {room.roomNumber}

                    </Typography>

                    <Typography>

                        <strong>Room Name:</strong>

                        {" "}

                        {room.roomName}

                    </Typography>

                    <Typography>

                        <strong>Room Type:</strong>

                        {" "}

                        {room.roomTypeName}

                    </Typography>

                    <Typography>

                        <strong>Building:</strong>

                        {" "}

                        {room.building}

                    </Typography>

                    <Typography>

                        <strong>Wing:</strong>

                        {" "}

                        {room.wing}

                    </Typography>

                    <Typography>

                        <strong>Floor:</strong>

                        {" "}

                        {room.floor}

                    </Typography>

                    <Typography>

                        <strong>Room Status:</strong>

                        {" "}

                        {room.roomStatus}

                    </Typography>

                    <Typography>

                        <strong>Housekeeping:</strong>

                        {" "}

                        {room.housekeepingStatus}

                    </Typography>

                </Stack>

            </Box>

        </Drawer>

    );

}