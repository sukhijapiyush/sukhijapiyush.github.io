import React from 'react';
import { Link } from 'react-router-dom';

const Recommendations = () => (
  <div className="references">
    <div className="link-to" id="recommendations" />
    <div className="title">
      <h3>Recommendations</h3>
      <p>Recommendations are present on  my Linkedin Profile: <a href="https://www.linkedin.com/in/piyushsukhija/details/recommendations/">Recommendations</a></p>
      <h3>References</h3>
      <Link to="/contact">
        <p><strong>References are available upon request</strong></p>
      </Link>
    </div>
  </div>
);

export default Recommendations;
