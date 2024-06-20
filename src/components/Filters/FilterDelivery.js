import React, { useState, useEffect } from 'react';
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import './Filter.css';

const FilterDelivery = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 300) { // Adjust this value according to your header height
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filter_item = [{
        id: 1,
        name: "Filters",
        icon: <LuSettings2 />
    },
    {
        id: 2,
        name: "Rating 4 +"
    },
    {
        id: 3,
        name: "Pure Veg"
    },
    {
        id: 4,
        name: "Cuisines",
        afterIcon: <IoIosArrowDown />
    }];

    return (
        <div className={`filters ${isSticky ? 'sticky' : ''}`}>
            {filter_item.map((item, id) => (
                <div key={id} className='filter'>
                    {item.icon}
                    <p>{item.name}</p>
                    {item.afterIcon}
                </div>
            ))}
        </div>
    );
};

export default FilterDelivery;
