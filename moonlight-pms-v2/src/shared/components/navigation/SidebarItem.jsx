import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const SidebarItem = ({
    item,
    open
}) => {

    const Icon = item.icon;

    return (

        <Tooltip
    title={!open ? item.title : ""}
    placement="right"
    arrow
>


        <NavLink
            to={item.path}
            className={({ isActive }) => `

                flex
                items-center

                ${
                    open
                        ? "px-4 py-3 gap-3"
                        : "justify-center py-3"
                }

                rounded-xl

                transition-all

                duration-300

                ${
                    isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-gray-100 text-gray-700"
                }

            `}
        >

            <Icon size={20} />

            {open && (

                <span className="font-medium">

                    {item.title}

                </span>

            )}

        </NavLink>

</Tooltip>


    );

};

export default SidebarItem;