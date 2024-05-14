import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ContentfulBlogPost {
    id: string;
    title: string;
    slug: string;
    summary: string;
    author: string;
    date: string;
    tags: string[];
    body: {
        raw: string;
    };
    blogImage: {
        gatsbyImageData: IGatsbyImageData;
    };
    authorImage: {
        gatsbyImageData: IGatsbyImageData;
    };
}

export interface AllContentfulBlogs {
    allContentfulBlog: {
        nodes: ContentfulBlogPost[];
    };
}