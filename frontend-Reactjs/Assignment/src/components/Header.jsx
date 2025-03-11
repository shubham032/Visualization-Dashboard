const Header = ({ setIsOpen }) => {
    const handleToggle = () => {
        setIsOpen(prev => !prev); 
    };
    return(
        <div className="flex justify-between items-center bg-white shadow-xl  p-3">
            <button onClick={handleToggle} className="toggle">
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div className="header-user mr-4 text-black flex items-center gap-3">

                <h4>Welcome User</h4>

            <div className="bg bg-[#14171c] p-1 rounded-2xl">
            <svg
            className="h-6 w-6" 
            viewBox="0 0 60.671 60.671"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <g>
                    <ellipse
                        className="fill-current text-white" 
                        cx="30.336"
                        cy="12.097"
                        rx="11.997"
                        ry="12.097"
                    />
                    <path
                        className="fill-current text-white"
                        d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                        C48.354,35.818,42.661,30.079,35.64,30.079z"
                    />
                </g>
            </g>
            </svg>
            </div>

            </div>
        </div>
    )
    }
    export default Header;