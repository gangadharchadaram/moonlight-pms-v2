import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";

const SidebarSubItem = ({ item }) => {

    return (

        <NavLink
            to={item.path}
            className={({ isActive }) => `
                flex
                items-center
                justify-between
                rounded-lg
                py-2
                pl-14
                pr-4
                text-sm
                transition-all

                ${
                    isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                }
            `}
        >

            <span>

                {item.title}

            </span>

            {item.badge > 0 && (

                <Badge
                    badgeContent={item.badge}
                    color="error"
                />

            )}

        </NavLink>

    );

};

export default SidebarSubItem;