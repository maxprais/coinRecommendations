import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export const HeaderTab = ({ tab }) => (
  <div className="tab">
    {tab}
  </div>
);

HeaderTab.propTypes = {
  tab: PropTypes.string
};