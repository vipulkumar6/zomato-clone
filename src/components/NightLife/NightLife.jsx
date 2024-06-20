import React from 'react'
import ExploreSection from '../ExploreSection/ExploreSection'
import { nightLifeAPI } from '../data/nightLifeAPI';
import FilterNighlife from '../Filters/FilterNightlife';
const NightLife = () => {
    const restoList = nightLifeAPI;
    return (
        <div >
            <FilterNighlife />d
            <div className='maxwidth'>
                <ExploreSection title={"Nightlife Restaurants in Dehradun"} list={restoList} />
            </div>

        </div>
    )
}

export default NightLife
