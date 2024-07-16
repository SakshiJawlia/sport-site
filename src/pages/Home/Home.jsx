import React from 'react'
import Hero from '../../components/HomePage/Hero'
import Cricket from '../../components/HomePage/Cricket'
import Badminton from '../../components/HomePage/Badminton'
import Swimming from '../../components/HomePage/Swimming'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cricket/>
      <Badminton/>
      <Swimming/>
    </div>
  )
}

export default Home
