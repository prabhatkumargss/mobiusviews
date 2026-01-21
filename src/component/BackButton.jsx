import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";



function BackButton() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            className="
        fixed top-14 left-6 z-50
        flex items-center gap-2
        text-gray-800 font-semibold
        px-2 py-1
        border-b-2 border-transparent
        hover:border-button_Primary
        hover:text-button_Primary
        transition-all duration-300
        group cursor-pointer
      "
            title="Back to Home"
        >
            <ArrowLeft
                size={20}
                className="
          transition-transform duration-300
          group-hover:-translate-x-1
        "
            />
            <span className="text-base tracking-wide">
                Back to Home
            </span>
        </button>
    )
}

export default BackButton

