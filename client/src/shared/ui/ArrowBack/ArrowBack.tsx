import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { iconSize } from "./constants";

export function ArrowBack() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="p-2 rounded-full hover:bg-gray-200">
            <FaArrowLeftLong onClick={handleClick} size={iconSize} />
        </div>
    );
}
