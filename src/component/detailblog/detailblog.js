import React, { Fragment } from 'react';

export default function index(props) {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row main_top"><a href="#a">Trang Chủ/</a><a href="#a">Blog</a></div>
                    <div className="row new_product clearfix">
                        <div className="new_product_intro">
                            <h1>BLOG</h1><img src={require('./../../assets/images/Drink/titleleft-dark.png')} alt="title-dark" />
                        </div>
                    </div>
                    <div className="row detail">
                        <div className="col-sm-3 detail_col">
                            <p>BÀI VIẾT MỚI NHẤT</p>
                            <div className="row detail_item">
                                <div className="col-sm-5 detail_item_img"><img src={require('./../../assets/images/Drink/detail-blog-1.jpg')} alt="detial-blog" /></div>
                                <div className="col-sm-6 detail_item_right">
                                    <p>CÁCH SẮP XẾP NỘI THẤT TRONG NHÀ</p><i className="far fa-calendar">16/01/2016</i>
                                </div>
                            </div>
                            <div className="row detail_item">
                                <div className="col-sm-5 detail_item_img"><img src={require('./../../assets/images/Drink/detail-blog-2.jpg')} alt="detail-blog-2" /></div>
                                <div className="col-sm-6 detail_item_right">
                                    <p>CÁCH SẮP XẾP NỘI THẤT TRONG NHÀ</p><i className="far fa-calendar">16/01/2016</i>
                                </div>
                            </div>
                            <div className="row detail_item">
                                <div className="col-sm-5 detail_item_img"><img src={require('./../../assets/images/Drink/detail-blog-3.jpg')} alt="detail-blog-3" /></div>
                                <div className="col-sm-6 detail_item_right">
                                    <p>CÁCH SẮP XẾP NỘI THẤT TRONG NHÀ</p><i className="far fa-calendar">16/01/2016</i>
                                </div>
                            </div>
                            <p className="blog_tag">BLOG TAG</p>
                            <div className="row keyword"><a href="#a" className="keyword_item">Đồng hồ</a><a href="#a"   className="keyword_item">Phụ kiện</a><a href="#a" 
                                className="keyword_item">Túi</a></div>
                            <div className="row keyword"><a href="#a" className="keyword_item">Giày</a><a href="#a"  className="keyword_item">Sandal</a><a href="#a"  className="keyword_item">Áo
                            sơ mi</a><a href="#a"  className="keyword_item">Nước hoa</a></div>
                            <div className="row keyword"><a href="#a" className="keyword_item">Trẻ em</a><a href="#a"  className="keyword_item">Thời trang nữ</a></div>
                            <p className="last_video">LASTED VIDEO</p>
                            <div className="row detail_last"><img src={require('./../../assets/images/Drink/detail-blog-4.jpg')} alt="detail-blog-4" /></div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="news_item"><img src={require('./../../assets/images/Drink/detail-blog-5.jpg')} alt="detail-product-5" />
                                    <h3>VANG THĂNG LONG classNameIC</h3>
                                    <h6>Đăng bởi HaKiet| 03/18/2019| 60 Bình luận</h6>
                                    <p>Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từhoa quả với độ
                                        rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảmgiác hương phấn, êm dịu, vui
                                        tươi, sản phẩm được đóng chai dung tích 750ml.Vang nổ Thăng Long có hương vị đặc trưng
                                        của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ
                                        thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích
                                750ml...</p>
                                </div>
                            </div>
                            <div className="row form">
                                <p>ĐÓNG GÓP Ý KIẾN</p>
                                <form>
                                    <div className="row field">
                                        <div className="col-sm-1"><label>Tên *</label></div>
                                        <div className="col-sm-11 col-sm-pull-1"><input type="text" /></div>
                                    </div>
                                    <div className="row field">
                                        <div className="col-sm-1"><label>Email *</label></div>
                                        <div className="col-sm-11 col-sm-pull-1"><input type="text" /></div>
                                    </div>
                                    <div className="row field">
                                        <div className="col-sm-1"><label>Ý kiến *</label></div>
                                        <div className="col-sm-11 col-sm-pull-1"><input type="textarea" /></div>
                                    </div><button>GỬI Ý KIẾN</button>
                                </form>
                                <p className="noitalic">BÌNH LUẬN(3)</p>
                                <div className="row comment_item">
                                    <div className="row comment">
                                        <div className="col-sm-2 comment_left">
                                            <p>Bình luận bởi HaKiet</p>
                                        </div>
                                        <div className="col-sm-6 comment_middle">
                                            <p>Cách đây 4 giờ</p>
                                        </div>
                                        <div className="col-sm-4 comment_right">
                                            <p>Trả lời</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 content">
                                            <p>Có lẽ bởi tính chất 'ăn gian' vóc dáng và vô cùng thoải mái, gợi cảm mà cả 2
                                                dạng trang phục này được áp dụng nhiều nhất trong street style tuần qua ,chọn
                                                cho mình bộ trang phục đơn sắc với thiết kế cổ yếm, ống rộng - vừa thoải mái
                                        tối đa lại không kém phần gợi cảm, kết hợp cùng đôi giày quai chữ T tôn dáng</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row comment_item">
                                    <div className="row comment">
                                        <div className="col-sm-2 comment_left">
                                            <p>Bình luận bởi HaKiet</p>
                                        </div>
                                        <div className="col-sm-6 comment_middle">
                                            <p>Cách đây 4 giờ</p>
                                        </div>
                                        <div className="col-sm-4 comment_right">
                                            <p>Trả lời</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 content">
                                            <p>Có lẽ bởi tính chất 'ăn gian' vóc dáng và vô cùng thoải mái, gợi cảm mà cả 2
                                                dạng trang phục này được áp dụng nhiều nhất trong street style tuần qua ,chọn
                                                cho mình bộ trang phục đơn sắc với thiết kế cổ yếm, ống rộng - vừa thoải mái
                                        tối đa lại không kém phần gợi cảm, kết hợp cùng đôi giày quai chữ T tôn dáng</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row comment_item">
                                    <div className="row comment">
                                        <div className="col-sm-2 comment_left">
                                            <p>Bình luận bởi HaKiet</p>
                                        </div>
                                        <div className="col-sm-6 comment_middle">
                                            <p>Cách đây 4 giờ</p>
                                        </div>
                                        <div className="col-sm-4 comment_right">
                                            <p>Trả lời</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 content">
                                            <p>Có lẽ bởi tính chất 'ăn gian' vóc dáng và vô cùng thoải mái, gợi cảm mà cả 2
                                                dạng trang phục này được áp dụng nhiều nhất trong street style tuần qua ,chọn
                                                cho mình bộ trang phục đơn sắc với thiết kế cổ yếm, ống rộng - vừa thoải mái
                                        tối đa lại không kém phần gợi cảm, kết hợp cùng đôi giày quai chữ T tôn dáng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pagination">
                                <div className="col-sm-12"><i className="fas fa-angle-left"></i><a href="#a">1</a><a href="#a">2</a><a
                                    href="#a">3</a><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}