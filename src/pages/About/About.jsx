import { useEffect, useState } from 'react';
import data from '../../data/data.json';

export const About = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchPeople = () => {
            const peopleData = data.people.map(person => ({
                name: person.name,
                role: person.role,
                imageUrl: person.imageUrl,
                bio: person.bio,
            }));
            setPeople(peopleData);
        };

        fetchPeople();
    }
        , [people]);

    return (
        <section className="flex flex-col px-[20px] md:px-[40px] lg:px-[120px] gap-[20px] lg:gap-[40px] py-[20px] lg:py-[40px]">
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col gap-[8px] md:gap-[12px] lg:gap-[16px] w-auto md:w-[625px]">
                    <div className="text-center space-y-[4px] lg:space-y-[6px]">
                        <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Meet</h1>
                        <h2 className="text-[18px] md:text-[22px] lg:text-[24px] text-secondary font-bold">The Team</h2>
                    </div>
                    <p className="text-[14px] md:text-[16px] text-text font-normal text-wrap text-center">
                        At GoWheels, we provide a wide range of quality vehicles to suit all your travel needs.
                        Whether it's a short trip, a family vacation, or business travel, our fleet is ready for you.
                        We pride ourselves on excellent customer service and competitive pricing,
                        ensuring a smooth and reliable car rental experience. Let us be a
                        part of your journey today!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px]">
                {people.map((person) => (
                    <div key={person.name} className="bg-primary p-[20px] flex flex-col items-center rounded-[5px]">
                        <img
                            alt={person.name}
                            src={person.imageUrl}
                            className="h-[80px] w-[80px] rounded-full object-cover mb-4"
                        />
                        <h1 className="text-[16px] md:text-[18px] text-text font-bold">{person.name}</h1>
                        <h2 className="text-[14px] text-secondary font-semibold">{person.role}</h2>
                        <p className="text-[14px] md:text-[16px] text-text font-normal text-center">{person.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}