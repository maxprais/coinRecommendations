import React from "react";
import { HeaderTab } from './HeaderTab/index';
import './style.css';
const tabs = ['Shop', 'My Benefits', 'Wishlist'];

export default class HeaderTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tabs };
  }

  render() {
    return (
      <div className="tabs-container">
        { this.state.tabs.map((tab, index) =>
          <HeaderTab key={index} tab={tab} />) }
      </div>
    )
  }
};
