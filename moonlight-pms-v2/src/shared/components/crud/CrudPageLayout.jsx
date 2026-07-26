import { Box, Paper } from "@mui/material";

const CrudPageLayout = ({
    header,
    toolbar,
    children
}) => {

    return (

        <Box>

            {header}

            <Paper
                elevation={1}
                sx={{
                    mt: 3,
                    borderRadius: 3
                }}
            >

                <Box
                    sx={{
                        p: 2
                    }}
                >

                    {toolbar}

                </Box>

                {children}

            </Paper>

        </Box>

    );

};

export default CrudPageLayout;