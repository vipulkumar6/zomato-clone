import React from 'react'
import ExploreCard from './ExploreCard'
import './ExploreCard.css'
const ExploreSection = ({ title, list }) => {



    return (
        <div className='maxwidth'>

            <div>
                <h2 className='common_title'>{title}
                </h2>

                <div className='explore-grid'>
                    {
                        list.map((resto, id) => {
                            return (
                                <ExploreCard key={id} resto={resto} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ExploreSection
