import coming from "../../assets/coming.png";

export const Fleet = () => {
    return (
        <section className="flex flex-col px-[20px] md:px-[40px] lg:px-[120px] gap-[20px] lg:gap-[40px] py-[20px] lg:py-[40px] justify-center items-center">
            <img src={coming} alt="coming soon" className="w-[350px] md:w-[550px] h-auto"/>
        </section>
    );
};