import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "@mui/material/Badge";

const SidebarPopper = ({
    anchorEl,
    open,
    title,
    items,
    onClose,
}) => {

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="right-start"
            modifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [10, 0],
                    },
                },
            ]}
            sx={{ zIndex: 1500 }}
        >
            <ClickAwayListener onClickAway={onClose}>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.18 }}
                >
                    <Paper
                        elevation={8}
                        sx={{
                            width: 240,
                            borderRadius: 3,
                            overflow: "hidden",
                        }}
                    >
                        <div className="border-b px-4 py-3 font-semibold">
                            {title}
                        </div>

                        <div className="p-2">

                            {items.map((child) => (

                                <NavLink
                                    key={child.path}
                                    to={child.path}
                                    className={({ isActive }) => `
                                        flex
                                        rounded-lg
                                        px-3
                                        py-2
                                        text-sm
                                        transition

                                        ${
                                            isActive
                                                ? "bg-blue-50 text-blue-600"
                                                : "hover:bg-gray-100"
                                        }
                                    `}
                                >
                                    <div className="flex w-full items-center justify-between">

    <span>

        {child.title}

    </span>

    {child.badge > 0 && (

        <Badge
            badgeContent={child.badge}
            color="error"
        />

    )}

</div>
                                </NavLink>

                            ))}

                        </div>

                    </Paper>
                </motion.div>
            </ClickAwayListener>
        </Popper>
    );
};

export default SidebarPopper;