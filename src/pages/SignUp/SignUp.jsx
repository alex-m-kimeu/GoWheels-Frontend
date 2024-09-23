import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import track from "../../assets/track.png";

export const SignUp = () => {

    return (
        <div className='flex items-center justify-center min-h-screen bg-white'
            style={{
                backgroundImage: `url(${track})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
            <div className='flex flex-col p-6 gap-5 md:gap-6 h-auto w-[350px] md:w-[400px] bg-white rounded-[8px] shadow-md'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img src={logo} alt="Logo" />
                    <h1 className='text-[18px] md:text-[24px] font-bold text-text'>Join Our Community</h1>
                    <p className='text-[14px] md:text-[16px] font-normal text-text'>Sign up to start your journey</p>
                </div>
                <form className='flex flex-col gap-5 md:gap-6'>
                    <input
                        className='border p-2 rounded-[8px] outline-none text-text font-thin text-[14px]'
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        className='border p-2 rounded-[8px] outline-none text-text font-thin text-[14px]'
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className='border p-2 rounded-[8px] outline-none text-text font-thin text-[14px]'
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className='bg-variant text-white p-2 rounded-[8px] text-[14px] md:text-[15px] font-normal'
                        type="submit"
                    >
                        Sign UP
                    </button>
                    <p
                        className='flex justify-center items-center gap-[5px] text-[14px] md:text-[16px] font-normal text-text'>
                        Already a member?
                        <Link className='text-secondary' to="/sign-in"> Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}