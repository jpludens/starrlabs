import React from 'react';
import CardTile from './presentations/CardTile.jsx';

//////////////////////////////////////////////
import FACTIONS from '../../../../gen/static/js/faction.js';
import CARD_TYPES from '../../../../gen/static/js/cardType.js';

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
console.log('Patrol Mech from app.jsx');
console.log(card1);
console.log('Cutter from app.jsx');
console.log(card2);
console.log('Viper from app.jsx');
console.log(card3);
console.log('Battlecruiser from app.jsx');
console.log(card4);
console.log('Mothership from app.jsx');
console.log(card5);
//////////////////////////////////////////////

const App = () => (
  <div>
    <CardTile card={card1}/>
    <CardTile card={card2}/>
    <CardTile card={card3}/>
    <CardTile card={card4}/>
    <CardTile card={card5}/>
  </div>
);

export default App;
