import {
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";

import { useState } from "react";

export default function SidebarUser({

    open

}) {

    const [anchorEl, setAnchorEl] = useState(null);

    if (!open) {

        return (

            <div className="flex justify-center p-3">

                <Avatar>

                    G

                </Avatar>

            </div>

        );

    }

    return (

        <>

            <button

                onClick={(e)=>setAnchorEl(e.currentTarget)}

                className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    p-3
                    hover:bg-gray-100
                "

            >

                <Avatar>

                    G

                </Avatar>

                <div className="text-left">

                    <div className="font-medium">

                        Gangadhar

                    </div>

                    <div className="text-xs text-gray-500">

                        Software Engineer II

                    </div>

                </div>

            </button>

            <Menu

                anchorEl={anchorEl}

                open={Boolean(anchorEl)}

                onClose={()=>setAnchorEl(null)}

            >

                <MenuItem>

                    My Profile

                </MenuItem>

                <MenuItem>

                    Change Password

                </MenuItem>

                <MenuItem>

                    Logout

                </MenuItem>

            </Menu>

        </>

    );

}