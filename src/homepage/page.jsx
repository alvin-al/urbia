import React from 'react'
import Header from '@/components/header'
import HomeCarousel from '@/components/carousel'
import Social from '@/components/social'
import Footer from '@/components/footer'
import * as styles from '@/components/styles'



const Homepage = () => {
  return (
    <div className={`${styles.pageSize} h-[100vh]`}>
        <div>
          <Header title='Home'/>
        </div>
        <div className='md:px-12'>
          <div>
            <p className={`${styles.head} text-right`}>  
            URBIA SPATIAL MANIFESTO
            </p>
          </div>
          <div>
            <HomeCarousel/>
          </div>
          <div>
            <Social />
          </div>
        </div>
        <Footer/>
    </div>

  )
}

export default Homepage;