import bg from "../../assets/bg.png";

export const Home = () => {
    return (
        <div className="flex flex-col px-[20px] lg:px-[120px] gap-[20px] lg:gap-[30px] py-[20px] lg:py-[40px] items-center justify-center font-sans">
            <div className="flex flex-col items-center justify-center gap-[5px] lg:gap-[10px]">
                <h1 className="text-lg md:text-2xl text-h1 font-bold">Your Premium Car Rental</h1>
                <h1 className="text-lg md:text-2xl text-secondary font-bold">Service</h1>
                <p className="text-sm text-center font-light text-paragraph">From A to B, We&apos;ve Got You Covered.</p>
            </div>
            <div className="w-auto h-auto md:w-[550px] lg:w-[750px] object-contain">
                <img src={ bg } alt="bg-image" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[12px]">
                <h1 className="text-lg md:text-2xl text-h1 font-bold">Discover The Perfect Ride For You</h1>
                <div className="flex flex-col items-center justify-center gap-[5px] lg:gap-[10px]">
                    <p className="text-sm font-light text-center text-paragraph">Unlock Your Journey with Us.</p>
                </div>
            </div>
        </div>
    );
};