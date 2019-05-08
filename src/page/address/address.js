import React, { Fragment } from 'react';
import Index from './../../component/address/index';

export default function address(props){
    if(props.location.pathname === '/address' ){
        require('./../../assets/styles/address.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}
