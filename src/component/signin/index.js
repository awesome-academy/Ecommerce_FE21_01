import React, { Fragment } from 'react';
import Singnin from './signin';
import Header from './../include/Header';
import Footer from './../include/Footer';

export default function signin(props){
    return(
        <Fragment>
            <Header />
            <Singnin />
            <Footer />
        </Fragment>
    );
}