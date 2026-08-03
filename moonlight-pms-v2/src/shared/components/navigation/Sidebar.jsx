import { useState } from "react";

import AppLogo from "../layout/AppLogo";

import SidebarItem from "../navigation/SidebarItem";
import SidebarGroup from "../navigation/SidebarGroup";

import menu from "@/shared/navigation/menu";

export default function Sidebar({ open }) {

    const [expanded, setExpanded] = useState(null);

    return (

        <aside
            className={`
                flex
                h-screen
                flex-col
                border-r
                bg-white
                transition-all
                duration-300
                ease-in-out
                ${open ? "w-72" : "w-20"}
            `}
        >

            <AppLogo open={open} />

             \<div className="flex-1 overflow-y-auto overflow-x-visible py-4">

                <nav className="space-y-2 px-3">

                    {menu.map((item) =>

                        item.children ? (

                            <SidebarGroup

                                key={item.title}

                                item={item}

                                open={open}

                                expanded={expanded}

                                setExpanded={setExpanded}

                            />

                        ) : (

                            <SidebarItem

                                key={item.path}

                                item={item}

                                open={open}

                            />

                        )

                    )}

                </nav>

            </div>

            <div className="border-t p-5 text-center text-xs text-gray-400">

                {open ? (

                    <>
                        MoonLight PMS v2
                        <br />
                        © 2026
                    </>

                ) : (

                    <>©</>

                )}

            </div>

        </aside>

    );

}