import React, { Fragment } from 'react';
import Index from './../../component/about/index';

export default function about(props){
    if( props.location.pathname === '/about' ){
        require('./../../assets/styles/about.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}
