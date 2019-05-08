import React,{Fragment} from 'react';
import Listproduct from './list-product';
import './../../assets/styles/list-product.css';
import Header from './../include/Header';
import Footer from './../include/Footer';

class index extends React.Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Listproduct />
                <Footer />
            </Fragment>
        );
    }
}
export default index;