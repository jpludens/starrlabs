import React from 'react';

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
  category: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default Icon;
