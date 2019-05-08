import React,{Fragment} from 'react';
import Cart from './cart';
import Header from './../include/Header';
import Footer from './../include/Footer';

class index extends React.Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Cart />
                <Footer />
            </Fragment>
        );
    }
}

export default index;