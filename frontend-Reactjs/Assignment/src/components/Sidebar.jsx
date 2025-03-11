const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar flex flex-col justify-top align-center bg-[#14171c] min-h-screen transition-all duration-300 ${isOpen ? 'w-[16%] opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <h1 className="py-2.5 text-white text-xl md:text-md lg:text-3xl text-center tracking-widest border-b border-gray-700">
                Dashboard
            </h1>
            <ul className="text-lg md:text-md lg:text-lg text-wrap text-start px-[15%] mt-4">
                <li className="sidebar-list-item">ANALYTICS</li>
                <li className="sidebar-list-item">E-COMMERCE</li>
                <li className="sidebar-list-item">PROFILE</li>
            </ul>
        </div>
    );
}

export default Sidebar;