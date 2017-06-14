import React from 'react';
import './Icon.scss';

const Icon = ({category, name, suffix, width, height}) => {
  width = width || 'auto';
  height = height || '100%';
  const filename = `${category}_${name}_${suffix}.png`;
  return (
    <div className="icon" style={{width: width, height: height}}>
      <img src={`static/img/${filename}`}/>
    </div>
  );
};

Icon.propTypes = {
  category: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default Icon;
