import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='text-center space-y-6'>
            <div className='flex flex-col text-center items-center space-y-4 w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
                <p className='w-2/5 text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>

            </div>
            <button className='btn bg-[#2d5a48] text-white '> <FaPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;