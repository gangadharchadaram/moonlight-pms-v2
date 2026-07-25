import { NavLink } from "react-router-dom";
import AppLogo from "./AppLogo";
import menu from "../navigation/menu";

export default function Sidebar({open}) {
  return (
<aside
  className={`
    flex h-screen flex-col border-r bg-white
    transition-all duration-300 ease-in-out
    ${open ? "w-72" : "w-20"}
  `}
>
      <AppLogo open={open}/>

      <div className="flex-1 overflow-y-auto">

        {menu.map((section) => (
          <div
            key={section.group}
            className="mt-6"
          >
            {open && (
    <h3 className="px-6 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {section.group}
    </h3>
)}

            <nav className="space-y-1 px-3">

              {section.items.map((item) => {

                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
  `
  flex items-center rounded-xl
  transition-all duration-300
  ${
    open
      ? "gap-3 px-4 py-3 justify-start"
      : "justify-center px-0 py-3"
  }
  ${
    isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-gray-700 hover:bg-gray-100"
  }
`
}
                  >
                    <Icon size={20} />

                   {open && (
    <span className="font-medium">
        {item.title}
    </span>
)}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        ))}
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