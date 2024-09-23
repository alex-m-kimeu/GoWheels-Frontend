import { useEffect, useState } from 'react';
import person from "../../assets/contact.jpg";
import { Link } from "react-router-dom";
import countryCodesData from '../../data/codes.json';

export const Contact = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ name: '', code: '', dial_code: '' });
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchCountryCodes = () => {
      const codes = countryCodesData.map(country => ({
        name: country.name,
        code: country.code,
        dial_code: country.dial_code
      }));
      setCountryCodes(codes);
      if (codes.length > 0) {
        setSelectedCountry(codes[0]);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    const country = countryCodes.find(c => c.code === selectedCode);
    setSelectedCountry(country);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <section className="px-[20px] md:px-[40px] lg:px-[120px] py-[20px] lg:py-[40px] flex justify-center">
      <div className="flex flex-col justify-normal lg:justify-center items-center lg:items-start gap-[20px] w-full lg:w-[600px] h-auto lg:h-[800px]">
        <div className="text-center lg:text-left space-y-2">
          <h1 className="text-[18px] md:text-[22px] lg:text-[24px] text-text font-bold">Get in touch</h1>
          <p className="text-[14px] md:text-[16px] text-text font-normal">Our friendly team would love to hear from you.</p>
        </div>
        <form className="flex flex-col gap-[24px] w-full lg:w-auto">
          <div className="flex flex-col md:flex-row gap-[32px] w-full lg:w-auto">
            <div className="flex flex-col gap-[6px] w-full lg:w-auto">
              <p className="text-[14px] md:text-[16px] text-text font-normal">First Name</p>
              <input
                type="text"
                placeholder="First name"
                className="border px-[16px] py-[12px] rounded-[8px] outline-none text-text font-thin text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-[6px] w-full lg:w-auto">
              <p className="text-[14px] md:text-[16px] text-text font-normal">Last name</p>
              <input
                type="text"
                placeholder="Last name"
                className="border px-[16px] py-[12px] rounded-[8px] outline-none text-text font-thin text-[14px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] md:text-[16px] text-text font-normal">Email</p>
            <input
              type="email"
              placeholder="you@company.com"
              className="border px-[16px] py-[12px] rounded-[8px] outline-none text-text font-thin text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-[6px] w-full">
            <p className="text-[14px] md:text-[16px] text-text font-normal">Phone</p>
            <div className="flex items-center border px-[16px] py-[12px] rounded-[8px] outline-none w-full">
              <select
                className="border-none bg-transparent text-text font-thin text-[14px] outline-none w-[60px] px-2"
                onChange={handleCountryChange}
                value={selectedCountry.code}
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.code} - {country.name}
                  </option>
                ))}
              </select>
              <span className="text-text font-thin text-[14px] pl-2">
                {selectedCountry.dial_code}
              </span>
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="flex-1 border-none bg-transparent text-text font-thin text-[14px] outline-none pl-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] md:text-[16px] text-text font-normal">Message</p>
            <textarea
              className="border px-[14px] py-[10px] rounded-[8px] h-[120px] outline-none text-text font-thin text-[14px] w-full resize-none"
            />
          </div>
          <div className='flex items-center gap-[10px] text-[14px] md:text-[16px] font-normal text-text'>
            <input type='checkbox' />
            <p>You agree to our friendly <Link className="text-secondary underline">privacy policy.</Link></p>
          </div>
          <button className="bg-variant text-white text-[15px] font normal rounded-[8px] py-[12px] px-[20px]">Send Message</button>
        </form>
      </div>
      <img src={person} alt="contact person" className="w-[600px] h-[800px] object-fit hidden lg:block" />
    </section>
  );
};

export default Contact;