import React from 'react';
import { Duties, TitleDate } from './experience-section';
interface TitleDateProps {
    webDesignTitle: string;
    webDesignDuties: string[];
    frontEndTitle: string;
    frontEndDuties: string[];
    backEndTitle: string;
    backEndDuties: string[];
    softSkillsTitle: string;
    softSkillsDuties: string[];
}
export default function SkillsSection({ webDesignTitle, webDesignDuties, frontEndTitle, frontEndDuties, backEndTitle, backEndDuties, softSkillsTitle, softSkillsDuties }: TitleDateProps) {
    return (
        <section className="personal-section">
        <div className="section-wrapper">
          <h1 className="section-header">Skills.</h1>
          <div className="gap-4 flex-grow grid grid-cols-1 md:grid-cols-4 px-4">
            <div className="col-span-1">
              <TitleDate title={webDesignTitle} />
              <Duties duties={webDesignDuties} extraClasses="mt-4" />
            </div>
            <div className="col-span-1">
              <TitleDate title={frontEndTitle} />
              <Duties duties={frontEndDuties} extraClasses="mt-4" />
            </div>
            <div className="col-span-1">
              <TitleDate title={backEndTitle} />
              <Duties duties={backEndDuties} extraClasses="mt-4" />
            </div>
            <div className="col-span-1">
              <TitleDate title={softSkillsTitle} />
              <Duties duties={softSkillsDuties} extraClasses="mt-4" />
            </div>
          </div>
        </div>
      </section>
    )
}