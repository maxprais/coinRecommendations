import React from "react";
import { connect } from "react-redux";
import { ShopItem } from '../../components/ShopItem';
import './style.css';
import { chooseProduct, resetAlert } from '../../actions/shop';
import { PRODUCT_SELECTION_TYPES } from '../../consts/consts';

const mapStateToProps = state => {
  return {
    shopItems: state.ShopReducer.shopItems,
    productChosen: state.ShopReducer.productChosen
  };
};

const matchDispatchToProps = () => ({
  chooseProduct: (selectionType, itemId) => chooseProduct(selectionType, itemId),
  resetAlert: () => resetAlert()
});

class ShopContainerElm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(selectionType, itemId) {
    const selectedType = selectionType
      ? PRODUCT_SELECTION_TYPES.PURCHASED
      : PRODUCT_SELECTION_TYPES.WISHLIST;
    this.setState({ selectedType });
    this.props.chooseProduct(selectionType, itemId);
  }

  componentDidUpdate() {
    if (this.props.productChosen) {
      const message = this.state.selectedType === PRODUCT_SELECTION_TYPES.PURCHASED
        ? 'Nice! You can view this purchase in "My Benefits"'
        : 'One for the future?! Return to it later in your wishlist';

      alert(message);
      this.props.resetAlert();
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