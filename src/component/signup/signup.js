import React, { Fragment } from 'react';

class signin extends React.Component {
    render() {
        return (
            <Fragment>

                <main id="signup">
                    <div className="path"><span>Home / </span><span>Đăng ký</span></div>
                    <div className="info--customer">
                        <div className="info--customer-title">
                            <h4 className="text-uppercase">thông tin các nhân</h4>
                        </div>
                        <div className="info--customer-content d-flex">

                            <div className="left">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Họ và tên</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Số ĐT</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                                <input type="checkbox" id="signup-email" />
                                <label>Đăng ký nhận thông tin qua email</label>
                            </div>

                            <div className="right">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Địa chỉ email</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Website của bạn</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info--customer">
                        <div className="info--customer-title">
                            <h4 className="text-uppercase">thông tin tài khoản</h4>
                        </div>
                        <div className="info--customer-content d-flex">
                            <div className="left">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Mật khẩu</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Nhập lại mật khẩu</label><small> * :</small>
                                    </div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-signup">
                        <button className="text-uppercase not-color">quay lại</button>
                        <button className="text-uppercase">đăng ký</button>
                    </div>
                </main>



            </Fragment>
        );
    }
}

export default signin;