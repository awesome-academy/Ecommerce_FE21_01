import React, { Fragment } from 'react';
import Index from './../../component/404/index';
import url from './../../url';

function page404(props) {

    url.map((value,index)=>{
        if( value.path !== props.location.pathname ){
            require('./../../assets/styles/404.css');
        }
    })
    return (
        <Fragment>
            <Index />
        </Fragment>
    );

}
export default page404;