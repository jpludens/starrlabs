import React from 'react';
import CardList from './presentations/CardList.jsx';
import SortPanel from './presentations/SortPanel.jsx';

//////////////////////////////////////////////
import FACTIONS from '../../../../gen/static/js/faction.js';
import CARD_TYPES from '../../../../gen/static/js/cardType.js';
import SORT_TYPES from './enums/sortType.js';

// These need to come from elsewhere...
const card1 = {
  name: 'Missile Bot',
  faction: FACTIONS.MACHINE_CULT,
  cardType: CARD_TYPES.SHIP,
  cost: 2
};
const card2 = {
  name: 'Barter World',
  faction: FACTIONS.TRADE_FEDERATION,
  cardType: CARD_TYPES.BASE,
  cost: 4
};
const card3 = {
  name: 'Viper',
  faction: FACTIONS.UNALIGNED,
  cardType: CARD_TYPES.SHIP
};
const card4 = {
  name: 'War World',
  faction: FACTIONS.STAR_EMPIRE,
  cardType: CARD_TYPES.OUTPOST,
  cost: 5
};
const card5 = {
  name: 'Mothership',
  faction: FACTIONS.BLOB,
  cardType: CARD_TYPES.SHIP,
  cost: 7
};

const cards = [
  card1,
  card2,
  card3,
  card4,
  card5
];
// console.log('Patrol Mech from app.jsx');
// console.log(card1);
// console.log('Cutter from app.jsx');
// console.log(card2);
// console.log('Viper from app.jsx');
// console.log(card3);
// console.log('Battlecruiser from app.jsx');
// console.log(card4);
// console.log('Mothership from app.jsx');
// console.log(card5);
const sortCategories = [
  'Faction',
  'Card Type',
  'Cost',
  'Name'
];
const categorySortTypes = new Map();
categorySortTypes.set('Faction', SORT_TYPES.UNSORTED);
categorySortTypes.set('Cost', SORT_TYPES.UNSORTED);
categorySortTypes.set('Card Type', SORT_TYPES.DESCENDING);
categorySortTypes.set('Name', SORT_TYPES.ASCENDING);
const categorySortFunctions = new Map();
//////////////////////////////////////////////

const App = () => (
  <div>
    <SortPanel
      categories={sortCategories}
      categorySortTypes={categorySortTypes}
      categorySortFunctions={categorySortFunctions} />
    <CardList cards={cards} />
  </div>
);

export default App;
