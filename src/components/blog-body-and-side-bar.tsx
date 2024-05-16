import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from '../utils/rich-text-options';
import SideBarBlog from './side-bar';

function BlogBodyAndSidebar({ raw }: { raw: string }) {
    return (
        <section className="blog-article-wrapper">
            <article className="blog-article">
                {raw &&
                    documentToReactComponents(JSON.parse(raw), RICHTEXT_OPTIONS)}
            </article>
            <SideBarBlog />
        </section>
    )
}

export default BlogBodyAndSidebar
