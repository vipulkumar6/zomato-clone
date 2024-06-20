import React, { useState } from 'react'
import TabOption from '../components/common/TabOptions/TabOption'
import Delivery from '../components/Delivery/Delivery'
import DiningOut from '../components/DiningOut/DiningOut'
import BreadCrumb from '../components/common/BreadCrumb'
import NightLife from '../components/NightLife/NightLife'

const OptionOfActiveTab = (activeTab) => {
    if (activeTab === "Delivery") {
        return <Delivery />
    }
    else if (activeTab === "Dining Out") {
        return <DiningOut />
    }
    else if (activeTab === "Nightlife") {
        return <NightLife />
    }

}
const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <div>
            <BreadCrumb />

            <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                OptionOfActiveTab(activeTab)
            }
            {/* <FAQs /> */}

        </div>
    )
}

export default Home
