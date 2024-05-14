import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TechStackBar from "../components/tech-stack-section";
import Footer from "../components/footer";
import I_SiteMetadata from "../types/site-metadate.interface";
import SEO from "../components/seo";
import { ContentfulBlogPost } from "../types/all-contentful-blogs";
export const query = graphql`
query SiteMetaData {
  site {
    siteMetadata {
      title
      siteUrl
      description
      image
    }
  }
  allContentfulBlog {
    nodes {
      title
      id
      slug
    }
  }
}
`;
interface I_PageProps {
  allContentfulBlog: {
    nodes: ContentfulBlogPost[]
  }
  site: {
    siteMetadata: I_SiteMetadata
  }
}

const IndexPage: React.FC<PageProps<I_PageProps>> = (props) => {
  const { nodes: blogs } = props.data.allContentfulBlog;
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TechStackBar />
      <Footer blogs={blogs} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC<I_SiteMetadata> = (props) => {
  const { image, description, siteUrl, title, twitterUsername } = props.data.site.siteMetadata;
  const { pathname } = props.location;
  return (
    <SEO twitterUsername={twitterUsername} pathname={pathname} author="Edgar Rojas" keywords={['Web Development', 'React']} image={image} description={description} url={siteUrl} title={title} />
  )
}
