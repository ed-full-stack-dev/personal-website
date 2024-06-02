import React from 'react';
import ContentfulExperience from '../types/all-contentful-experience';

interface PageProps {
    handleExpSelection: (id: string) => void;
    resumeNodes: ContentfulExperience[];
    expSelected: ContentfulExperience;
    isSelected: (id: string) => boolean;

}
export default function ExperienceSection({ resumeNodes, handleExpSelection, expSelected, isSelected }: PageProps) {
    return (
        <section className="exp-section ">
            <div className="exp-section-wrapper">
                <h1 className="exp-section-header">Experience.</h1>
                <div className="exp-section-content">
                    <div className="exp-section-list">
                        <ul className="  ml-4 text-xl space-y-4 font-medium text-gray-700">
                            {
                                resumeNodes.map((exp) => <li
                                    className={`exp-section-list-item ${isSelected(exp.id) ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'}`}
                                    onClick={() => handleExpSelection(exp.id)} key={exp.id}>{exp.company}</li>)
                            }
                        </ul>
                    </div>
                    <div className="exp-section-details">
                        {
                            expSelected && (
                                <div className="space-y-4">
                                    <TitleDate title={expSelected.jobTitle} date={expSelected.startingDate} company={expSelected.company} />
                                    <Duties duties={expSelected.duties} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

interface TitleDateProps {
    title: string;
    date?: string;
    company?: string;
}
export function TitleDate({ title, date, company }: TitleDateProps) {
    return (
        <div>
            <h1 className="title">{title}
                {
                    company && <span className="title-date-company">{` @${company}`}</span>
                }
            </h1>
            {
                date && <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
            }
        </div>
    )
}
export function Duties({ duties, extraClasses }: { duties: string[], extraClasses?: string}) {
    return (
        <ul className={`duties ${extraClasses}`}>
            {
                duties.map((duty) => <li className="duties-item">{duty}</li>)
            }
        </ul>
    )
}