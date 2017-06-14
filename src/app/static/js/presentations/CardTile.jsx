import React from 'react';
import './CardTile.scss';
import Icon from './Icon.jsx';
import CostIcon from './CostIcon.jsx';

// Load the 32px images used by CardTile
import FACTIONS from '../enums/factions.js';
import CARD_TYPES from '../enums/cardTypes.js';

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

const CardTile = ({card}) => {
  const faction = card.faction.toLowerCase();
  const cardType = card.cardType.toLowerCase();

  const cost = card.cost ?
    <CostIcon cost={card.cost} /> :
    <div/>;
  return (
    <div className={`card-tile__${faction}`}>
      <Icon category="faction" name={faction} suffix="32"/>
      <Icon category="cardType" name={cardType} suffix="32"/>
      <span>{card.name}</span>
      {cost}
    </div>
  );
};

CardTile.propTypes = {
  card: React.PropTypes.object.isRequired
};

export default CardTile;
