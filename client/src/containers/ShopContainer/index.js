import React from "react";
import { connect } from "react-redux";
import { ShopItem } from '../../components/ShopItem';
import './style.css';
import { chooseProduct } from '../../actions/shop';

const mapStateToProps = state => {
  console.log(state.ShopReducer);
  return {
    shopItems: state.ShopReducer.shopItems,
    productChosen: state.ShopReducer.productChosen
  };
};

const matchDispatchToProps = () => ({
  chooseProduct: (selectionType, itemId) => chooseProduct(selectionType, itemId)
});

class ShopContainerElm extends React.Component {

  constructor(props) {
    super(props);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(selectionType, itemId) {
    console.log(selectionType, itemId);
    this.props.chooseProduct(selectionType, itemId);
  }

  componentDidUpdate() {
    if (this.props.productChosen) {
      alert('chosen!');
    }
  }

  render() {
    return (
      <div className="shop-items-container">
        { this.props.shopItems.map((value, index) =>
          <ShopItem key={index}
                    onSelectItem={this.onSelectItem}
                    item={value} />) }
      </div>
    )
  }
}

export const ShopContainer = connect(mapStateToProps, matchDispatchToProps)(ShopContainerElm);