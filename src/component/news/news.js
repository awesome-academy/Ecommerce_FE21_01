import React, { Fragment } from 'react';

class news extends React.Component {
    render() {
        return (
            <Fragment>

                <main id="new">
                    <div className="path"><span>Home / </span><span>Cây dạ lam</span></div>
                    <div className="new d-flex">
                        <aside>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Danh mục sản phẩm</span>
                            </div>
                            <ul>
                                <li>Cây chậu treo(10)</li>
                                <li>Cây có hoa(5)</li>
                                <li>Cây dây leo</li>
                                <li>Cây để bán</li>
                                <li>Cây may mắn</li>
                                <li>Cây trang trí </li>
                                <li>Cây nội thất</li>
                            </ul>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Tin tức nổi bật</span>
                            </div>
                            <div className="new-highligh">
                                <div className="item-highligh d-flex"><img src={require('./../../assets/images/Green Shop/new1.png')} alt="hoa" />
                                    <p>Hướng dẫn và lựa chọn bố trí cây xanh trong phòng khách</p>
                                </div>
                                <div className="item-highligh d-flex"><img src={require('./../../assets/images/Green Shop/new10.png')} alt="hoa" />
                                    <p>Những sai lầm nên tránh khi bố trí cây xanh trong nhà</p>
                                </div>
                                <div className="item-highligh d-flex"><img src={require('./../../assets/images/Green Shop/new11.png')} alt="hoa" />
                                    <p>7 loại cây xanh để bàn đang được giới văn phòng ưa chuộng</p>
                                </div>
                                <div className="item-highligh d-flex"><img src={require('./../../assets/images/Green Shop/new12.png')} alt="hoa" />
                                    <p>Hướng dẫn lựa chọn cây cảnh trang trí trong văn phòng</p>
                                </div>
                                <div className="item-highligh d-flex"><img src={require('./../../assets/images/Green Shop/new13.png')} alt="hoa" />
                                    <p>4 loại cây cảnh thích hơp để bày trí ở  đại sảnh</p>
                                </div>
                            </div>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Blog tag</span>
                            </div>
                            <div className="blog-tag"><span>Cây văn phòng</span><span>Cây phát lộc</span><span>Cây xanh</span><span>Cây trang trí</span><span>Cây</span><span>Plants</span><span>Sức khoẻ</span><span>Quà tặng</span><span>Lưu niệm</span>
                            </div>
                        </aside>

                        <section>
                            <div className="section-new">
                                <h4>Cách bố trí chậu hoa trước cửa ngay lần đầu tiên</h4>
                                <div className="date-new"><img src={require('./../../assets/images/Green Shop/date.png')} alt="ngày" /><span>20/12/2015</span><img src={require('./../../assets/images/Green Shop/time.png')} alt="giờ" /><span>11:20:00 AM</span><img src={require('./../../assets/images/Green Shop/comment.png')} alt="comment" /><span>0 Bình luận  </span></div><img className="w-100" src={require('./../../assets/images/Green Shop/new11.png')} alt="avt" />
                                <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần không gian trước cửa nhà luôn được đầu tư và trang trí khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà, là ấn tượng đầu tiên khi một vị khách ghé chơi nhà bạn đấy. Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí chậu cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            </div>
                            <div className="section-new">
                                <h4>Cách bố trí chậu hoa trước cửa ngay lần đầu tiên</h4>
                                <div className="date-new"><img src={require('./../../assets/images/Green Shop/date.png')} alt="ngày" /><span>20/12/2015</span><img src={require('./../../assets/images/Green Shop/time.png')} alt="giờ" /><span>11:20:00 AM</span><img src={require('./../../assets/images/Green Shop/comment.png')} alt="comment" /><span>0 Bình luận  </span></div><img className="w-100" src={require('./../../assets/images/Green Shop/new11.png')} alt="avt" />
                                <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần không gian trước cửa nhà luôn được đầu tư và trang trí khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà, là ấn tượng đầu tiên khi một vị khách ghé chơi nhà bạn đấy. Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí chậu cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            </div>
                            <div className="section-new">
                                <h4>Cách bố trí chậu hoa trước cửa ngay lần đầu tiên</h4>
                                <div className="date-new"><img src={require('./../../assets/images/Green Shop/date.png')} alt="ngày" /><span>20/12/2015</span><img src={require('./../../assets/images/Green Shop/time.png')} alt="giờ" /><span>11:20:00 AM</span><img src={require('./../../assets/images/Green Shop/comment.png')} alt="comment" /><span>0 Bình luận  </span></div><img className="w-100" src={require('./../../assets/images/Green Shop/new11.png')} alt="avt" />
                                <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ, phần không gian trước cửa nhà luôn được đầu tư và trang trí khá bắt mắt. Cũng có thể nói đây là bộ mặt của ngôi nhà, là ấn tượng đầu tiên khi một vị khách ghé chơi nhà bạn đấy. Hãy cùng Sài Gòn Hoa tham khảo một vài cách bố trí chậu cây hoa cảnh ngay trước cửa nhà sao cho ấn tượng nhất nhé!</p>
                            </div>
                            <div className="pagination-new d-flex justify-content-end">
                                <li>Trang trước</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>Trang cuối</li>
                            </div>
                        </section>
                    </div>
                </main>

            </Fragment>
        );
    }
}
export default news;