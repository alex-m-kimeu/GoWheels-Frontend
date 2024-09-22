import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import track from "../../assets/track.png";

export const SignIn = () => {

    return (
        <div className='flex items-center justify-center min-h-screen bg-primary'
            style={{
                backgroundImage: `url(${track})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
            <div className='flex flex-col p-6 gap-5 md:gap-6 h-auto w-[350px] md:w-[400px] bg-primary rounded-[8px] shadow-md'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img src={logo} alt="Logo" />
                    <h1 className='text-[18px] md:text-[24px] font-bold text-text'>Drive Your Dreams</h1>
                    <p className='text-[14px] md:text-[16px] font-normal text-text'>Your Premium Car Rental Service</p>
                </div>
                <form className='flex flex-col gap-5 md:gap-6'>
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
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[10px] text-[14px] md:text-[16px] font-normal text-text'>
                            <input type='checkbox' />
                            <label>Remember me</label>
                        </div>
                        <p className='text-secondary cursor-pointer text-[14px] md:text-[16px] font-normal'>Forgot password?</p>
                    </div>
                    <button
                        className='bg-variant text-white p-2 rounded-[8px] text-[14px] md:text-[15px] font-normal'
                        type="submit"
                    >
                        Sign in
                    </button>
                    <p
                        className='flex justify-center items-center gap-[5px] text-[14px] md:text-[16px] font-normal text-text'>
                        Not a member yet?
                        <Link className='text-secondary' to="/sign-up"> Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}