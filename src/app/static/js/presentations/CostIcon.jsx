import React from 'react';
import PropTypes from 'prop-types';

const CostIcon = ({cost}) => {
  return (
    <div className="quanticon">
      <img src="static/img/resource_trade_32.png" />
      <p>{cost}</p>
    </div>
  );
};

CostIcon.propTypes = {
  cost: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default CostIcon;
