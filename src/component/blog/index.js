import React,{Fragment} from 'react';
import HeaderDrink from './../include/HeaderDrink';
import FooterDrink from './../include/FooterDrink';
import Blog from './blog';

export default function index(props){
    return(
        <Fragment>
            <HeaderDrink />
            <Blog />
            <FooterDrink />
        </Fragment>
    );
}