import { faHome } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import HeroSection from "../components/HeroSection"
import Homepage from "../components/Homepage"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function indexPage() {
  return (
    <>
      <SEO title="Home" />
      <Homepage />
    </>
  )
}
