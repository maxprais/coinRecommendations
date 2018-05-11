import React from "react";
import PropTypes from 'prop-types';

export const ShopItem = ({ item }) => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>{ item.name }</h2>
            <p>{ item.description }</p>
        </div>
    </div>
);

ShopItem.propTypes = {
    item: PropTypes.object
};