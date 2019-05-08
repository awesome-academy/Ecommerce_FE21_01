import React,{Fragment} from 'react';
import HeaderDrink from './../include/HeaderDrink';
import FooterDrink from './../include/FooterDrink';
import Address from './address';

export default function index(props){
    return(
        <Fragment>
            <HeaderDrink />
            <Address />
            <FooterDrink />
        </Fragment>
    );
}