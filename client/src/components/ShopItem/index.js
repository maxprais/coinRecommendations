import React from "react";
import PropTypes from 'prop-types';
import './style.css';
const SELECTION_TYPES = {
  WISHLIST: 0,
  PURCHASED: 1
};

export class ShopItem extends React.Component {

  constructor(props) {
    super(props);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(selectionType, itemId) {
    this.props.onSelectItem(selectionType, itemId);
  }

  render() {
    return (
      <div className="shop-item">
        <div className="shop-item-header">
          <span className="item-title">{ this.props.item.name }</span>
          <div className="icons">
            <i onClick={(event) => this.onSelectItem(SELECTION_TYPES.PURCHASED, this.props.item.id)}
               className="material-icons wishlist-icon">star</i>
            <i onClick={(event) => this.onSelectItem(SELECTION_TYPES.WISHLIST, this.props.item.id)}
               className="material-icons favourite-icon">favorite</i>
          </div>
        </div>
        <p>{ this.props.item.description }</p>
      </div>
    )
  }
}

ShopItem.propTypes = {
    item: PropTypes.object,
    onSelectItem: PropTypes.Function
};