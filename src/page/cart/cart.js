import React, { Fragment } from 'react';
import Index from './../../component/cart/index';

export default function cart(props){
    if( props.location.pathname === '/cart' ){
        require('./../../assets/styles/cart.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}
