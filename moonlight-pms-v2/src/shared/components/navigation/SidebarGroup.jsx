import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Collapse from "@mui/material/Collapse";

import {
    ChevronDown,
    ChevronRight,
} from "lucide-react";

import SidebarSubItem from "./SidebarSubItem";
import SidebarPopper from "./SidebarPopper";

const SidebarGroup = ({
    item,
    open,
    expanded,
    setExpanded,
}) => {

    const location = useLocation();

    const Icon = item.icon;

    const buttonRef = useRef(null);

    const timerRef = useRef(null);

    const [hoverOpen, setHoverOpen] = useState(false);

    const isExpanded = expanded === item.title;

    const isActive = item.children.some(child =>
        location.pathname.startsWith(child.path)
    );

    useEffect(() => {

        if (isActive) {
            setExpanded(item.title);
        }

    }, [isActive, item.title, setExpanded]);

    const handleClick = () => {

        if (!open) return;

        setExpanded(
            isExpanded ? null : item.title
        );

    };

    const handleMouseEnter = () => {

        if (open) return;

        clearTimeout(timerRef.current);

        setHoverOpen(true);

    };

    const handleMouseLeave = () => {

        if (open) return;

        timerRef.current = setTimeout(() => {

            setHoverOpen(false);

        }, 150);

    };

    return (

        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <button
                ref={buttonRef}
                onClick={handleClick}
                className={`
                    flex
                    w-full
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    duration-200

                    ${
                        isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                    }
                `}
            >

                <Icon size={20} />

                {open && (

                    <>
                        <span className="ml-3 flex-1 text-left font-medium">

                            {item.title}

                        </span>

                        {isExpanded ? (

                            <ChevronDown size={18} />

                        ) : (

                            <ChevronRight size={18} />

                        )}

                    </>

                )}

            </button>

            {/* Expanded Sidebar */}

            {open && (

                <Collapse
                    in={isExpanded}
                    timeout="auto"
                    unmountOnExit
                >

                    <div className="mt-1 space-y-1">

                        {item.children.map(child => (

                            <SidebarSubItem
                                key={child.path}
                                item={child}
                            />

                        ))}

                    </div>

                </Collapse>

            )}

            {/* Collapsed Sidebar */}

            {!open && (

                <SidebarPopper
                    anchorEl={buttonRef.current}
                    open={hoverOpen}
                    title={item.title}
                    items={item.children}
                    onMouseEnter={() => {

                        clearTimeout(timerRef.current);

                    }}
                    onMouseLeave={() => {

                        timerRef.current = setTimeout(() => {

                            setHoverOpen(false);

                        }, 150);

                    }}
                />

            )}

        </div>

    );

};

export default SidebarGroup;