import React, { Fragment } from 'react';;

export default function index(props) {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row main_top"><a href="#a">Trang Chủ/</a><a href="#a">Danh sách đơn hàng</a></div>
                    <div className="row new_product clearfix">
                        <div className="new_product_intro">
                            <h1>ĐƠN HÀNG</h1><img src={require('./../../assets/images/Drink/titleleft-dark.png')} alt="title-dark" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row table_top">
                                <p>DANH SÁCH ĐƠN HÀNG</p>
                            </div>
                            <div className="row table_middle"><a href="#a">Trạng thái tất cả(16) |</a><a href="#a">Đã hủy(10) |</a><a
                                href="#a">Chưa duyệt(0)</a><a href="#a">Đã thanh toán- chờ mua hàng |</a><a href="#a">Hàng đã
                            về- chờ giao hàng (0) |</a><a href="#a">Đã kết thúc (6)</a></div>
                            <div className="row table_bottom">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>MÃ HÓA ĐƠN/ NGÀY MUA HÀNG</th>
                                            <th>KHO NHẬN HÀNG</th>
                                            <th>SỐ SP</th>
                                            <th>TỔNG TIỀN</th>
                                            <th>TÌNH TRẠNG</th>
                                            <th>THAO TÁC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>00</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>LEANHGIANG89 - 17/06/2016 01:36 14/09/2015</td>
                                            <td>HÀ ĐÔNG</td>
                                            <td>7</td>
                                            <td>350.000đ</td>
                                            <td>Đã thanh toán</td>
                                            <td>Chi tiết</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="table_right">
                                    <h4>THÔNG TIN KHÁCH HÀNG</h4>
                                    <div className="row table_right_item">
                                        <div className="col-md-1"><i className="fas fa-user"></i></div>
                                        <div className="col-md-9">HaKiet hakiet96@gmail.com</div>
                                    </div>
                                    <div className="row table_right_item">
                                        <div className="col-md-1"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="col-md-9">Tòa nhà Hà Nội Group 442 Đội Cấn, Ba Đình, Hà Nội</div>
                                    </div>
                                    <div className="row table_right_item">
                                        <div className="col-md-1"><i className="fas fa-phone"></i></div>
                                        <div className="col-md-9">(04) 3768 9804</div>
                                    </div>
                                    <p>Chi tiết địa chỉ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}