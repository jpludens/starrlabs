import React from 'react';
import PropTypes from 'prop-types';
import {block} from 'bemjs';
import cssify from './../utils/cssify.js';
import Icon from './Icon.jsx';
import Quanticon from './Quanticon.jsx';

// Load images
import FACTIONS from '../../../../../gen/static/js/faction.js';
import CARD_TYPES from '../../../../../gen/static/js/cardType.js';

for (let faction in FACTIONS) {
  if (Object.prototype.hasOwnProperty.call(FACTIONS, faction)) {
    require(`../../img/faction_${faction.toLowerCase()}_32.png`);
  }
}

for (let cardType in CARD_TYPES) {
  if (Object.prototype.hasOwnProperty.call(CARD_TYPES, cardType)) {
    require(`../../img/cardType_${cardType.toLowerCase()}_32.png`);
  }
}

require('../../img/resource_trade_32.png');
// Done loading images

const CardTile = ({card}) => {
  return (
    <div className={block('card-tile').mod(`faction-${cssify(card.faction)}`)}>
      <Icon category="faction" name={card.faction.toLowerCase()} size={32}/>
      <Icon category="cardType" name={card.cardType.toLowerCase()} size={32}/>
      <span>{card.name}</span>
      <Quanticon value={card.cost || 0} category="resource" name="trade" size={32} />
    </div>
  );
};

CardTile.propTypes = {
  card: PropTypes.object.isRequired
};

export default CardTile;
