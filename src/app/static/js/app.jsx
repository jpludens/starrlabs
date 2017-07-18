import React from 'react';
import TransformableCardList from './containers/TransformableCardList.jsx';
import {CARD_ATTRIBUTE} from '../../../../gen/static/js/cardAttribute.js';

//////////////////////////////////////////////
import {FACTION} from '../../../../gen/static/js/faction.js';
import {CARD_TYPE, sortCardType} from '../../../../gen/static/js/cardType.js';
import SORT_TYPES from './enums/sortType.js';

// These need to come from elsewhere...
console.log(CARD_ATTRIBUTE);
const card1 = {
  [CARD_ATTRIBUTE.NAME]: 'Missile Bot',
  [CARD_ATTRIBUTE.FACTION]: FACTION.MACHINE_CULT,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 2
};
const card1a = {
  [CARD_ATTRIBUTE.NAME]: 'Battle Station',
  [CARD_ATTRIBUTE.FACTION]: FACTION.MACHINE_CULT,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.OUTPOST,
  [CARD_ATTRIBUTE.COST]: 3
};
const card2 = {
  [CARD_ATTRIBUTE.NAME]: 'Barter World',
  [CARD_ATTRIBUTE.FACTION]: FACTION.TRADE_FEDERATION,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.BASE,
  [CARD_ATTRIBUTE.COST]: 4
};
const card2a = {
  [CARD_ATTRIBUTE.NAME]: 'Flagship',
  [CARD_ATTRIBUTE.FACTION]: FACTION.TRADE_FEDERATION,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 6
};
const card2b = {
  [CARD_ATTRIBUTE.NAME]: 'Port of Call',
  [CARD_ATTRIBUTE.FACTION]: FACTION.TRADE_FEDERATION,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.OUTPOST,
  [CARD_ATTRIBUTE.COST]: 6
};
const card3 = {
  [CARD_ATTRIBUTE.NAME]: 'Viper',
  [CARD_ATTRIBUTE.FACTION]: FACTION.UNALIGNED,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP
};
const card3a = {
  [CARD_ATTRIBUTE.NAME]: 'Scout',
  [CARD_ATTRIBUTE.FACTION]: FACTION.UNALIGNED,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP
};
const card3b = {
  [CARD_ATTRIBUTE.NAME]: 'Explorer',
  [CARD_ATTRIBUTE.FACTION]: FACTION.UNALIGNED,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 2
};
const card4 = {
  [CARD_ATTRIBUTE.NAME]: 'War World',
  [CARD_ATTRIBUTE.FACTION]: FACTION.STAR_EMPIRE,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.OUTPOST,
  [CARD_ATTRIBUTE.COST]: 5
};
const card4a = {
  [CARD_ATTRIBUTE.NAME]: 'Imperial Fighter',
  [CARD_ATTRIBUTE.FACTION]: FACTION.STAR_EMPIRE,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 1
};
const card5 = {
  [CARD_ATTRIBUTE.NAME]: 'Mothership',
  [CARD_ATTRIBUTE.FACTION]: FACTION.BLOB,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 7
};
const card5a = {
  [CARD_ATTRIBUTE.NAME]: 'Ram',
  [CARD_ATTRIBUTE.FACTION]: FACTION.BLOB,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.SHIP,
  [CARD_ATTRIBUTE.COST]: 3
};
const card5b = {
  [CARD_ATTRIBUTE.NAME]: 'Blob Wheel',
  [CARD_ATTRIBUTE.FACTION]: FACTION.BLOB,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.BASE,
  [CARD_ATTRIBUTE.COST]: 3
};
const card5c = {
  [CARD_ATTRIBUTE.NAME]: 'The Hive',
  [CARD_ATTRIBUTE.FACTION]: FACTION.BLOB,
  [CARD_ATTRIBUTE.CARD_TYPE]: CARD_TYPE.BASE,
  [CARD_ATTRIBUTE.COST]: 5
};

const cards = [
  card1,
  card2,
  card3,
  card4,
  card4a,
  card5,
  card5a,
  card5b,
  card5c,
  card1a,
  card2a,
  card2b,
  card3a,
  card3b
];
//////////////////////////////////////////////
const categories = [
  CARD_ATTRIBUTE.FACTION,
  CARD_ATTRIBUTE.CARD_TYPE,
  CARD_ATTRIBUTE.COST,
  CARD_ATTRIBUTE.NAME
];
const categorySortTypes = new Map();
categorySortTypes.set(CARD_ATTRIBUTE.FACTION, SORT_TYPES.UNSORTED);
categorySortTypes.set(CARD_ATTRIBUTE.COST, SORT_TYPES.UNSORTED);
categorySortTypes.set(CARD_ATTRIBUTE.CARD_TYPE, SORT_TYPES.DESCENDING);
categorySortTypes.set(CARD_ATTRIBUTE.NAME, SORT_TYPES.ASCENDING);
const customSortFunctions = new Map([
  [
    CARD_ATTRIBUTE.CARD_TYPE,
    (a, b) => sortCardType(
      a[CARD_ATTRIBUTE.CARD_TYPE],
      b[CARD_ATTRIBUTE.CARD_TYPE]
    )
  ]
]);

const App = () => (
  <div>
    <TransformableCardList
      cards={cards}
      categories={categories}
      categorySortTypes={categorySortTypes}
      customSortFunctions={customSortFunctions}/>
  </div>
);


export default App;
