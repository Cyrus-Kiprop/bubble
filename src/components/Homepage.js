import React from "react"
import { Link } from "gatsby"

import Services from './services'

import HeroSection from "../components/HeroSection"
import FunFacts from "./fun-facts"
import Testimonials from "./Testimonials"
import Footer from "./footer";
import Contact from "./contacts";

const Homepage = ({ children }) => (
  <main>
    <HeroSection />
    <Services/>
    <Testimonials />
    <FunFacts />
    <Contact/>
    <Footer/>
  </main>
)

export default Homepage
