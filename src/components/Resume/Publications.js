import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publication/Publication';

const Publications = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publication</h3>
    </div>
    {data.map((publications) => (
      <Publication
        data={publications}
        key={`${publications.name}`}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    publisher: PropTypes.string,
    description: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
