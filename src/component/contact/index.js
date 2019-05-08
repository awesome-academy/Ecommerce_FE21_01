import React, { Fragment } from 'react';
import Header from './../include/Header';
import Footer from './../include/Footer';
import Contact from './contact';

export default function index(props){
    return(
        <Fragment>
            <Header />
            <Contact />
            <Footer />
        </Fragment>
    );
}