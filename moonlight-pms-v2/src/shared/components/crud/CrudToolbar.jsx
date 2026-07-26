import {
    Stack,
    Button
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import SearchField from "../common/SearchField";

const CrudToolbar = ({
    search,
    onSearch,
    buttonText,
    onAdd
}) => {

    return (

        <Stack

            direction="row"

            justifyContent="space-between"

            alignItems="center"

        >

            <SearchField

                value={search}

                onChange={onSearch}

            />

            <Button

                variant="contained"

                startIcon={<AddIcon />}

                onClick={onAdd}

            >

                {buttonText}

            </Button>

        </Stack>

    );

};

export default CrudToolbar;