import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TechStackBar from "../components/tech-stack-section";
import Footer from "../components/footer";
import I_SiteMetadata from "../types/site-metadate.interface";
import SEO from "../components/seo";
import { ContentfulBlogPost } from "../types/all-contentful-blogs";
import ContentfulExperience, { ContentfulPersonalInfo } from "../types/all-contentful-experience";
import ExperienceSection from "../components/experience-section";
import SkillsSection from "../components/skills-section";
import PersonalSection from "../components/personal-section";
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
  allContentfulPersonal {
    nodes {
      story {
        story
      }
      webDesign
      frontEnd
      backEnd
      softSkills
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
  allContentfulPersonal: {
    nodes: ContentfulPersonalInfo[]
  }
}

const IndexPage: React.FC<PageProps<I_PageProps>> = (props) => {
  const { nodes: blogs } = props.data.allContentfulBlog;
  const { nodes: resumeNodes } = props.data.allContentfulExperience;
  const { webDesign, frontEnd, backEnd, softSkills, story: { story } } = props.data.allContentfulPersonal.nodes[0];
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
      <SkillsSection webDesignTitle="Web Design" webDesignDuties={webDesign} frontEndTitle="Front End" frontEndDuties={frontEnd} backEndTitle="Back End" backEndDuties={backEnd} softSkillsTitle="Soft Skills" softSkillsDuties={softSkills} />
      <PersonalSection title="My Story" story={story} />
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