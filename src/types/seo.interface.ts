export default interface I_SEO {
    description: string;
    title: string;
    url: string;
    image: string;
    keywords: string[];
    author: string;
    pathname: string;
    children?: React.ReactNode;
    twitterUsername: string;
}