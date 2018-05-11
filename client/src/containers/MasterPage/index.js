import React from "react";
import { connect } from "react-redux";
import { ShopContainer } from '../ShopContainer';
import HeaderTabs from '../../components/HeaderTabs';
import { getShopProducts } from '../../actions/shop';
import { HEADER_TABS } from '../../components/HeaderTabs/consts';

const mapDispatchToProps = () => ({
    getShopProducts: getShopProducts()
});

const mapStateToProps = state => (
  { shopItems: state.ShopReducer.shopItems }
);

class MasterPageElm extends React.Component {

  constructor(props) {
    super(props);
    this.getView = this.getView.bind(this);
  }

  getView(view) {
    let views = {
      [HEADER_TABS[0].id]: () => {},
      [HEADER_TABS[1].id]: () => {},
      [HEADER_TABS[2].id]: () => {}
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