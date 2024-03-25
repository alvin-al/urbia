import React from 'react'
import Header from '@/components/header'
import DemoCarousel from '@/components/carousel'
import Social from '@/components/social'
import Footer from '@/components/footer'
import * as styles from '@/components/styles'


const Homepage = () => {
  return (
    <div className={styles.pageSize}>
      <div>
        <div>
          <Header title='Home'/>
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