import React from "react";
import { connect } from "react-redux";
import { ShopContainer } from '../ShopContainer';
import HeaderTabs from '../../components/HeaderTabs';
import { getShopProducts } from '../../actions/shop';

const mapDispatchToProps = () => ({
    getShopProducts: getShopProducts()
});

const mapStateToProps = state => (
  { shopItems: state.ShopReducer.shopItems }
);

const MasterPageElm = ({ shopItems }) => (
  <div>
    <HeaderTabs />


    <ShopContainer shopItems={shopItems} />
  </div>
);

export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);