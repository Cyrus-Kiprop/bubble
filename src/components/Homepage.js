import React from "react"
import { Link } from "gatsby"

import HeroSection from "../components/HeroSection"
import FunFacts from "./fun-facts"
import Testimonials from "./Testimonials"
import Footer from "./footer";

const Homepage = ({ children }) => (
  <main>
    <HeroSection />
    <Testimonials />
    <FunFacts />
    <Footer/>
  </main>
)

export default Homepage
