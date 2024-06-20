import React, { useEffect, useState } from 'react'
import './Taboption.css'
const TabOption = ({ activeTab, setActiveTab }) => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Adjust this value according to your header height
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

    const tabs = [
        {
            id: 1,
            name: "Delivery",
            active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            inActive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            active_bg: "#FCEEC0",
            inActive_bg: "#F8F8F8"
        },
        {
            id: 2,
            name: "Dining Out",
            active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            inActive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
            active_bg: "#E5F3F3",
            inActive_bg: "#F8F8F8",
        },
        {
            id: 4,
            name: "Nightlife",
            active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            inActive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
            active_bg: "#E5F3F3",
            inActive_bg: "#F8F8F8",
        },

    ]

    const delivery_img_path = "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png";
    const dining_img_path = "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png";
    return (
        <>
            <div>


                <div className={`tabOptions ${isSticky ? 'sticky' : ''}`}>

                    {
                        tabs.map((item, id) => {
                            return (
                                <div onClick={() => setActiveTab(item.name)} className={item.name === activeTab ? "active_tab tab_item" : "non_active_tab tab_item"} key={id}>
                                    <div className="imgsec" style={{ background: `${item.name === activeTab ? item.active_bg : item.inActive_bg}` }}>
                                        <img src={activeTab === item.name ? item.active_img : item.inActive_img} alt="" />
                                    </div>
                                    <h3>{item.name}</h3>




                                </div>
                            )
                        })
                    }




                    {/* <h1 onClick={() => setActiveTab("Deliver")}>Deliver</h1>
                <h1 onClick={() => setActiveTab("Dining Out")}>Dining out</h1> */}
                </div>
                {/* <p className='line' style={{ borderBottom: '1px solid red' }}></p> */}
            </div>
        </>
    )
}

export default TabOption
