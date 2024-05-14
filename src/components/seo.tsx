import React from 'react'
import I_SEO from '../types/seo.interface';
function SEO({ description, title, url, keywords, author,imageCard }: I_SEO) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(',')} />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageCard} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@e_rojas_dev" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageCard} />
        </>
    )
}

export default SEO
