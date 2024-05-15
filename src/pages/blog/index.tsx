import React from 'react'
import Navigation from '../../components/navigation'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { BsPuzzle } from "react-icons/bs";
import BlogCard from '../../components/blog-card';
import { graphql, HeadFC } from 'gatsby';
import { ContentfulBlogPost } from '../../types/all-contentful-blogs';
import Footer from '../../components/footer';
import I_SiteMetadata from '../../types/site-metadate.interface';
import SEO from '../../components/seo';
import BlogSection from '../../components/blog-section';
interface BlogTemplateProps {
  site: I_SiteMetadata;
  data: {
    allContentfulBlog: {nodes: ContentfulBlogPost[]} ;
  };
}
function Blogs({ data }: BlogTemplateProps) {
  const blogs = data.allContentfulBlog.nodes;
  return (
    <div>
      <Navigation />
      <BlogSection blogs={blogs} />
      <Footer blogs={blogs} />
    </div>
  )
}

export const Head: HeadFC<I_SiteMetadata> = (props) => {
  const { blogCardImage, description, siteUrl, title, twitterUsername } = props.data.site.siteMetadata;
  const { pathname } = props.location;
  return (
    <SEO twitterUsername={twitterUsername} pathname={pathname} author="Edgar Rojas" keywords={['Web Development', 'React']} image={blogCardImage} description={description} url={siteUrl} title={`${title} | Blog`} />
  )
}

export default Blogs;

export const query = graphql`
query AllBlogs {
  site{
    siteMetadata{
      title
      siteUrl
      description
      blogCardImage
      twitterUsername
    }
  }
  allContentfulBlog(sort: {date: DESC}) {
    nodes {
      author
      date
      id
      slug
      title
      summary
      blogImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      authorImage {
        gatsbyImageData(jpegProgressive: true)
      }
    }
  }
}
`;
