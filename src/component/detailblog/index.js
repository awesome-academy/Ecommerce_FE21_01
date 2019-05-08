import React, { Fragment } from 'react';
import HeaderDrink from './../include/HeaderDrink';
import FooterDrink from './../include/FooterDrink';
import DetailBlog from './detailblog';

export default function index(props){
    return(
        <Fragment>
            <HeaderDrink />
            <DetailBlog />
            <FooterDrink />
        </Fragment>
    );
}