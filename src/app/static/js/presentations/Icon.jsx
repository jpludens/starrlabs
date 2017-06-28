import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({category, name, size, width, height}) => {
  width = width || 'auto';
  height = height || '100%';
  const filename = `${category}_${name}_${size.toString()}.png`;
  return (
    <div className="icon" style={{width: width, height: height}}>
      <img src={`static/img/${filename}`}/>
    </div>
  );
};

Icon.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Icon;
