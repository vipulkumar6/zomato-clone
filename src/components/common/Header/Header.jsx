import React from 'react'
import './header.css'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    const zomato_logo_path = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
    return (
        <>
            <div className='navbar maxwidth'>
                <div className="left_sec">
                    <div className='logo_box'>
                        <img src={zomato_logo_path} alt="" />

                    </div>
                    <div className='searchBox'>
                        <div className='location'>
                            <div>
                                <FaLocationDot className='location_icon' id='location_icon s_icons'></FaLocationDot>
                                <p>Dehradun</p>
                            </div>
                            <IoMdArrowDropdown id='s_icons' />
                        </div>
                        <div className='search'>
                            <p>|</p>
                            <CiSearch id='s_icons' />
                            <input type="text" placeholder='Search for restaurent, cuisine or a dish' />
                        </div>
                    </div>
                </div>

                <div className='myprofile'>
                    <CgProfile id='profileicon' />
                    <h3>Vipul</h3>
                    <MdKeyboardArrowDown id='s_icons' />
                </div>
            </div>
        </>
    )
}

export default Header
