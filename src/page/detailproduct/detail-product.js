import React ,{Fragment} from 'react';
import Index from './../../component/detailproduct/index';

export default function list_product(props){
    if( props.location.pathname === '/detail-product' ){
        require('./../../assets/styles/detail-product.css');
    }
    return(
        <Fragment>
              <Index /> 
        </Fragment>
    );
}
