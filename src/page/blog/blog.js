import React, { Fragment } from 'react';
import Index from './../../component/blog/index';
 
export default function blog(props){
    if(props.location.pathname === '/blog' ){
        require('./../../assets/styles/blog.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    )
}
