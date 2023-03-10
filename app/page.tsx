import { Fragment } from 'react'
import AboutSection from './AboutSection'
import Conferencing from './Conferencing'
import Hero from './Hero'
import Restaurant from './Restaurant'
import RoomsSlider from './RoomsSlider'

export default function Home() {
  return (
   <Fragment>
    <Hero />
    <AboutSection />
    <Conferencing />
    <RoomsSlider />
    <Restaurant />
   </Fragment>
  )
}
