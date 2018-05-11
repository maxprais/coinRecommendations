import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const HeaderTab = ({ tab, onViewSelect }) => (
  <div className="tab" onClick={() => onViewSelect(tab.id)}>
    {tab.value}
  </div>
);

HeaderTab.propTypes = {
  tab: PropTypes.object
};