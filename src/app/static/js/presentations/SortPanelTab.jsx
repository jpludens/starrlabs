import React from 'react';
import PropTypes from 'prop-types';
import {block} from 'bemjs';
import cssify from './../utils/cssify.js';
import GROUP_POSITIONS from '../../../../../gen/static/js/groupPosition.js';
import SORT_TYPES from '../enums/sortType.js';

const tabBlock = block('sort-panel-tab');
const getTabClass = (sortType, position) =>
   tabBlock
  .mod(cssify(sortType === SORT_TYPES.UNSORTED ? 'inactive' : 'active'))
  .mod(cssify(position));

const sortArrowElement = tabBlock.el('sort-arrow-container').toString();
const orderArrowElement = tabBlock.el('order-arrow-container').toString();
const getArrowClass = direction => tabBlock.el('arrow').mod(direction);

const directionBySortType = new Map();
directionBySortType.set(SORT_TYPES.ASCENDING, 'up');
directionBySortType.set(SORT_TYPES.DESCENDING, 'down');

const needsLeftButton = position =>
  position === GROUP_POSITIONS.INNER || position === GROUP_POSITIONS.LAST;

const needsRightButton = position =>
  position === GROUP_POSITIONS.INNER || position === GROUP_POSITIONS.FIRST;

const SortPanelTab = ({category, sortType, position}) => {
  return (
    <div className={getTabClass(sortType, position)}>
      {needsLeftButton(position) ?
        <div className={orderArrowElement} >
          <div className={getArrowClass('left')} />
        </div>
        : null
      }

      <div>
        <p>{category}</p>
        {directionBySortType.has(sortType) ?
          <div className={sortArrowElement} >
            <div className={getArrowClass(directionBySortType.get(sortType))} />
          </div>
          : null
        }
      </div>

      {needsRightButton(position) ?
        <div className={orderArrowElement} >
          <div className={getArrowClass('right')} />
        </div>
        : null
      }
    </div>
  );
};

SortPanelTab.propTypes = {
  category: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default SortPanelTab;
