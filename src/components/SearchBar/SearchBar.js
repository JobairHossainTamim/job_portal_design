import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className='searchDiv grid gap-10 bg-grayIsh rounded-[10px] p-[3rem]'>

            {/* Form */}
            <form action=''>
                <div className='firstDiv flex justify-between item-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-grayIsh-700'>
                    {/* for Search Job */}
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Search Job Here'></input>

                        <AiOutlineClose className='text-[30px] text-[#a5a6a6] hover:text-text-color icon'></AiOutlineClose>
                    </div>
                    {/* for company */}
                    <div className='flex gap-2 items-center'>
                        <BsHouseDoor className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Search Company'></input>

                        <AiOutlineClose className='text-[30px] text-[#a5a6a6] hover:text-text-color icon'></AiOutlineClose>
                    </div>

                    {/* for Location */}
                    <div className='flex gap-2 items-center'>
                        <CiLocationOn className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Search Location'></input>

                        <AiOutlineClose className='text-[30px] text-[#a5a6a6] hover:text-text-color icon'></AiOutlineClose>
                    </div>

                    {/* button */}

                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400'>Search</button>

                </div>
            </form>

            {/*  */}

            <div className='secDiv flex items-center gap-10 justify-center'>
                {/* Short */}
                <div className='singleSearch flex items-center gap-2'>

                    <label htmlFor='relevance' className='text-[#808080] font-semibold'>Short By</label>
                    <select name="" id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Relevant</option>
                        <option value="">Exclusive</option>
                        <option value="">Start with</option>
                    </select>
                </div>

                {/* type */}
                <div className='singleSearch flex items-center gap-2'>

                    <label htmlFor='relevance' className='text-[#808080] font-semibold'>Type</label>
                    <select name="" id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Part Time</option>
                        <option value="">Full Time</option>
                        <option value="">Internship</option>
                    </select>
                </div>

                {/*  */}

                <div className='singleSearch flex items-center gap-2'>

                    <label htmlFor='relevance' className='text-[#808080] font-semibold'>Level</label>
                    <select name="" id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Sr</option>
                        <option value="">Jr</option>
                        <option value="">Internship</option>
                    </select>
                </div>

                {/*  */}

                <span className='text-[#a1a1a1]'>Clear All</span>
            </div>
        </div>
    );
};

export default SearchBar;