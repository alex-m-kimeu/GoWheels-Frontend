import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import jaguar from '../../assets/jaguar-back.png';

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
                <div className="flex flex-col gap-[50px] w-auto lg:w-[400px] justify-center">
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
                <div className="shadow-md px-[16px] w-auto lg:w-[800px]">
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
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-[45px] w-[45px] md:h-[56px] md:w-[56px] rounded-full"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-[45px] w-[45px] md:h-[56px] md:w-[56px] rounded-full"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        className="inline-block h-[45px] w-[45px] md:h-[56px] md:w-[56px] rounded-full"
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