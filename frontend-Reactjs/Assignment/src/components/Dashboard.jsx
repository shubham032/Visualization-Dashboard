import Sidebar from "./Sidebar";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    console.log(isOpen);
    
    return (
        <div className="flex w-screen">  
            <Sidebar isOpen={isOpen} />
            <div className="flex-1"> 
                <Header setIsOpen={setIsOpen} />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;