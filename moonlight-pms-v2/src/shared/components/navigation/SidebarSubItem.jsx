import { NavLink } from "react-router-dom";

const SidebarSubItem = ({ item }) => {

    return (

        <NavLink
            to={item.path}
            className={({ isActive }) => `
                flex items-center
                rounded-lg
                py-2
                pl-14
                pr-4
                text-sm
                transition-all
                duration-200

                ${
                    isActive
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                }
            `}
        >
            {item.title}
        </NavLink>

    );

};

export default SidebarSubItem;