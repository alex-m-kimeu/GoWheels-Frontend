import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const Faq = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleClick = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(index);
        }
    };

    const faqs = [
        {
            question: "1. How do I find the best car rental deals?",
            answer: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia and Kayak allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
        },
        {
            question: "2. How can I get the lowest rental car prices?",
            answer: "Booking in advance can often result in lower prices. Compare prices from multiple companies using websites like Kayak or Expedia. Look for discount codes and coupons to further reduce the rental price. Renting from an off-airport location can sometimes result in lower prices as well."
        },
        {
            question: "3. Why is it important to compare rental car deals?",
            answer: "Comparing rental car deals is essential as it helps you find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models."
        },
        {
            question: "4. What factors should I consider when renting a car?",
            answer: "When renting a car, consider factors such as the rental company's reputation, the type of car you need, rental duration, mileage limits, fuel policies, insurance coverage, additional fees, and any restrictions or requirements."
        },
        {
            question: "5. How do I know if I need rental car insurance?",
            answer: "Check with your personal auto insurance provider to see if rental car coverage is included in your policy. If not, consider purchasing insurance from the rental car company, or through a third-party provider. Evaluate the coverage options and costs to determine if it's necessary for your rental."
        }, {
            question: "6. What should I do if the rental car breaks down?",
            answer: "If the rental car breaks down, you should immediately contact the rental company. They will provide instructions on what to do next. Most rental companies offer roadside assistance as part of their service."
        },
        {
            question: "7. Can I extend my rental period?",
            answer: "Yes, most rental companies allow you to extend your rental period. However, you should contact the company as soon as you know you need to extend to ensure the car is still available and to discuss any additional fees."
        },
        {
            question: "8. Can I drop off the rental car at a different location?",
            answer: "This depends on the rental company. Some companies allow one-way rentals where you can drop off the car at a different location, while others require you to return the car to the same location where you picked it up. Check with the rental company for their specific policies."
        },
        {
            question: "9. What happens if I return the car late?",
            answer: "If you return the car late, you may be charged for an extra day's rental. Some companies have a grace period for late returns, but this varies by company. It's best to return the car on time to avoid any additional charges."
        },
        {
            question: "10. Can I add an additional driver to my rental?",
            answer: "Yes, most rental companies allow you to add an additional driver to your rental. However, there may be additional fees, and the additional driver must meet the same rental requirements as the primary driver."
        }

    ];


    return (
        <section className="flex justify-center">
            <div className="w-full max-w-2xl p-8">
                <div className="flex justify-center items-center text-xl font-bold">
                    <Link to="/" className="mr-2 text-secondary">Home</Link>
                    <span className="mx-2">/</span>
                    <h1 className="text-center text-h1">FAQ</h1>
                </div>
                <h2 className="text-base mb-2 text-center text-h2">Frequently Asked Questions</h2>
                <div className="shadow-md p-4 mt-5">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white py-4">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClick(index)}>
                                <p className={`font-semibold text-base ${selectedQuestion === index ? 'text-secondary' : 'text-h2'}`}>{faq.question}</p>
                                <RiArrowDropDownLine className={`transform transition-transform duration-200 fill-h2 w-6 h-6 ${selectedQuestion === index ? 'rotate-180' : ''}`} />
                            </div>
                            {selectedQuestion === index && <p className="mt-2 text-paragraph font-light text-normal">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}