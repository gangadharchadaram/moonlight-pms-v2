import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useNavigate } from "react-router-dom";

const MasterCard = ({ item }) => {

    const navigate = useNavigate();

    const Icon = item.icon;

    return (

        <Card
            elevation={2}
            sx={{
                borderRadius: 3,
                transition: ".25s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 8
                }
            }}
        >

            <CardActionArea
                onClick={() => navigate(item.path)}
            >

                <CardContent>

                    <Box
                        display="flex"
                        justifyContent="space-between"
                    >

                        <Icon
                            color="primary"
                            sx={{ fontSize: 42 }}
                        />

                        <ArrowForwardIosIcon
                            color="disabled"
                        />

                    </Box>

                    <Typography
                        mt={3}
                        variant="h6"
                        fontWeight={600}
                    >

                        {item.title}

                    </Typography>

                    <Typography
                        color="text.secondary"
                    >

                        {item.description}

                    </Typography>

                </CardContent>

            </CardActionArea>

        </Card>

    );

};

export default MasterCard;