import {
    Box,
    Typography
} from "@mui/material";

const PageHeader = ({
    title,
    subtitle
}) => {

    return (

        <Box>

            <Typography
                variant="h4"
                fontWeight={700}
            >
                {title}
            </Typography>

            <Typography
                color="text.secondary"
                mt={1}
            >
                {subtitle}
            </Typography>

        </Box>

    );

};

export default PageHeader;