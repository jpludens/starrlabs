import React from 'react';
import PropTypes from 'prop-types';
import SortPanel from '../presentations/SortPanel.jsx';
import CardList from '../presentations/CardList.jsx';
import SORT_TYPE from '../enums/sortType.js';
import firstBy from 'thenby';

// TODO XXX Add filter categories here, and a filterpanel component
const TransformableCardList = ({cards, categories, categorySortTypes, customSortFunctions}) => {
  // Get a copy of the list so we don't modify the original
  let sortedCards = cards.slice(0);

  if (categories.length) {
    // Reduce categories to ones we actually needs to sort on
    const categoriesToSortOn = categories.filter(category =>
      categorySortTypes.has(category) &&
      categorySortTypes.get(category) !== SORT_TYPE.UNSORTED);

    // Convert categories to sets of arguments for firstBy/thenBy
    const byArgs = categoriesToSortOn.map(category => {
      const args = [
        customSortFunctions.has(category) ?
        customSortFunctions.get(category) :
        category
      ];
      if (categorySortTypes.get(category) === SORT_TYPE.DESCENDING) {
        args.push(-1);
      }
      return args;
    });

    // Create a thenBy sort object
    let sortObject = firstBy(...byArgs[0]);
    byArgs.slice(1).forEach(thenArgs => {
      sortObject = sortObject.thenBy(...thenArgs);
    });
    sortedCards.sort(sortObject);
  }

  return (
    <div>
      <SortPanel
        categories={categories}
        categorySortTypes={categorySortTypes} />
      <CardList cards={sortedCards} />
    </div>
  );
};

TransformableCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  // NICE validate keys/values (no default map in proptypes)
  categorySortTypes: PropTypes.instanceOf(Map).isRequired,
  customSortFunctions: PropTypes.instanceOf(Map).isRequired
};

export default TransformableCardList;
