import React from 'react';
import PropTypes from 'prop-types';
import {block} from 'bemjs';
import cssify from './../utils/cssify.js';
import displayify from './../utils/displayify.js';
import {GROUP_POSITION} from '../../../../../gen/static/js/groupPosition.js';
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
  position === GROUP_POSITION.INNER || position === GROUP_POSITION.LAST;

const needsRightButton = position =>
  position === GROUP_POSITION.INNER || position === GROUP_POSITION.FIRST;

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
        <p>{displayify(category)}</p>
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
