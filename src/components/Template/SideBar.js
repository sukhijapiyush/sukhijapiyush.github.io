import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Piyush&nbsp;Sukhija</h2>
        <p><a href="mailto:piyushsukhija01@gmail.com">piyushsukhija01@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Piyush. I am a dedicated Data Scientist with over five years of experience
        turning complex data into practical solutions. Currently leading as a Lead Data Scientist,
        I focus on creating innovative tools like GenAI and NLP-driven systems to streamline
        processes and support better decision-making. My work has ranged from automating HR audits
        to developing predictive models and enhancing information retrieval systems. With a strong
        foundation in machine learning and a hands-on approach to problem-solving, I enjoy
        collaborating with teams to deliver impactful, scalable solutions. I&apos;m passionate about
        leveraging data to drive meaningful change and helping organizations work smarter.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Piyush&apos;Sukhija</p>
    </section>
  </section>
);

export default SideBar;
