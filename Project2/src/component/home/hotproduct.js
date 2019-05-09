import React, { Fragment } from 'react';
import Product from './hotproduct/product';
import {connect} from 'react-redux';
import { actFetchHotProduct } from './../../action/action';

class hotproduct extends React.Component {

    componentDidMount(){
        this.props.fetchHotProduct();
    }
    render() {
        return (
            <Fragment>
                <div className="section-1">
                    <div className="product--highligh">
                        <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm nổi bật</span>
                        </div>
                        <div className="product--highligh-content">

                            { this.hotProduct( this.props.hotProduct ) }

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    hotProduct = hotProduct =>{
        let product = '';
        product = hotProduct.map((value,index)=>{
            return (
                <Product key={index} product={value} /> 
            );
        });
        return product;
    }
}

const mapStateToProps = state =>{
    return{
        hotProduct : state.product.hotProduct
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchHotProduct : ()=>{
            dispatch( actFetchHotProduct() );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(hotproduct);