import { TrendingUp } from "lucide-react";

export default function KpiCard({
    title,
    value,
    subtitle,
    icon: Icon,
    color = "bg-blue-600",
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-start justify-between">

                <div className="min-w-0">

                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-gray-900">
                        {value}
                    </h2>

                    {subtitle && (
                        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-green-600">
                            <TrendingUp size={14} />
                            <span>{subtitle}</span>
                        </div>
                    )}

                </div>

                {Icon && (
                    <div
                        className={`
                            ${color}
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            shadow-sm
                            flex-shrink-0
                        `}
                    >
                        <Icon size={24} className="text-white" />
                    </div>
                )}

            </div>

        </div>
    );
}