import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function SidebarPopper({
    anchorEl,
    open,
    title,
    items,
    onMouseEnter,
    onMouseLeave,
}) {

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

            <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
            >

                <Paper
                    elevation={10}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
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
                                    transition-all

                                    ${
                                        isActive
                                            ? "bg-blue-50 text-blue-600"
                                            : "hover:bg-gray-100"
                                    }
                                `}
                            >
                                {child.title}
                            </NavLink>

                        ))}

                    </div>

                </Paper>

            </motion.div>

        </Popper>

    );

}