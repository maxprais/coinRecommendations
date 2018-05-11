import React from "react";
import { HeaderTab } from './HeaderTab/index';
import './style.css';
import { HEADER_TABS } from './consts';

export default class HeaderTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tabs: HEADER_TABS };
    this.onViewSelect = this.onViewSelect.bind(this);
  }

  onViewSelect(view) {
    this.props.getView(view);
  }

  render() {
    return (
      <div className="tabs-container">
        { this.state.tabs.map((tab, index) =>
          <HeaderTab key={index} tab={tab} onViewSelect={this.onViewSelect} />) }
      </div>
    )
  }
};
