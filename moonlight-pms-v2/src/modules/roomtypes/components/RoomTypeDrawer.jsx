import {
    Drawer,
    Box,
    Typography,
    Divider,
    Stack
} from "@mui/material";

import StatusChip from "@/shared/components/common/StatusChip";

const Item = ({ label, value }) => (

    <Box>

        <Typography
            variant="caption"
            color="text.secondary"
        >
            {label}
        </Typography>

        <Typography variant="body1">
            {value ?? "-"}
        </Typography>

    </Box>

);

const RoomTypeDrawer = ({
    open,
    roomType,
    onClose
}) => {

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

                <Typography
                    variant="h5"
                    mb={2}
                >
                    Room Type Details
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Stack spacing={3}>

                    <Item
                        label="Code"
                        value={roomType?.code}
                    />

                    <Item
                        label="Name"
                        value={roomType?.name}
                    />

                    <Item
                        label="Adults"
                        value={roomType?.maxAdults}
                    />

                    <Item
                        label="Children"
                        value={roomType?.maxChildren}
                    />

                    <Item
                        label="Base Price"
                        value={`₹${roomType?.basePrice ?? 0}`}
                    />

                    <Item
                        label="Smoking Allowed"
                        value={
                            roomType?.smokingAllowed
                                ? "Yes"
                                : "No"
                        }
                    />

                    <Box>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            Status
                        </Typography>

                        <Box mt={1}>

                            <StatusChip
                                active={roomType?.active}
                            />

                        </Box>

                    </Box>

                    <Item
                        label="Description"
                        value={roomType?.description}
                    />

                </Stack>

            </Box>

        </Drawer>

    );

};

export default RoomTypeDrawer;