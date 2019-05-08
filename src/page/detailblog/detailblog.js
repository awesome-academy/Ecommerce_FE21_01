import React ,{Fragment} from 'react';
import Index from './../../component/detailblog/index';

export default function list_product(props){
    if( props.location.pathname === '/detail-blog' ){
        require('./../../assets/styles/detail_blog.css');
    }
    return(
        <Fragment>
              <Index /> 
        </Fragment>
    );
}
