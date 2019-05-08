import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function index(props) {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row main_top"><Link to="/">Trang Chủ/</Link><Link to="/list-product">Sản Phẩm/</Link><Link to="/detail-product">Rượu
                    Vang Đỏ/</Link></div>
                    <div className="row new_product clearfix">
                        <div className="new_product_intro">
                            <h1>BLOG</h1><img src={require('./../../assets/images/Drink/titleleft-dark.png')} alt="title-dark" />
                        </div>
                    </div>
                    <div className="row product_list">
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-2.jpg')} alt="news-2" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-2.jpg')} alt="news-2" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink//news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-2.jpg')} alt="news-2" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="news_item"><img src={require('./../../assets/images/Drink/news-1.jpg')} alt="news-1" />
                                <h3>VANG THĂNG LONG classNameIC</h3>
                                <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                            rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...</p>
                                <h5>Readmore</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}