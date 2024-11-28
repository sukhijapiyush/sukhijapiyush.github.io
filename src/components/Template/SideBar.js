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
        <h2>Piyush&apos;Sukhija</h2>
        <p><a href="mailto:sukhijapawan@gmail.com">sukhijapawan@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Piyush. I am an Data Scientist with 5+ years of relevant experience in
        Python programming, Machine learning, NLP, Text Mining, and Generative AI.
        Experienced in data pre-processing, model training, and evaluation, transfer learnings,
        sentiment analysis, topic modeling, regression, and classification using diversified data
        science techniques and approaches.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Piyush&apos;Sukhija <Link to="/">piyushsukhija.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
