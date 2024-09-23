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
        <footer className="px-[20px] lg:px-[120px] py-[20px] bg-primary">
            <div className="flex flex-col md:flex-row gap-[16px] md:gap-0 justify-between text-center">
                <div className="flex flex-col items-center gap-[12px]">
                    <img src={logo} alt="logo"/>
                    <p className=" text-text text-[14px] md:text-[16px] font-normal w-full sm:w-64 mx-auto">Wherever the Road Takes You, Let Us Be Your Reliable Companion - With Our Dedication to Excellence and Passion for Adventure, Your Journey Begins and Ends with Us.</p>
                    <div className="flex gap-[12px] items-center justify-center">
                        <AiOutlineMail className="fill-secondary" />
                        <h2 className="text-text text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-secondary">gowheels@gmail.com</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                    <h1 className="text-text text-[18px] md:text-[22px] lg:text-[24px] font-bold">Company</h1>
                    <ul className='text-text text-[14px] md:text-[16px]'>
                        {links.map((link) => (
                            <li key={link.id} className="mb-[12px]">
                                <NavLink
                                    to={link.path}
                                    className='text-text hover:text-secondary cursor-pointer'
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                    <h1 className="text-text text-[18px] md:text-[22px] lg:text-[24px] font-bold">Working Hours</h1>
                    <ul className="text-text text-[14px] md:text-[16px]">
                        <li className="mb-[12px]">Mon - Fri: 8:00AM - 8:00PM</li>
                        <li className="mb-[12px]">Sat: 10:00AM - 10:00PM</li>
                        <li>Sun: <span className="text-secondary">Closed</span></li>
                    </ul>
                </div>
            </div>
            <p className="text-secondary text-[14px] md:text-[16px] font-normal text-center mt-[16px] md:mt-[20px]">© 2024 GoWheels. All rights reserved.</p>
        </footer>
    );
};