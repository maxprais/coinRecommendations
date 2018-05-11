import React from "react";
import { connect } from "react-redux";
import { ShopItem } from '../../components/ShopItem';

const mapStateToProps = state => {
  console.log(state.ShopReducer.shopItems);
  return { shopItems: state.ShopReducer.shopItems };
};

const ShopContainerElm = ({ shopItems }) => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            { shopItems.map((value, index) =>
                <ShopItem key={index} item={value} />) }
        </div>
    </div>
);

export const ShopContainer = connect(mapStateToProps)(ShopContainerElm);