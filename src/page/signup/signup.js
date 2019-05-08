import React, { Fragment } from 'react';
import Index from './../../component/signup/index';

export default function signup(props){
    if( props.location.pathname === '/signup' ){
        require('./../../assets/styles/signup.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}