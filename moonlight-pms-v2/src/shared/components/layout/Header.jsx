import {
  Bell,
  ChevronDown,
  Menu,
  Moon,
  Search,
} from "lucide-react";

export default function Header({onMenuClick}) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">

      {/* Left */}

      <div className="flex items-center gap-5">

        <button className="rounded-lg p-2 transition hover:bg-gray-100" onClick={onMenuClick}>
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Guest Management
          </h1>

          <p className="text-sm text-gray-500">
            Home / Guests
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="hidden lg:flex items-center rounded-xl border bg-gray-50 px-4 py-2">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            placeholder="Search..."
            className="ml-3 w-56 bg-transparent outline-none"
          />

        </div>

        {/* Theme */}

        <button className="rounded-xl border p-2 hover:bg-gray-100">

          <Moon size={18} />

        </button>

        {/* Notification */}

        <button className="relative rounded-xl border p-2 hover:bg-gray-100">

          <Bell size={18} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex cursor-pointer items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">

            G

          </div>

          <div className="hidden md:block">

            <p className="font-semibold">
              Gangadhar
            </p>

            <p className="text-sm text-gray-500">
              Software Engineer
            </p>

          </div>

          <ChevronDown size={18} />

        </div>

      </div>

    </header>
  );
}