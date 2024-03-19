import React from 'react'
import Header from '@/components/header'
import DemoCarousel from '@/components/carousel'
import Social from '@/components/social'
import Footer from '@/components/footer'


const Homepage = () => {
  return (
    <div className="flex flex-col w-auto h-[100vh] px-6">
      <div>
        <Header />
      </div>
      <div className="mb-24">
        <DemoCarousel/>
      </div>
      <div>
        <Social />
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default Homepage;