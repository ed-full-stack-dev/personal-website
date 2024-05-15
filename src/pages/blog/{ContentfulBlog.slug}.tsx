import { graphql, PageProps, HeadProps, HeadFC } from 'gatsby';
import React from 'react'
import Navigation from '../../components/navigation';
import { ContentfulBlogPost } from '../../types/all-contentful-blogs';
import BlogHeader from '../../components/blog-header';
import BlogBodyAndSidebar from '../../components/blog-body-and-side-bar';
import FooterBlog from '../../components/blog-footer';
import Footer from '../../components/footer';
import SEO from '../../components/seo';
interface BlogProps {
    contentfulBlog: ContentfulBlogPost;
    allContentfulBlog: { nodes: ContentfulBlogPost[] };
}
function Blog(props: PageProps<BlogProps>) {
    const { data } = props;
    const { body: { raw } } = props.data.contentfulBlog;
    return (
        <div>
            <Navigation />
            <div className='individual-blog'>
                <BlogHeader blog={data.contentfulBlog} />
                <BlogBodyAndSidebar raw={raw} />
                <FooterBlog currentBlog={data.contentfulBlog} allBlogs={data.allContentfulBlog.nodes} />
            </div>
            <Footer blogs={data.allContentfulBlog.nodes} />
        </div>
    )
}
interface Head_Props extends HeadProps {
    contentfulBlog: ContentfulBlogPost;
}
export const Head: HeadFC<Head_Props> = (props) => {
    console.log('Head Blog', props.data.contentfulBlog);
    const { pathname } = props.location;
    const { title, summary } = props.data.contentfulBlog
    return (
        <SEO twitterUsername='@e_rojas_dev' pathname={pathname} author="Edgar Rojas" keywords={['Blog', 'React']} description={summary} title={`${title} | Blog`} url={''} image={''} />
    )
}

export const query = graphql`
query BlogQuery($slug: String) {
  allContentfulBlog(sort: {date: DESC}) {
    nodes {
      id
      title
      slug
      summary
      author
      date
      tags
      blogImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      authorImage {
        gatsbyImageData(jpegProgressive: true)
      }
    }
  }
  contentfulBlog(slug: {eq: $slug}) {
    slug
    title
    date
    summary
    id
    blogImage {
      gatsbyImageData
    }
    body {
      raw
    }
  }
}
`;

export default Blog
