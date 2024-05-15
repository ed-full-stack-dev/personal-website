import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
export default function BlogCard ({ gatsbyImg, title,author = 'unknown', date, description, image, quote, className, quoteText, slug, authorImage }: { title?: string, date?: string, description?: string, image?: string, quote?: boolean, className?: string, quoteText?: string, author?: string , slug?: string, gatsbyImg?: IGatsbyImageData, authorImage?: IGatsbyImageData}) {
    if (quote) {
      return (
        <div className={`card flex flex-col justify-between ${className}`}>
          <div className='h-full flex items-center'>
          <p className=' font-thin text-4xl text-center'>{`"${quoteText}"`}</p>
          </div>
          <span className=' text-right'>{author}</span>
        </div>
      )
    }
    const _date = date && new Date(date).toLocaleDateString('default',{month:'long', day:'numeric', year: 'numeric'}) || 'unknown'
  return (
      <Link to={`/blog/${slug}`} className='card bg-creme  '>
        {authorImage && <GatsbyImage image={authorImage} alt={author} className="author-image" />}
        {image && <img width={100} src={image} alt={title} />}
        {gatsbyImg && <GatsbyImage image={gatsbyImg} alt={author} className="gatsbyImg" />}
        <span>{_date}</span>
        <h2>{title}</h2>
        <p>{`${description?.slice(0,150)}...`}</p>
      </Link>
    )
  }