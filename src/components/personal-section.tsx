import React from 'react';

export default function PersonalSection({title, story}: {title:string, story: string}) {
    return (
        <section className="personal-section">
        <div className="section-wrapper">
          <h1 className="section-header">{title}</h1>
          <div className="gap-4 flex-grow grid grid-cols-1 px-4 md:px-32  pb-20">

            <p className="text-lg text-gray-500 font-medium mt-4">{story}</p>
          </div>
        </div>
      </section>
    )
}