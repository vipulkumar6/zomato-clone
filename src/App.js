import React, { useState } from 'react'
import Home from './Pages/Home'
import Header from './components/common/Header/Header'
import FAQs from './components/common/FAQs/FAQs'
import GoToTopButton from './components/GoOnTop'
import FormBox from './components/form'
import Footer from './components/common/Footer/Footer'


const App = () => {
  return (
    <>
      <div className='zomato_container'>
        <Header />

        <Home />
        {/* <FormBox /> */}
        {/* <GoToTopButton /> */}

        {/* <FAQs /> */}
        <Footer />
      </div>
    </>
  )
}

export default App

