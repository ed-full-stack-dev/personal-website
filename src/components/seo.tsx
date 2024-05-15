import React from 'react'
import I_SEO from '../types/seo.interface';
function SEO({ description, title, url, image, keywords, author, pathname, children, twitterUsername }: I_SEO) {

    const seo = {
        title: title,
        description: description,
        image: `${url}${image}`,
        url: `${url}${pathname || ``}`,
        twitterUsername,
    }
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={description} />
            <meta name="keywords" content={keywords.join(`, `)} />
            <meta name="robots" content="index, follow" />
            {children}
        </>
    )
}

export default SEO
