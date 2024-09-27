import bg from "../../assets/bg.png";
import car from "../../assets/car.png";
import operator from "../../assets/operator.png";
import drive from "../../assets/drive.png";
import { MdOutlineSearch } from "react-icons/md";

export const Home = () => {
    return (
        <section className="flex flex-col px-[20px] md:px-[40px] lg:px-[120px] gap-[20px] lg:gap-[40px] py-[20px] lg:py-[40px] items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-[4px] md:gap-[8px] lg:gap-[12px]">
                <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Your Premium Car Rental</h1>
                <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-secondary font-bold">Service</h1>
                <p className="text-[14px] md:text-[16px] text-text font-normal text-wrap text-center">Drive Your Dreams: Where Every Mile Feels Like a Journey!</p>
            </div>
            <div className="w-auto h-auto md:w-[550px] lg:w-[800px] object-contain">
                <img src={bg} alt="bg-image" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] lg:gap-[12px]">
                <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Discover The Perfect Ride For You</h1>
                <p className="text-[14px] md:text-[16px] text-text font-normal">Find what fits you</p>
                <div className="flex flex-col gap-[12px] md:gap-[18px] w-auto lg:w-[800px]">
                    <h2 className="text-[15px] md:text-[18px] text-variant font-semibold">Search vehicle</h2>
                    <p className="text-[14px] md:text-[16px] text-text font-normal">
                        Simply write the vehicle name and press the search button (i.e BMW or Audi)
                    </p>
                    <div className="px-[10px] py-[10px] md:py-[12px] flex items-center bg-primary gap-[8px]">
                        <MdOutlineSearch className="w-[15px] h-[15px] fill-text" />
                        <input
                            type="text"
                            placeholder="Enter vehicle name"
                            className="text-text font-thin text-[14px] outline-none w-full bg-primary"
                        />
                    </div>
                    <h2 className="text-[15px] md:text-[18px] text-variant font-semibold">Filter by budget</h2>
                    <div className="grid grid-cols-2 gap-4 w-full sm:grid-cols-4 sm:gap-y-6 md:grid-cols-6 md:gap-4 lg:grid-cols-6 lg:gap-4">
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center">0 - 1k</button>
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center">1k - 2k</button>
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center">2k - 3k</button>
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center">3k - 6k</button>
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center sm:col-span-2 md:col-span-1 lg:col-span-1">6k - 7k</button>
                        <button className="bg-primary text-text text-[14px] font-light p-[10px] w-full h-[34px] flex items-center justify-center sm:col-span-2 md:col-span-1 lg:col-span-1">Above 7k</button>
                    </div>
                    <button className="bg-variant text-white font-normal text-[14px] md:text-[15px] py-[10px]">Search</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]">
                <div className="flex flex-col gap-[10px] text-center">
                    <h1 className="text-[18px] md:text-[22px] text-text font-bold">Rev up your adventure</h1>
                    <p className="text-[14px] md:text-[16px] text-text font-normal">Quick & easy car rental</p>
                </div>
                <div className="flex flex-col md:flex-row gap-auto md:gap-[50px] lg:gap-[120px] p-0 md:p-[20px]">
                    <div className="flex flex-col justify-center items-center gap-[4px] md:gap-[12px] w-auto lg:w-[250px] h-[auto]">
                        <img className="w-[174px] h-[174px] object-contain" src={car} alt="icon_img" />
                        <div className="text-center space-y-2">
                            <h1 className="text-[18px] md:text-[22px] text-text font-bold">Select Car</h1>
                            <p className="text-[14px] md:text-[16px] text-text font-normal text-wrap">
                                We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[4px] md:gap-[12px] w-auto lg:w-[250px] h-[auto]">
                        <img className="w-[174px] h-[174px] object-contain" src={operator} alt="icon_img" />
                        <div className="text-center space-y-2">
                            <h1 className="text-[18px] md:text-[22px] text-text font-bold">Contact Operator</h1>
                            <p className="text-[14px] md:text-[16px] text-text font-normal text-wrap">
                                Our knowledgeable and friendly operators are always ready to help with any questions or concerns.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[4px] md:gap-[12px] w-auto lg:w-[250px] h-[auto]">
                        <img className="w-[174px] h-[174px] object-contain" src={drive} alt="icon_img" />
                        <div className="text-center space-y-2">
                            <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Let's Drive</h1>
                            <p className="text-[14px] md:text-[16px] text-text font-normal text-wrap">
                                Whether you're hitting the open road, we've got you covered with our wide range of cars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};