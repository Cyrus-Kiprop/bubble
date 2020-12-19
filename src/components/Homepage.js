import React from "react"
import { Link } from "gatsby"

import HeroSection from "../components/HeroSection"
import FunFacts from "./fun-facts"
import Testimonials from "./Testimonials"

const Homepage = ({ children }) => (
  <main>
    <HeroSection />
    <Testimonials />
    <FunFacts />
  </main>
)

export default Homepage
