import {
    Drawer,
    Box,
    Typography,
    Divider,
    Chip,
} from "@mui/material";

const BuildingDrawer = ({
    open,
    onClose,
    building,
}) => {

    if (!building) return null;

    return (

        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <Box
                sx={{
                    width: 400,
                    p: 3,
                }}
            >

                <Typography
                    variant="h6"
                    gutterBottom
                >
                    Building Details
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="subtitle2">
                    Code
                </Typography>

                <Typography mb={2}>
                    {building.code}
                </Typography>

                <Typography variant="subtitle2">
                    Building Name
                </Typography>

                <Typography mb={2}>
                    {building.name}
                </Typography>

                <Typography variant="subtitle2">
                    Description
                </Typography>

                <Typography mb={2}>
                    {building.description || "-"}
                </Typography>

                <Typography variant="subtitle2">
                    Status
                </Typography>

                <Chip
                    label={
                        building.active
                            ? "Active"
                            : "Inactive"
                    }
                    color={
                        building.active
                            ? "success"
                            : "default"
                    }
                />

            </Box>

        </Drawer>

    );

};

export default BuildingDrawer;