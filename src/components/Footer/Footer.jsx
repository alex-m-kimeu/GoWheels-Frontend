import { AiOutlineMail } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Fleet', path: '/fleet' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
];

export const Footer = () => {
    return (
        <footer className="px-[20px] md:px-0 py-5 bg-gray-100 mt-10 md:mt-20">
            <div className="flex flex-col sm:flex-row justify-center mx-auto text-center">
                <div className="flex-grow mb-3 sm:mb-0">
                    <img src={logo} alt="logo" className="mb-4 mx-auto" />
                    <p className="mb-4 text-paragraph text-sm font-normal w-full sm:w-64 mx-auto">Wherever the Road Takes You, Let Us Be Your Reliable Companion - With Our Dedication to Excellence and Passion for Adventure, Your Journey Begins and Ends with Us.</p>
                    <div className="flex gap-2 items-center mb-4 justify-center">
                        <AiOutlineMail className="fill-secondary" />
                        <h2 className="text-h2 text-sm md:text-base font-medium cursor-pointer hover:text-secondary">gowheels@gmail.com</h2>
                    </div>
                </div>
                <div className="flex-grow mb-4 sm:mb-0">
                    <h1 className="mb-3 text-h1 text-base md:text-xl font-bold">Company</h1>
                    <ul className='text-link text-sm md:text-base'>
                        {links.map((link) => (
                            <li key={link.id} className="mb-2">
                                <NavLink
                                    to={link.path}
                                    className='text-link hover:text-secondary'
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow">
                    <h1 className="mb-3 text-h1 text-base md:text-xl font-bold">Working Hours</h1>
                    <ul className="text-link text-sm md:text-base">
                        <li className="mb-2">Mon - Fri: 8:00AM - 8:00PM</li>
                        <li className="mb-2">Sat: 10:00AM - 10:00PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
            </div>
            <p className="text-paragraph text-sm font-thin text-center mt-4">© 2024 GoWheels. All rights reserved.</p>
        </footer>
    );
};