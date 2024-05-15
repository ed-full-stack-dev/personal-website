import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from '../utils/rich-text-options';
import SideBarBlog from './side-bar';

function BlogBodyAndSidebar({ raw }: { raw: string }) {
    return (
        <section className=" grid grid-cols-1 md:grid-cols-5">
            <article className="blog-section p-2 col-span-4 sm:border-none md:border-r-2 md:border-l-2 md:border-gray-300">
                {raw &&
                    documentToReactComponents(JSON.parse(raw), RICHTEXT_OPTIONS)}
            </article>
            <SideBarBlog />
        </section>
    )
}

export default BlogBodyAndSidebar
