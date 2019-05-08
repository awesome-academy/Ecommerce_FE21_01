import React,{Fragment} from 'react';
import News from './news';
import Header from './../include/Header';
import Footer from './../include/Footer';

class index extends React.Component{
    render(){
        return(
            <Fragment>
                <Header />
                <News />
                <Footer />
            </Fragment>
        );
    }
}
export default index;