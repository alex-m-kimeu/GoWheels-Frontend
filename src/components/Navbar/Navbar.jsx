import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, NavLink} from "react-router-dom";

const links = [
    { id: 1, name: 'Fleet', path: '/fleet' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'FAQ', path: '/faq' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col lg:flex-row items-center justify-between gap-[10px] lg:gap-0 py-[10px] px-[25px] lg:px-[120px] shadow-md lg:shadow-none">
            <div className="flex justify-between w-full lg:w-auto">
                <Link to="/">
                    <img className='w-[90px] md:w-[140px] h-3 md:h-5 hover:cursor-pointer' src={logo} alt="logo" />
                </Link>
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="fill-link"/> : <FaBars className="fill-link"/>}
                    </button>
                </div>
            </div>
            <div className={`lg:px-[20px] lg:py-[10px] lg:bg-primary lg:shadow-md lg:rounded-[25px] ${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-row`}>
                <ul className='flex flex-col lg:flex-row items-center gap-[15px] lg:gap-[40px] justify-center'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                className='text-[15px] font-normal text-link hover:text-secondary hover:cursor-pointer'
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`flex lg:flex-row items-center gap-[80px] lg:gap-[20px] ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                <Link to="/fleet">
                    <button
                        className="p-[5px] bg-variant text-primary text-[15px] font-normal rounded-[5px]">
                        Rent a Car
                    </button>
                </Link>
                <button
                    className="p-[5px] bg-primary text-link text-[15px] font-normal border border-variant border-solid rounded-[5px]">
                    Log Out
                </button>
            </div>
        </nav>
    );
};