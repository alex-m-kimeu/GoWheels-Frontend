import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import jaguar from '../../assets/jaguar-back.png';
import faq1 from '../../assets/faq1.jpg';
import faq2 from '../../assets/faq2.jpg';
import faq3 from '../../assets/faq3.jpg';

export const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    useEffect(() => {
        const fetchFaqs = () => {
            const faqsData = data.FAQs.map(faq => ({
                question: faq.question,
                answer: faq.answer
            }));
            setFaqs(faqsData);
        };

        fetchFaqs();
    }, []);

    const handleClick = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(index);
        }
    };

    return (
        <section className="flex flex-col px-[20px] md:px-[40px] lg:px-[120px] gap-[20px] lg:gap-[40px] py-[20px] lg:py-[40px] items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-center gap-[20px] lg:gap-[80px] w-full">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col gap-[50px] w-auto lg:w-[450px] h-auto">
                        <div className="flex flex-col items-center gap-[8px]">
                            <div className="flex gap-[6px] font-bold text-[18px] md:text-[22px] lg:text-[24px]">
                                <Link to="/" className="text-secondary">Home</Link>
                                <span className="text-text">/</span>
                                <h1 className="text-text">FAQs</h1>
                            </div>
                            <h2 className="text-text text-[14px] md:text-[16px] font-normal">Frequently Asked Questions</h2>
                        </div>
                        <img src={jaguar} alt="jaguar-car" className="hidden lg:block" />
                    </div>
                </div>
                <div className="shadow-md px-[16px] w-auto lg:w-[800px] h-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white py-[12px]">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClick(index)}>
                                <p className={`font-semibold text-base ${selectedQuestion === index ? 'text-secondary' : 'text-text'}`}>{faq.question}</p>
                                <RiArrowDropDownLine className={`transform transition-transform duration-200 w-6 h-6 ${selectedQuestion === index ? 'rotate-180 fill-secondary' : 'fill-text'}`} />
                            </div>
                            {selectedQuestion === index && <p className="mt-2 text-text font-normal">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-primary flex flex-col justify-center items-center p-[30px] gap-[15px] rounded-[8px]">
                <div className="relative flex -space-x-[14px] md:-space-x-[18px] items-center overflow-hidden">
                    <img
                        alt="pic"
                        src={faq1}
                        className="relative h-[38px] w-[38px] md:h-[48px] md:w-[48px] rounded-full object-fill z-10 ring-[1px] ring-white mt-1 md:mt-2"
                    />
                    <img
                        alt="pic"
                        src={faq2}
                        className="relative h-[46px] w-[46px] md:h-[56px] md:w-[56px] rounded-full object-fill z-30 ring-[2px] ring-white"
                    />
                    <img
                        alt="pic"
                        src={faq3}
                        className="relative h-[38px] w-[38px] md:h-[48px] md:w-[48px] rounded-full object-fill z-20 ring-[1px] ring-white mt-1 md:mt-2"
                    />
                </div>
                <div className="text-center space-y-[8px]">
                    <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Still have questions?</h1>
                    <p className="text-[14px] md:text-[16px] text-text font-normal">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                </div>
                <button className="bg-variant font-normal text-[15px] text-white p-[5px] rounded-[5px]">
                    <Link to='/contact'>Get in touch</Link>
                </button>
            </div>
        </section>
    );
}