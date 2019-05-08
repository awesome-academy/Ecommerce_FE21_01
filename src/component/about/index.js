import React,{Fragment} from 'react';
import HeaderDrink from './../include/HeaderDrink';
import FooterDrink from './../include/FooterDrink';
import About from './about';

export default function index(props){
    return(
        <Fragment>
            <HeaderDrink />
            <About />
            <FooterDrink />
        </Fragment>
    );
}