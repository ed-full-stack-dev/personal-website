import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ContentfulBlogPost } from "../types/all-contentful-blogs";
export default function FooterBlog({ currentBlog,allBlogs }: { currentBlog: ContentfulBlogPost, allBlogs: ContentfulBlogPost[] }) {

    const blogs = allBlogs;
    const { nextBlog, previousBlog } = PrevNextBlog({ blogs, currentBlog });
    return (
        <footer className="blog-footer">
            <div className="grid-layout">
                {
                    previousBlog ? (
                        <Link to={`/blog/${previousBlog.slug}`} className="card">
                            <div className="card-image">
                                <GatsbyImage
                                    image={previousBlog.blogImage.gatsbyImageData}
                                    alt={previousBlog.title}
                                    className="card-image-size"
                                />
                            </div>
                            <span className="card-title">{previousBlog.title}</span>
                        </Link>
                    ) : (<div className="card-disabled"></div>)
                }
                {
                    nextBlog ? (
                        <Link to={`/blog/${nextBlog.slug}`} className="card-alt">
                            <span className="card-alt-title">{nextBlog.title}</span>
                            <div className="card-alt-image">
                                <GatsbyImage
                                    image={nextBlog.blogImage.gatsbyImageData}
                                    alt={nextBlog.title}
                                    className="card-image-size"
                                />
                            </div>
                        </Link>
                    ) : (<div className="card-alt-disabled"></div>)
                }
            </div>
        </footer>
    );
}


function PrevNextBlog({ blogs, currentBlog }: { blogs: ContentfulBlogPost[], currentBlog: ContentfulBlogPost }) {
    const currentBlogIndex = blogs.findIndex((blog) => blog.id === currentBlog.id);
    const nextBlogIndex = currentBlogIndex + 1;
    const previousBlogIndex = currentBlogIndex - 1;
    const nextBlog = blogs[nextBlogIndex];
    const previousBlog = blogs[previousBlogIndex];
    return {
        nextBlog,
        previousBlog
    }
}