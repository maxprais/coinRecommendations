import React from "react";
import { connect } from "react-redux";
import { ShopContainer } from '../ShopContainer';
import HeaderTabs from '../../components/HeaderTabs';
import { getShopProducts, getUserPurchasedProducts } from '../../actions/shop';
import { HEADER_TABS } from '../../components/HeaderTabs/consts';

const mapDispatchToProps = () => ({
    getShopProducts: () => getShopProducts(),
    getUserPurchasedProducts: () => getUserPurchasedProducts(1)
});

const mapStateToProps = state => (
  { shopItems: state.ShopReducer.shopItems }
);

class MasterPageElm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { view: HEADER_TABS[0].id };
    this.getView = this.getView.bind(this);
  }

  componentWillMount() {
    this.props.getShopProducts();
  }

  getView(view) {
    this.setState(({ view }));
    let views = {
      [HEADER_TABS[0].id]: () => this.props.getShopProducts(),
      [HEADER_TABS[1].id]: () => this.props.getUserPurchasedProducts(1)
    };
    views[view].apply();
  }

  render() {
    return (
      <div>
        <HeaderTabs getView={this.getView} />
        <ShopContainer shopItems={this.props.shopItems} />

      </div>
    )
  }
}


export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);