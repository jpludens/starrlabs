import React from 'react';
import PropTypes from 'prop-types';
import SortPanelTab from './SortPanelTab.jsx';
import {GROUP_POSITION} from '../../../../../gen/static/js/groupPosition.js';

const SortPanel = ({categories, categorySortTypes}) => {
  const lastIndex = categories.length - 1;
  const getPosition = i => {
    if (i === 0) {
      return lastIndex ? GROUP_POSITION.FIRST : GROUP_POSITION.ONLY;
    }
    if (i === lastIndex) {
      return GROUP_POSITION.LAST;
    }
    return GROUP_POSITION.INNER;
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
  categorySortTypes: PropTypes.instanceOf(Map).isRequired
};

export default SortPanel;
