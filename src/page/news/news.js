import React,{Fragment} from 'react';
import Index from '../../component/news/index';

export default function news(props){
    if( props.location.pathname === '/news' ){
        require('./../../assets/styles/news.css');
    }
    return(
        <Fragment>
              <Index /> 
        </Fragment>
    );
}