import React, { Fragment } from 'react';
import Index from './../../component/contact/index';

export default function contact(props){
    if( props.location.pathname === '/contact' ){
        require('./../../assets/styles/contact.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}