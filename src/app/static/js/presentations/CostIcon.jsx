import React from 'react';
import './CostIcon.scss';

const CostIcon = ({cost}) => {
  return (
    <div className="cost-icon">
      <img src="static/img/resource_trade_32.png" />
      <p>{cost}</p>
    </div>
  );
};

CostIcon.propTypes = {
  cost: React.PropTypes.number.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default CostIcon;
