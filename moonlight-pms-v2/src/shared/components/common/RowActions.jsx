import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import { useState } from "react";

const RowActions = ({
    row,
    onView,
    onEdit,
    onDelete
}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        onView(row);
                    }}
                >
                    <ListItemIcon>
                        <VisibilityIcon fontSize="small" />
                    </ListItemIcon>

                    <ListItemText>
                        View
                    </ListItemText>
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        handleClose();
                        onEdit(row);
                    }}
                >
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>

                    <ListItemText>
                        Edit
                    </ListItemText>
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        handleClose();
                        onDelete(row);
                    }}
                >
                    <ListItemIcon>
                        <DeleteIcon
                            fontSize="small"
                            color="error"
                        />
                    </ListItemIcon>

                    <ListItemText>
                        Delete
                    </ListItemText>
                </MenuItem>

            </Menu>

        </>
    );
};

export default RowActions;