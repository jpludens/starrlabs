import React from 'react';
import PropTypes from 'prop-types';
import CardTile from './CardTile.jsx';

// TODO Use card.id as a key after card data is stored externally
// Sort by faction
// Sort by cost
// Sort by type
// Sort by name
// Default: Faction -> Cost -> Name

// Sort Panel
// SortTiles
// SortTile
//   Move left/up, move down/right, toggle

// Show single Faction
// Show single type
const CardList = ({cards}) => {
  return (
    <ul className="card-list">
      {cards.map(card => (
        <li key={card.name}>
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
