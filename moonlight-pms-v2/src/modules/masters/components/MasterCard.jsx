import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MasterCard = ({
    title,
    description,
    icon: Icon,
    path,
    color,
}) => {

    const navigate = useNavigate();

    return (

        <div
            onClick={() => navigate(path)}
            className="
                cursor-pointer
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div
                className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    text-white
                    ${color}
                `}
            >

                <Icon size={28} />

            </div>

            <h2 className="mt-5 text-lg font-semibold">

                {title}

            </h2>

            <p className="mt-2 text-sm text-gray-500">

                {description}

            </p>

            <div className="mt-6 flex items-center text-blue-600 font-medium">

                Open

                <ArrowRight
                    className="ml-2"
                    size={18}
                />

            </div>

        </div>

    );

};

export default MasterCard;