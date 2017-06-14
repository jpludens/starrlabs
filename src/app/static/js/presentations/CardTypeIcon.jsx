import React from 'react';

const CardTypeIcon = ({cardType, width, height}) => {
  width = width || 'auto';
  height = height || '100%';
  return (
    <div style={{width: width, height: height, display: 'inline'}}>
      <img
        src={`static/img/cardType_${cardType.toLowerCase()}.png`}
        style={{maxWidth: '100%', maxHeight: '100%', verticalAlign: 'middle'}}/>
    </div>
  );
};

CardTypeIcon.propTypes = {
  cardType: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default CardTypeIcon;
