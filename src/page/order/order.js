import React,{Fragment} from 'react';
import Index from '../../component/order/index';

export default function news(props){
    if( props.location.pathname === '/order' ){
        require('./../../assets/styles/order.css');
    }
    return(
        <Fragment>
              <Index /> 
        </Fragment>
    );
}