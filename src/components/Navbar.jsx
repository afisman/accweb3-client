import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

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

            </div>

            <div className='sm:flex hidden flex-row justify-end gap-4'>
                <CustomButton
                    btnType='button'
                    title={address ? 'Download transactions' : 'Connect'}
                    styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                    handleClick={() => {
                        address ? disconnect() : connect()
                    }}
                />

            </div>

        </div>
    )
}

export default Navbar