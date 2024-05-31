import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TechStackBar from "../components/tech-stack-section";
import Footer from "../components/footer";
import I_SiteMetadata from "../types/site-metadate.interface";
import SEO from "../components/seo";
import { ContentfulBlogPost } from "../types/all-contentful-blogs";
import ContentfulExperience from "../types/all-contentful-experience";
import ExperienceSection from "../components/experience-section";

export const query = graphql`
query SiteMetaData {
  site {
    siteMetadata {
      title
      siteUrl
      description
      image
    }
  }
  allContentfulBlog {
    nodes {
      title
      id
      slug
    }
  }
  allContentfulExperience(sort: {startingDate: DESC}) {
    nodes {
      jobTitle
      company
      duties
      startingDate
      endingDate
      id
    }
  }
}
`;
interface I_PageProps {
  allContentfulBlog: {
    nodes: ContentfulBlogPost[]
  }
  site: {
    siteMetadata: I_SiteMetadata
  }
  allContentfulExperience: {
    nodes: ContentfulExperience[]
  }
}

const IndexPage: React.FC<PageProps<I_PageProps>> = (props) => {
  const { nodes: blogs } = props.data.allContentfulBlog;
  const { nodes: resumeNodes } = props.data.allContentfulExperience;
  const [expSelected, setExpSelected] = React.useState(resumeNodes[0]);
  function handleExpSelection(id: string) {
    const selectedExp = resumeNodes.find(exp => exp.id === id);
    if (!selectedExp) return;
    setExpSelected(selectedExp);
  }
  function isSelected(id: string) {
    return expSelected?.id === id;
  }
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ExperienceSection resumeNodes={resumeNodes} handleExpSelection={handleExpSelection} expSelected={expSelected} isSelected={isSelected} />
      <TechStackBar />
      <Footer blogs={blogs} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC<I_SiteMetadata> = (props) => {
  const { image, description, siteUrl, title, twitterUsername } = props.data.site.siteMetadata;
  const { pathname } = props.location;
  return (
    <SEO twitterUsername={twitterUsername} pathname={pathname} author="Edgar Rojas" keywords={['Web Development', 'React']} image={image} description={description} url={siteUrl} title={`${title} | Home`} />
  )
}

function TitleDate({ title, date, company }: { title: string, date: string, company: string }) {
  return (
    <div>
      <h1 className="position text-xl font-bold">{title}<span className=" text-purple-500"> @{company}</span></h1>
      <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
    </div>
  )
}
function Duties({ duties }: { duties: string[] }) {
  return (
    <ul className="duties space-y-4 text-lg text-gray-500 font-medium ml-3">
      {
        duties.map((duty) => <li className="flex items-baseline gap-x-2">{duty}</li>)
      }
    </ul>
  )
}