import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
