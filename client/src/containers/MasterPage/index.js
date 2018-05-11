import React from "react";
import { connect } from "react-redux";
import { ShopContainer } from '../ShopContainer';
import { getShopProducts } from '../../actions/shop';

const mapDispatchToProps = () => ({
    getShopProducts: getShopProducts()
});

const mapStateToProps = state => (
  { shopItems: state.ShopReducer.shopItems }
);

const MasterPageElm = ({ shopItems }) => (
    shopItems && <ShopContainer shopItems={shopItems} />
);

export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);