import React from 'react';
import FACTIONS from './../enums/factions.js';

const FactionIcon = ({faction, width, height}) => {
  width = width || 'auto';
  height = height || '100%';
  if (faction.toLowerCase() === FACTIONS.UNALIGNED.toLowerCase()) {
    return (
      <div style={{width: width, height: height, display: 'inline'}}>
        <img
          src={`static/img/faction_${FACTIONS.BLOB.toLowerCase()}.png`}
          style={{maxWidth: '100%', maxHeight: '100%', verticalAlign: 'middle', opacity: '0.0'}}/>
      </div>
    );
  }
  return (
    <div style={{width: width, height: height, display: 'inline'}}>
      <img
        src={`static/img/faction_${faction.toLowerCase()}.png`}
        style={{maxWidth: '100%', maxHeight: '100%', verticalAlign: 'middle'}}/>
    </div>
  );
};

FactionIcon.propTypes = {
  faction: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default FactionIcon;
