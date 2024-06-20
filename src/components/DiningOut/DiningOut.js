import React from 'react'
import DinCollection from '../DinCollection/DinCollection'
import FilterDinOut from '../Filters/FilterDinOut'
import GetOff50 from '../GetOff50/GetOff50'
import ExploreSection from '../ExploreSection/ExploreSection'
import { diningAPI } from '../data/diningAPI';
// import { restoAPI } from '../data/restoAPI';
const DiningOut = () => {
    const restoList = diningAPI;
    return (
        <div className=''>
            <DinCollection />
            <FilterDinOut />
            <GetOff50 />
            <ExploreSection title={"Trending dining restaurants in Dehradun"} list={restoList} />
        </div>
    )
}

export default DiningOut
