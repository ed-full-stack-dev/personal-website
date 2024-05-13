import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TechStackBar from "../components/tech-stack-section";
import Footer from "../components/footer";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TechStackBar />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
