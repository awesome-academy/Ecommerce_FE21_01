import React, { Fragment } from 'react';

class index extends React.Component {
    render() {
        return (
            <Fragment>
                <main id="cart">
                    <div className="path"><span>Home / </span><span>Giỏ hàng</span></div>
                    <h4 className="text-uppercase">giỏ hàng</h4>
                    <div className="cart">
                        <table>
                            <thead>
                                <td className="text-center text-white text-uppercase">hình ảnh</td>
                                <td className="text-center text-white text-uppercase">tên sản phẩm</td>
                                <td className="text-center text-white text-uppercase">đơn giá</td>
                                <td className="text-center text-white text-uppercase">số lượng</td>
                                <td className="text-center text-white text-uppercase">thành tiền</td>
                                <td className="text-center text-white text-uppercase">xoá</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cây" /></figure>
                                    </td>
                                    <td className="text-uppercase">cây văn phòng</td>
                                    <td>270.000đ</td>
                                    <td>
                                        <li>1</li>
                                    </td>
                                    <td>270.000đ</td>
                                    <td><img src={require('./../../assets/images/Green Shop/delete.png')} alt="delete" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cây" /></figure>
                                    </td>
                                    <td className="text-uppercase">cây văn phòng</td>
                                    <td>270.000đ</td>
                                    <td>
                                        <li>1</li>
                                    </td>
                                    <td>270.000đ</td>
                                    <td><img src={require('./../../assets/images/Green Shop/delete.png')} alt="delete" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cây" /></figure>
                                    </td>
                                    <td className="text-uppercase">cây văn phòng</td>
                                    <td>270.000đ</td>
                                    <td>
                                        <li>1</li>
                                    </td>
                                    <td>270.000đ</td>
                                    <td><img src={require('./../../assets/images/Green Shop/delete.png')} alt="delete" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="select-buy d-flex justify-content-end">
                        <button className="text-uppercase not-color">huỷ đơn hàng</button>
                        <button className="text-uppercase">tiếp tục mua</button>
                    </div>
                    <div className="total-pay d-inline-block float-right">
                        <table className="d-flex flex-column">
                            <tbody>
                                <tr>
                                    <td>tổng tiền (chưa thuế)</td>
                                    <td>270.000 đ</td>
                                </tr>
                                <tr>
                                    <td>thuế (vat 10%)</td>
                                    <td>27.000 đ    </td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <td>tổng phải thanh toán</td>
                                    <td>297.000 đ</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <button className="text-uppercase">thanh toán</button>
                </main>
            </Fragment>
        );
    }
}

export default index;