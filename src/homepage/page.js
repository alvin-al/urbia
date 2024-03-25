import React from 'react'
import Header from '@/components/header'
import DemoCarousel from '@/components/carousel'
import Social from '@/components/social'
import Footer from '@/components/footer'
import * as styles from '@/components/styles'


const Homepage = () => {
  return (
    <div className="flex flex-col w-auto h-[95vh] px-6">
      <div>
        <div>
          <Header />
        </div>
        <div>
          <p className={`${styles.head} text-right`}>  
            URBIA SPATIAL MANIFESTO
          </p>
        </div>
        <div>
          <DemoCarousel/>
        </div>
      </div>
        <div>
          <Social />
        </div>
        <div  className="absolute bottom-0">
          <Footer/>
        </div>
    </div>

  )
}

export default Homepage;