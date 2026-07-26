import SearchIcon from "@mui/icons-material/Search";

import {
    InputAdornment,
    TextField
} from "@mui/material";

const SearchField = ({
    value,
    onChange,
    placeholder = "Search..."
}) => {

    return (

        <TextField

            size="small"

            value={value}

            onChange={onChange}

            placeholder={placeholder}

            InputProps={{
                startAdornment: (

                    <InputAdornment position="start">

                        <SearchIcon />

                    </InputAdornment>

                )
            }}

        />

    );

};

export default SearchField;