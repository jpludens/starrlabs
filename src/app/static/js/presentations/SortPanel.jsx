import React from 'react';
import PropTypes from 'prop-types';
import SortPanelTab from './SortPanelTab.jsx';
import GROUP_POSITIONS from '../../../../../gen/static/js/groupPosition.js';

const SortPanel = ({categories, categorySortTypes, categorySortFunctions}) => {
  // make webpack happy for now...
  categorySortFunctions.set('foo', 'bar');
  // happymaking complete

  const lastIndex = categories.length - 1;
  const getPosition = i => {
    if (i === 0) {
      return lastIndex ? GROUP_POSITIONS.FIRST : GROUP_POSITIONS.ONLY;
    }
    if (i === lastIndex) {
      return GROUP_POSITIONS.LAST;
    }
    return GROUP_POSITIONS.INNER;
  };

  return (
    <div className="sort-panel">
      {categories.map((category, index) => (
        <SortPanelTab
          key={category}
          category={category}
          sortType={categorySortTypes.get(category)}
          position={getPosition(index)}/>))
      }
    </div>
  );
};

SortPanel.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  // NICE validate keys/values (no default map in proptypes)
  categorySortTypes: PropTypes.instanceOf(Map).isRequired,
  categorySortFunctions: PropTypes.instanceOf(Map).isRequired
};

export default SortPanel;
