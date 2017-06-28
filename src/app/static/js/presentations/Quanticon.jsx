import React from 'react';
import PropTypes from 'prop-types';

// TODO add a text color option
const Quanticon = ({value, category, name, size}) => {
  const filename = `${category}_${name}_${size.toString()}.png`;
  return (
    <div className="quanticon">
      <img src={`static/img/${filename}`}/>
      <p>{value}</p>
    </div>
  );
};

Quanticon.propTypes = {
  value: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Quanticon;
