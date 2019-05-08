import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function index(props) {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row main_top"><Link to="/">Trang Chủ/</Link><a href="/list-product">Sản Phẩm/</a><a href="/detail-product">Rượu
                    Vang Đỏ/</a></div>
                    <div className="row new_product clearfix">
                        <div className="new_product_intro">
                            <h1>GIỚI THIỆU</h1><img src={require('./../../assets/images/Drink/titleleft-dark.png')} alt="intro" />
                        </div>
                    </div>
                    <div className="row about">
                        <div className="col-sm-5 about_image"><img src={require('./../../assets/images/Drink/about-adv-img.jpg')} alt="about-adv-img" /></div>
                        <div className="col-sm-6 about_content">
                            <div className="row about_content_top">
                                <h1>Chào mừng đến với wine hourse</h1>
                            </div>
                            <div className="row about_content_bottom">
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                    rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui
                                    tươi,sản phẩm được đóng chai dung tích 750ml.Vang nổ Thăng Long có hương vị đặc trưng của
                                    sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng
                            long tạo cảm giác hương phấn, êm dịu, vui tươi, </p>
                                <p>sản phẩm được đóng chai dung tích 750ml.Vang nổ Thăng Long có hương vị đặc trưng của sản
                                    phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long
                            tạo cảm giác hương phấn, êm dịu, vui tươi,sản phẩm được đóng chai dung tích 750ml....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}