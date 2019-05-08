import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

class signin extends React.Component {
    render() {
        return (
            <Fragment>
                <main id="signin">
                    <div className="path"><span>Home / </span><span>Đăng nhập</span></div>
                    <div className="signin--content">
                        <div className="signin--content-input">
                            <h4>thông tin các nhân</h4>
                            <div className="input-child">
                                <div className="title-input">
                                    <label>Email của bạn</label>
                                </div>
                                <input type="text" />
                            </div>
                            <div className="input-child">
                                <div className="title-input">
                                    <label>Mật khẩu</label>
                                </div>
                                <input type="text" />
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" />
                                <label>Ghi nhớ tài khoản</label><i>Bạn quên mật khẩu</i>
                            </div>
                            <button className="text-uppercase">đăng nhập</button>
                        </div>
                        <div className="signin--content-question">
                            <h4>bạn chưa có tài khoản</h4>
                            <p>
                                Đăng kí tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên citybike</p>
                            <button className="text-uppercase"><Link to="/signup">đăng ký</Link></button>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default signin;