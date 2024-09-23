import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const links = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'Fleet', path: '/fleet' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'FAQs', path: '/faq' },
];

export const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem("token");
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="flex flex-col lg:flex-row items-center justify-between gap-[10px] lg:gap-0 py-[8px] lg:py-[10px] px-[25px] lg:px-[120px] shadow-md lg:shadow-none">
            <div className="flex justify-between w-full lg:w-auto">
                <Link to="/" onClick={closeNavbar}>
                    <img className='hover:cursor-pointer' src={logo} alt="logo" />
                </Link>
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="fill-text" /> : <FaBars className="fill-text" />}
                    </button>
                </div>
            </div>
            <div className={`lg:px-[20px] lg:py-[10px] lg:bg-white lg:shadow-md lg:rounded-[25px] ${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-row`}>
                <ul className='flex flex-col lg:flex-row items-center gap-[15px] lg:gap-[40px] justify-center'>
                    {links.map((link) => {
                        const activeClass = location.pathname === link.path ? 'text-secondary' : 'text-text';
                        return (
                            <li key={link.id}>
                                <Link
                                    to={link.path}
                                    onClick={closeNavbar}
                                    className={`text-[15px] font-normal hover:text-secondary hover:cursor-pointer ${activeClass}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
             <div className={`flex lg:flex-row items-center gap-[80px] lg:gap-[20px] ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                <Link to="/fleet" onClick={closeNavbar}>
                    <button
                        className="p-[5px] bg-variant text-white text-[15px] font-normal rounded-[5px]">
                        Rent a Car
                    </button>
                </Link>
                {isAuthenticated ? (
                    <button
                        className="p-[5px] bg-white text-text text-[15px] font-normal border border-variant border-solid rounded-[5px]">
                        Log Out
                    </button>
                ) : (
                    <Link to="/sign-in">
                        <button
                            className="p-[5px] bg-white text-text text-[15px] font-normal border border-variant border-solid rounded-[5px]">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};