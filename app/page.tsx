import Image from 'next/image'
import { Fragment } from 'react'
import AboutSection from './AboutSection'
import Conferencing from './Conferencing'
import Hero from './Hero'
import RoomsSlider from './RoomsSlider'

export default function Home() {
  return (
   <Fragment>
    <Hero />
    <AboutSection />
    <Conferencing />
    <RoomsSlider />
   </Fragment>
  )
}
