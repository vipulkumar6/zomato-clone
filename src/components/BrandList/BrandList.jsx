import React from 'react'
import '../common/ColorAndStyle.css'
import './BrandList.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', }}
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

    const brandlistDB = [
        {
            id: 1,
            name: "Walk In Woods",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/ba093e1e7fef9219dfc01328c8e9175c_1611261179.png?output-format=webp",
            time: "30 min"
        },
        {
            id: 2,
            name: "Burger King",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187839.png?output-format=webp",
            time: "24 min"
        },
        {
            id: 3,
            name: "Doon Tripple Nine",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/29a816ee9a7f64a2d0fe114a23dca9b5_1646222830.png?output-format=webp",
            time: "33 min"
        },
        {
            id: 4,
            name: "Domino's Pizza",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807149.png?output-format=webp",
            time: "36 min"
        },
        {
            id: 5,
            name: "Doon Darbar",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/c1bb305f14c99c2973d79c7f8f2837cc_1611303682.png?output-format=webp",
            time: "24 min"
        },
        {
            id: 6,
            name: "KFC",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589431950.png?output-format=webp",
            time: "22 min"
        },
        {
            id: 7,
            name: "Anandam",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/32b5a0a129fd8aab95afcf3c791773b8_1611304110.png?output-format=webp",
            time: "20 min"
        },
        {
            id: 7,
            name: "Subway",
            img: "https://www.logodesignlove.com/images/monograms/subway-monogram-01.jpg",
            time: "16 min"
        },
        {
            id: 7,
            name: "Bowl Bachpan",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/18678d03f4ccbc99f42b8ce04a8aad69_1665127297.png",
            time: "16 min"
        },
        {
            id: 7,
            name: "Rollapppa",
            img: "https://b.zmtcdn.com/data/brand_creatives/logos/a63a3ce9568c6a252fb23015584b0049_1645544723.png",
            time: "16 min"
        },

    ]
    return (
        <div>
            <div className='ins_class top_brand maxwidth'>
                <h2 className='common_title'>Top brands for you
                </h2>
                <div className='insp_items'>

                    <Slider {...settings}>
                        {
                            brandlistDB.map((item, id) =>
                                <div className='isnp_item' key={id}>
                                    <div className='imgSecion'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>{item.time}</p>
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
