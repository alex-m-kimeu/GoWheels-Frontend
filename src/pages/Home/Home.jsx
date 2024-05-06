import bg from "../../assets/bg.png";
import car from "../../assets/car.png";
import operator from "../../assets/operator.png";
import drive from "../../assets/drive.png";

export const Home = () => {
    return (
        <section className="flex flex-col px-[20px] lg:px-[120px] gap-[20px] lg:gap-[30px] py-[20px] lg:py-[40px] items-center justify-center font-sans">
            <div className="flex flex-col items-center justify-center gap-[5px] lg:gap-[10px]">
                <h1 className="text-lg md:text-2xl text-h1 font-bold">Your Premium Car Rental</h1>
                <h1 className="text-lg md:text-2xl text-secondary font-bold">Service</h1>
                <p className="text-sm md:text-base text-center font-light text-paragraph">Drive Your Dreams: Where Every Mile Feels Like a Journey!</p>
            </div>
            <div className="w-auto h-auto md:w-[550px] lg:w-[800px] object-contain">
                <img src={bg} alt="bg-image" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]">
                <h1 className="text-lg md:text-2xl text-h1 font-bold">Discover The Perfect Ride For You</h1>
                <p className="text-sm md:text-base font-light text-center text-paragraph">
                    We assist you in finding a vehicle that perfectly matches your style, aspirations, and budget!.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]">
                <h1 className="text-lg md:text-2xl text-h1 font-bold">Rev up your adventure</h1>
                <p className="text-sm md:text-base font-light text-center text-paragraph">Quick & easy car rental</p>
                <div className="flex flex-col md:flex-row justify-center gap-2">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-2 text-center mx-auto">
                        <img className="mx-auto block" src={car} alt="icon_img" />
                        <h1 className="text-lg md:text-2xl text-h1 font-bold">Select Car</h1>
                        <p className="w-full md:w-1/2 text-sm md:text-base font-light text-paragraph mx-auto">
                            We offers a big range of vehicles for all your driving needs.
                            We have the perfect car to meet your needs
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-2 text-center mx-auto">
                        <img className="mx-auto block" src={operator} alt="icon_img" />
                        <h1 className="text-lg md:text-2xl text-h1 font-bold">Contact Operator</h1>
                        <p className="w-full md:w-1/2 text-sm md:text-base font-light text-paragraph mx-auto">
                            Our knowledgeable and friendly operators are always ready to
                            help with any questions or concerns
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-2 text-center mx-auto">
                        <img className="mx-auto block" src={drive} alt="icon_img" />
                        <h1 className="text-lg md:text-2xl text-h1 font-bold">Let's Drive</h1>
                        <p className="w-full md:w-1/2 text-sm md:text-base font-light text-paragraph mx-auto">
                            Whether you're hitting the open road, we've got you covered
                            with our wide range of cars
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};