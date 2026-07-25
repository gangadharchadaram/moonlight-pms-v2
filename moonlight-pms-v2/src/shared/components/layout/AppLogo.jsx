import { Hotel } from "lucide-react";

export default function AppLogo() {
  return (
    <div className="border-b px-5 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
          <Hotel size={24} />
           {open && (
        <div>
            <h1>MoonLight PMS</h1>
            <p>Hotel Management</p>
        </div>
    )}
        </div>
<span
  className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
    open ? "opacity-100 w-auto ml-2" : "opacity-0 w-0"
  }`}
>
  MoonLight PMS
</span>
      </div>
    </div>
  );
}