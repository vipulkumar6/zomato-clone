import React, { useEffect, useState } from 'react'
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import './Filter.css'
const FilterDinOut = () => {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 650) { // Adjust this value according to your header height
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
        name: "Gold",
        icon: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
    },
    {
        id: 3,
        name: "Rating 4.0+"

    },
    {
        id: 4,
        name: "Outdoor Seating ",

    },
    {
        id: 5,
        name: "Serves Alcohol ",

    },
    {
        id: 6,
        name: "Open Now",

    }

    ]
    return (
        <>
            <div className={`filters ${isSticky ? 'sticky' : ''}`}>


                {
                    filter_item.map((item, id) => (

                        <div key={item.id} className="filter">
                            {item.name !== 'Gold' && item.icon}
                            {item.name === 'Gold' && <img height={20} width={20} src={item.icon} alt="" />}
                            <p>  {item.name}</p>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default FilterDinOut
