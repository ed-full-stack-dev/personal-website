import React from 'react'
import Navigation from '../components/navigation'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'
import { graphql, PageProps } from 'gatsby';
import { ContentfulBlogPost } from '../types/all-contentful-blogs';
import I_SiteMetadata from '../types/site-metadate.interface';
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
function Contact(props: PageProps<I_PageProps>) {
  const { nodes: blogs } = props.data.allContentfulBlog;
  return (
    <div>
      <Navigation />
      <ContactSection />
      <Footer blogs={blogs} />
    </div>
  )
}

export default Contact
