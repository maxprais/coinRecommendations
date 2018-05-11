import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const HeaderTab = ({ tab, onViewSelect, selectedTab }) => (
  <div className={`tab ${selectedTab === tab.id ? 'active' : ''}`} onClick={() => onViewSelect(tab.id)}>
    {tab.value}
  </div>
);

HeaderTab.propTypes = {
  tab: PropTypes.object
};