import React from 'react'
import { ContentfulBlogPost } from '../types/all-contentful-blogs';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlogHeader({ blog }: { blog: ContentfulBlogPost }) {
    const {
        title,
        date,
        summary,
        blogImage,
        author,
    } = blog;
    return (
        <header className="blog-header">
            <div className="details">
                <h1 className="title">{title}</h1>
                <p className="author-info">
                    By: {author} | {new Date(date).toDateString()}
                </p>
                <p className="summary">{summary}</p>
            </div>
            <figure className="figure">
                <GatsbyImage
                    image={blogImage.gatsbyImageData}
                    alt={title}
                    className="img-max-set"
                />
            </figure>
        </header>
    )
}