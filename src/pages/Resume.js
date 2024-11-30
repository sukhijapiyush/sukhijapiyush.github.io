import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Recommendations from '../components/Resume/References';
import Publications from '../components/Resume/Publications';
import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
import publications from '../data/resume/publications';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  Education: () => <Education data={degrees} />,
  Certifications: () => <Courses data={courses} />,
  Publications: () => <Publications data={publications} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Recommendations: () => <Recommendations />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Piyush Sukhija's Resume. Piyush Sukhija's Curriculum Vitae. Piyush Sukhija's CV."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
