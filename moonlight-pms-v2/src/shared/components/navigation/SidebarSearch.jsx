import { Search } from "lucide-react";

export default function SidebarSearch({
    value,
    onChange,
    open,
}) {

    if (!open) return null;

    return (

        <div className="px-3 pb-4">

            <div className="flex items-center rounded-xl border bg-gray-50 px-3">

                <Search
                    size={18}
                    className="text-gray-400"
                />

                <input
                    value={value}
                    onChange={onChange}
                    placeholder="Search..."
                    className="
                        w-full
                        bg-transparent
                        px-2
                        py-2.5
                        text-sm
                        outline-none
                    "
                />

            </div>

        </div>

    );

}