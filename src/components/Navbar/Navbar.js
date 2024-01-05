import React from 'react';

const Navbar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-blueColor'>
                    <strong>Job</strong>Search
                </h1>
            </div>
            {/* menu */}
            <div className='menu flex gap-8'>
                <li className='menu-list text-[#6f6f6f] hover:text-blueColor'>Job</li>
                <li className='menu-list text-[#6f6f6f] hover:text-blueColor'>Company</li>
                <li className='menu-list text-[#6f6f6f] hover:text-blueColor'>About</li>
                <li className='menu-list text-[#6f6f6f] hover:text-blueColor'>Contact</li>
            </div>
        </div>
    );
};

export default Navbar;