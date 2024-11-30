import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Publication = ({
  data: {
    name, publisher, description,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4>{name}</h4>
      <p className="daterange">{publisher}</p>
    </header>
    {description ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {description}
      </Markdown>
    ) : null}
    <ul className="points" />
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
