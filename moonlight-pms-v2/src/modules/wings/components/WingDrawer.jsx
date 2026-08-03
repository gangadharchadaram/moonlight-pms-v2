import {
    Drawer,
    Box,
    Typography,
    Divider,
    Chip,
} from "@mui/material";

const WingDrawer = ({
    open,
    onClose,
    wing,
}) => {

    if (!wing) return null;

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
                    Wing Details
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="subtitle2">
                    Building
                </Typography>

                <Typography mb={2}>
                    {wing.buildingName}
                </Typography>

                <Typography variant="subtitle2">
                    Code
                </Typography>

                <Typography mb={2}>
                    {wing.code}
                </Typography>

                <Typography variant="subtitle2">
                    Wing Name
                </Typography>

                <Typography mb={2}>
                    {wing.name}
                </Typography>

                <Typography variant="subtitle2">
                    Description
                </Typography>

                <Typography mb={2}>
                    {wing.description || "-"}
                </Typography>

                <Typography variant="subtitle2">
                    Status
                </Typography>

                <Chip
                    label={
                        wing.active
                            ? "Active"
                            : "Inactive"
                    }
                    color={
                        wing.active
                            ? "success"
                            : "default"
                    }
                />

            </Box>

        </Drawer>

    );

};

export default WingDrawer;