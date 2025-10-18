import React from "react";

const nav = () => {
    return (
        <nav className="bg-black shadow-md p-4">
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
            </ul>
        </nav>
    );
}
export default nav;
