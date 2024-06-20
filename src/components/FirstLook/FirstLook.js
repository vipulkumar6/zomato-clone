import React from 'react'
import '../common/ColorAndStyle.css'
import './FirstLook.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', }}
            onClick={onClick}
        />
    );
}
const FirstLook = () => {

    const settings = {

        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const firstDb = [
        {
            id: 1,
            name: "Pizza",
            img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
        },
        {
            id: 2,
            name: "Burger",
            img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        },
        {
            id: 7,
            name: "Rolls",
            img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
        },
        {
            id: 3,
            name: "Biryani",
            img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
        },
        {
            id: 6,
            name: "Thali",
            img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
        },

        {
            id: 5,
            name: "Chicker",
            img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
        },
        {
            id: 5,
            name: "Fried Rice",
            img: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
        },
        {
            id: 5,
            name: "North Indian",
            img: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
        },


        {
            id: 2,
            name: "Cake",
            img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
        },

        {
            id: 2,
            name: "Momos",
            img: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
        },



    ]
    return (
        <div className='first_look_Container'>
            <div className='ins_class maxwidth'>
                <h2 className='common_title'>Inspiration for your first order</h2>
                <div className='insp_items'>

                    <Slider {...settings}>
                        {
                            firstDb.map((item, id) =>
                                <div className='isnp_item' key={id}>
                                    <img src={item.img} alt="" />
                                    <h3>{item.name}</h3>
                                </div>
                            )
                        }

                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default FirstLook
