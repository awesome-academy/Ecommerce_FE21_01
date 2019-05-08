import React, { Fragment } from 'react';
import HeaderDrink from './../include/HeaderDrink';
import FooterDrink from './../include/FooterDrink';
import Order from './order';

export default function index(props){
    return(
        <Fragment>
            <HeaderDrink />
            <Order />
            <FooterDrink />
        </Fragment>
    );
}