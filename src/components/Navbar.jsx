import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

import { useStateContext } from '../context';

const Navbar = () => {
    const navigate = usenavigate();
    const [isActive, setIsActive] = useState('dashboard');

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const { connect, address } = useStateContext();

    return (
        <div>Navbar</div>
    )
}

export default Navbar