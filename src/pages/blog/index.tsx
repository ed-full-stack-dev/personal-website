import React from 'react'
import Navigation from '../../components/navigation'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { BsPuzzle } from "react-icons/bs";
import BlogCard from '../../components/blog-card';
import { graphql } from 'gatsby';
import { ContentfulBlogPost } from '../../types/all-contentful-blogs';
import Footer from '../../components/footer';
interface BlogTemplateProps {
  data: {
    allContentfulBlog: {nodes: ContentfulBlogPost[]} ;
  };
}
function Blog({ data }: BlogTemplateProps) {
  const blogs = data.allContentfulBlog.nodes;
  return (
    <div>
      <Navigation />
      <div className="hero">
        <section className="wrapper">
          <div className="content">
            <div className="flex-center">
              <h1 className="title">Code & Creativity: My Journey in Web Development</h1>
            </div>
            <p className="description">Welcome to My Journey in Web Development, a space where I delve into the intertwined worlds of programming and innovation. As a seasoned web developer, I've navigated through complex codebases and crafted unique digital experiences that bridge functionality with artistry. Here, I share insights from my professional voyage—highlighting projects that challenged me, technologies that excited me, and creative solutions that made a difference. Whether you're a fellow developer, a curious learner, or somewhere in between, I hope my stories inspire you and ignite your passion for the ever-evolving landscape of web development.</p>
            <div className="links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ed-full-stack-dev" className="btn">
                <FaGithub className="icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgar-rojas-developer/" className="btn">
                <FaLinkedinIn className="icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC28Ql-WMce8icYWDj-21gwA" className="btn">
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="puzzle-pieces">
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
            <BsPuzzle className='puzzle' />
          </div>
        </section>
        <hr className='mt-6' />
        <section className="blog ">
        <BlogCard author='Steve Jobs' quote={true} quoteText='Innovation distinguishes between a leader and a follower.' className='bg-onyx' />
        {
          blogs && blogs.map((blog:ContentfulBlogPost) => (
            <BlogCard title={blog.title} date={blog.date} description={blog.summary} gatsbyImg={blog.blogImage.gatsbyImageData} slug={blog.slug} key={blog.id} />
          ))
        }
        </section>
      </div>
      <Footer blogs={blogs} />
    </div>
  )
}

export default Blog

export const query = graphql`
query AllBlogs {
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
