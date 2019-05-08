import React, { Fragment } from 'react';

export default function index(props) {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row main_top"><a href="#a">Trang Chủ/</a><a href="#a">Địa chỉ</a></div>
                    <div className="row new_product clearfix">
                        <div className="new_product_intro">
                            <h1>ĐƠN HÀNG</h1><img src={require('./../../assets/images/Drink/titleleft-dark.png')} alt="title-dark" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 address_your">
                            <p>ĐỊA CHỈ CỦA BẠN</p>
                        </div>
                        <div className="col-sm-6 address_add"><a href="#a">Thêm địa chỉ</a></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 address_form">
                            <form>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Tên</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Họ &amp; tên đệm</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Công ty</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Địa chỉ</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Thành phố</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Quốc Tịch</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Postal/ Zip Code</label></div>
                                    <div className="col-md-10 login_input"><input type="text"  /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Phone</label></div>
                                    <div className="col-md-10 login_input"><input type="text"  /></div>
                                </div>
                            </form>
                            <div className="row col-sm-offset-2 address_check"><input type="checkbox" /><span>Đặt làm địa chỉ
                            mặc định</span></div>
                            <div className="row">
                                <div className="col-sm-10 col-sm-offset-2 address_tools"><button className="config" type="button">Chỉnh
                                sửa địa chỉ</button><span><button type="button">Xóa</button></span></div>
                            </div>
                        </div>
                        <div className="col-sm-6 address_form">
                            <form>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Tên</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Họ &amp; tên đệm</label></div>
                                    <div className="col-md-10 login_input"><input type="text"/></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Công ty</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Địa chỉ</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Thành phố</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Quốc Tịch</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Postal/ Zip Code</label></div>
                                    <div className="col-md-10 login_input"><input type="text" /></div>
                                </div>
                                <div className="row login_user">
                                    <div className="col-md-2 login_label"><label>Phone</label></div>
                                    <div className="col-md-10 login_input"><input type="text"  /></div>
                                </div>
                            </form>
                            <div className="row col-sm-offset-2 address_check"><input type="checkbox" /><span>Đặt làm địa chỉ
                            mặc định</span></div>
                            <div className="row">
                                <div className="col-sm-10 col-sm-offset-2 address_tools"><button className="config" type="button">Chỉnh
                                sửa địa chỉ</button><span><button type="button">Xóa</button></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="address_field">
                            <div className="col-sm-6 address_form">
                                <form>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Tên</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Họ &amp; tên đệm</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Công ty</label></div>
                                        <div className="col-md-10 login_input"><input type="text"  /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Địa chỉ</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Thành phố</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Quốc Tịch</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Postal/ Zip Code</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Phone</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row form_address_config"><a href="#aa">Chỉnh sửa địa chỉ</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="address_field">
                            <div className="col-sm-6 address_form">
                                <form>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Tên</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Họ &amp; tên đệm</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Công ty</label></div>
                                        <div className="col-md-10 login_input"><input type="text"  /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Địa chỉ</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Thành phố</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Quốc Tịch</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Postal/ Zip Code</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row login_user">
                                        <div className="col-md-2 login_label"><label>Phone</label></div>
                                        <div className="col-md-10 login_input"><input type="text" /></div>
                                    </div>
                                    <div className="row form_address_config"><a href="#aa">Chỉnh sửa địa chỉ</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}