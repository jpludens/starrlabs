import React from 'react';
import PropTypes from 'prop-types';
import CardTile from './CardTile.jsx';
import {CARD_ATTRIBUTE} from '../../../../../gen/static/js/cardAttribute.js';

// TODO Use card.id as a key after card data is stored externally
// will allow this component to stay ignorant of card attributes
const CardList = ({cards}) => {
  return (
    <ul className="card-list">
      {cards.map(card => (
        <li key={card[CARD_ATTRIBUTE.NAME]}>
          <CardTile card={card} />
        </li>
      ))}
    </ul>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardList;
