import React from 'react';
import PropTypes from 'prop-types';
import {block} from 'bemjs';
import cssify from './../utils/cssify.js';
import Icon from './Icon.jsx';
import Quanticon from './Quanticon.jsx';
import {CARD_ATTRIBUTE} from '../../../../../gen/static/js/cardAttribute.js';

// Load images
import FACTION from '../../../../../gen/static/js/faction.js';
import CARD_TYPE from '../../../../../gen/static/js/cardType.js';

for (let faction in FACTION) {
  if (Object.prototype.hasOwnProperty.call(FACTION, faction)) {
    require(`../../img/faction_${faction.toLowerCase()}_32.png`);
  }
}

for (let cardType in CARD_TYPE) {
  if (Object.prototype.hasOwnProperty.call(CARD_TYPE, cardType)) {
    require(`../../img/cardType_${cardType.toLowerCase()}_32.png`);
  }
}

require('../../img/resource_trade_32.png');
// Done loading images

const CardTile = ({card}) => {
  return (
    <div className={block('card-tile').mod(`faction-${cssify(card[CARD_ATTRIBUTE.FACTION])}`)}>
      <Icon category="faction" name={card[CARD_ATTRIBUTE.FACTION].toLowerCase()} size={32}/>
      <Icon category="cardType" name={card[CARD_ATTRIBUTE.CARD_TYPE].toLowerCase()} size={32}/>
      <span>{card[CARD_ATTRIBUTE.NAME]}</span>
      <Quanticon value={card[CARD_ATTRIBUTE.COST] || 0} category="resource" name="trade" size={32} />
    </div>
  );
};

CardTile.propTypes = {
  card: PropTypes.object.isRequired
};

export default CardTile;
