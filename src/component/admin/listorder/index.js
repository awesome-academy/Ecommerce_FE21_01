import React, { Fragment } from 'react';
import AsideAdmin from './../../include/AsideAdmin';
import ListOrder from './listorder';

export default function index() {
    return (
        <Fragment>
            <div >
                <img className="bgAdmin" src={require('./../../../assets/images/Admin/slide.png')} alt="slide" />
                <div className="container-fluid">

                    <div className="row">

                        <AsideAdmin />

                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="main_home">

                                <ListOrder />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>
    )
}