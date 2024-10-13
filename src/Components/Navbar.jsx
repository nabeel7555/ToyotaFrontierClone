import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../Assets/logo.png'; // Assuming you have a logo image

export default function Navbar() {
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground(true); // Add background on scroll
            } else {
                setNavBackground(false); // Transparent when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${navBackground ? 'navbar-scrolled' : ''}`}>
            <div className='flex justify-around w-full flex-wrap '>
                <img className='logo bg-white' src={logo} alt="Logo" />
                <ul className='flex justify-evenly w-[65%] mt-5 text-[14px] font-semibold'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 rounded-lg hover:bg-red-500")}>
                            HOME
                        </NavLink>
                    </li>
                     {/* Sales with dropdown */}
                    <li className="relative group">
                        <NavLink to='/sales' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            SALES
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="absolute left-0 mt-[18px] hidden w-40 bg-white border border-gray-300 group-hover:block">
                            <li>
                                <NavLink to='/sales/pricelist' className="block px-4 py-2 text-black hover:bg-red-700">
                                    Price List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sales/vehiclecomparision' className="block px-4 py-2 text-black hover:bg-red-700">
                                    Vehicle Comparision
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sales/toyotayaris' className="block px-4 py-2 text-black hover:bg-red-700">
                                    Toyota Yaris
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    {/* Services with dropdown */}
                    <li className="relative group">
                        <NavLink to='/services' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            SERVICES
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="absolute left-0 mt-[18px] hidden w-40 bg-white border border-gray-300 group-hover:block">
                            <li>
                                <NavLink to='/sales/serviceschedule' className="block px-4 py-2 text-black hover:bg-red-700">
                                    Service Schedule
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sales/mobileworkshop' className="block px-4 py-2 text-black hover:bg-red-700">
                                    Mobile Workshop
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/parts' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            PARTS
                        </NavLink>
                    </li>
                     {/* Customer Relations with dropdown */}
                     <li className="relative group">
                        <NavLink to='/customerrelations' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            Customer Relations
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="absolute left-0 mt-[18px] hidden w-40 bg-white border border-gray-300 group-hover:block">
                            <li>
                                <NavLink to='/customerrelations/feedback' className="block px-4 py-2 text-black hover:bg-red-700">
                                    FEEDBACK
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/customerrelations/loyaltymembers' className="block px-4 py-2 text-black hover:bg-red-700">
                                    LOYALTY MEMBERS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/customerrelations/appointment' className="block px-4 py-2 text-black hover:bg-red-700">
                                    APPOINTMENT
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    {/* T-SURE with dropdown */}
                    <li className="relative group">
                        <NavLink to='/tsure' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            T-SURE
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="absolute left-0 mt-[18px] hidden w-40 bg-white border border-gray-300 group-hover:block">
                            <li>
                                <NavLink to='/tsure/usedcars' className="block px-4 py-2 text-black hover:bg-red-700">
                                    USED CARS
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/faqs' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            FAQS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus' className={({ isActive }) => (isActive ? "text-white font-semibold rounded-lg p-5 pt-4 bg-red-500" : "text-white p-5 group-hover:bg-red-500 hover:bg-red-500 rounded-lg")}>
                            CONTACT US
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
