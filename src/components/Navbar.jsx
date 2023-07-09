import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";
import { search } from '../assets';

import { useStateContext } from '../context';

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const { connect, address, disconnect } = useStateContext();

    return (
        <div className='flex md:flex-row flex-col-reverse 
        justify-between mb-[35px] gap-6'>
            <div className='lg:flex-1 flex flex-row max-w-[458px]
            py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
                <input type='text' placeholder='Search for campaigns'
                    className='flex w-full font-epilogue font-normal text-[14px]
                    placeholder:text-[#4b5264] text-white bg-transparent outline-none' />

                <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex
                justify-center items-center cursor-pointer'>
                    <img src={search} alt='search'
                        className='w-[15px] h-[15px] object-contain'
                    />
                </div>
            </div>

            <div className='sm:flex hidden flex-row justify-end gap-4'>
                <div className="connect">
                    <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }}
                        className={`font-epilogue font-semibold text-[16px] leading-[26px]
            text-white min-h-[52px] px-4 rounded-[10px] ${address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}`} />
                </div>

            </div>

        </div>
    )
}

export default Navbar