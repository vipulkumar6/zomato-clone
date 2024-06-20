import React from 'react'
import '../common/ColorAndStyle.css'
import Slider from "react-slick";
import './DinCollection.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretRight } from "react-icons/fa";


const DinCollection = () => {

    const settings = {

        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    const collectionDB = [
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/cb328e91b412eefd541fbf53ef802662_1689241258.png"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },
        {
            title: "20 Great Cafes",
            place: "43",
            img: "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1682668059.jpg?output-format=webp"
        },

    ]
    return (
        <div className='coll-container' style={{ background: '#F8F8F8' }}>
            <div className='Collection_wrap maxwidth'>
                <h2 className='common_title'>Collections</h2>
                <div className='texts'>
                    <p className='p'>Explore curated lists of top restaurants, cafes, pubs, and bars in Dehradun, based on trends</p>
                    <div className='all_coll'>
                        <p>All collections in dehradun </p>

                        <FaCaretRight />
                    </div>
                </div>
                <div className='Collection'>

                    <Slider {...settings}>
                        {
                            collectionDB.map((item, id) =>
                                <div className='collection_item' key={id}>
                                    <div className='collection_box'
                                        style={{
                                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50% , rgba(0, 0, 0, 0.05) 85%), 
                                            url(${item.img}) center/cover no-repeat`, height: '100%', position: 'relative'
                                        }}>
                                        <div className='data'>

                                            <h3>{item.title}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p>{item.place} Places </p>
                                                <FaCaretRight />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            )
                        }

                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default DinCollection





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



