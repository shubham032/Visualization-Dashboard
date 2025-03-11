import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/Dashboard');
    };

    return (
        <div className="bg-slate-800 h-screen w-screen flex justify-center items-center flex-col gap-5 ">
            <h1 className="text-white text-4xl tracking-widest text-center">Welcome to Dashboard</h1>
            <button 
                className="bg-slate-700 p-2 text-2xl rounded-lg text-gray-300 
                           hover:shadow-md hover:shadow-gray-500 hover:text-white transition-shadow duration-300"
                onClick={handleNavigation}
            >
                Get Started !!
            </button>
        </div>
    );
}

export default Welcome;