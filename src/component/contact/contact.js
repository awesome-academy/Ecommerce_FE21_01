import React, { Fragment } from 'react';

export default function contact(props) {
    return (
        <Fragment>
            <main>
                <div className="path"><span>Home / </span><span>Liên hệ</span></div>
                <div className="map--contact">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.466932100143!2d108.20769987809705!3d16.02127162629135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421989ed6118eb%3A0xe5c0365c3071ef6b!2zxJDhu5lpIEPhuqVuLCBLaHXDqiBUcnVuZywgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1553325021464" style={{border:'0',width:'600',height:'450',frameborder:'0'}} title="this is map" ></iframe>
                </div>
                <div className="content--contact">
                    <div className="content--contact-input">
                        <h4 className="text-uppercase">thông tin liên hệ</h4>
                        <div className="input-child">
                            <div className="title-input">
                                <label>Họ và tên</label><small> * :</small>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="input-child">
                            <div className="title-input">
                                <label>Địa chỉ email</label><small> * :</small>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="input-child">
                            <div className="title-input">
                                <label>Số ĐT</label><small> * :</small>
                            </div>
                            <input type="text" />
                        </div>
                        <div className="input-child">
                            <div className="title-input">
                                <label>Bình luận</label><small> * :</small>
                            </div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="content--contact-info">
                        <figure className="position-relative"><img src={require('./../../assets/images/Green Shop/gs.png')} alt="green shop" /><span className="position-absolute">Món quà từ thiên nhiên</span></figure>
                        <p>DKT được thành lập với niềm đam mê và khát vọng thành công trong lĩnh vực Thương mại điện tử.Chúng tôi đã và đang khẳng định được vị trí hàng đầu bằng những sản phẩm</p>
                        <div className="phone-contact"><img src={require('./../../assets/images/Green Shop/phone.png')} alt="điện thoại" /><span>Điện thoại : (84 -4) 66.558.868 </span></div>
                        <div className="email-contact"><img src={require('./../../assets/images/Green Shop/email.png')} alt="mail" /><span>Email : info@dkt.com.vn</span></div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}