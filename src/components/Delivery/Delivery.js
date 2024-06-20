import React from 'react'
import Filter from '../Filters/FilterDelivery'
import './Delivery.css'
import '../common/ColorAndStyle.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstLook from '../FirstLook/FirstLook';
import BrandList from '../BrandList/BrandList';
import ExploreSection from '../ExploreSection/ExploreSection';
import { restoAPI } from '../data/restoAPI';
import FilterDelivery from '../Filters/FilterDelivery';

const Delivery = () => {
    const restoList = restoAPI;
    return (
        <div>
            <FilterDelivery />
            <FirstLook />
            <BrandList />
            <ExploreSection title={"Delivery Restaurants in Dehradun"} list={restoList} />
        </div>
    )
}

export default Delivery
