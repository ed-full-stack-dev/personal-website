import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigation />
    <h1>Home</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
