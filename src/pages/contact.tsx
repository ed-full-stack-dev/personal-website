import React from 'react'
import Navigation from '../components/navigation'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'
import { graphql, HeadFC, PageProps } from 'gatsby';
import { ContentfulBlogPost } from '../types/all-contentful-blogs';
import I_SiteMetadata from '../types/site-metadate.interface';
import SEO from '../components/seo';
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


export const Head: HeadFC<I_SiteMetadata> = (props) => {
  const { image, description, siteUrl, title, twitterUsername } = props.data.site.siteMetadata;
  const { pathname } = props.location;
  return (
    <SEO twitterUsername={twitterUsername} pathname={pathname} author="Edgar Rojas" keywords={['contact', 'web developer']} image={image} description={description} url={siteUrl} title={`${title} | Contact`} />
  )
}
