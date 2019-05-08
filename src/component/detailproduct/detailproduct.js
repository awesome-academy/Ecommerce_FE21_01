import React, { Fragment } from 'react';

class detailproduct extends React.Component {
    render() {
        return (
            <Fragment>
                <main id="detail-product">
                    <div class="path"><span>Home / </span><span>Cây  dạ lam</span></div>
                    <div class="detail--info d-flex">
                        <div class="galary"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="danh dự" />
                            <div class="wrap--galary-item d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="danh dự" /><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="dạ lam" /><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="chân chim" /><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cota" /><img src={require('./../../assets/images/Green Shop/spx2-14.png')} alt="cota" /></div>
                        </div>
                        <div class="detail--info-content">
                            <h4>Cây dạ lam</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" /><br /><span>4.099.000 đ</span>
                            <label>4.099.000 đ</label>
                            <p>Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                            <div class="quantity d-flex align-items-center"><span>Số lượng</span>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </div>
                            <div class="wrap-btn d-flex">
                                <button class="text-uppercase">mua ngay</button>
                                <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                            </div>
                            <div class="social-product"><img src={require('./../../assets/images/Green Shop/like.png')} alt="like" />
                                <div class="number-img d-inline-block">0</div><img src={require('./../../assets/images/Green Shop/twitter1.png')} alt="twitter1" /><img src={require('./../../assets/images/Green Shop/google.png')} alt="google" />
                                <div class="number-img d-inline-block">0</div><img src={require('./../../assets/images/Green Shop/share.png')} alt="share" />
                            </div>
                        </div>
                    </div>
                    <div class="detail-info2">
                        <div class="nav nav-tabs"><a class="nav-item nav-link active" id="nav-grid-tab" href="#nav-detail1" data-toggle="tab" onclick="return false">Thông tin sản phẩm    </a><a class="nav-item nav-link" id="nav-list-tab" href="#nav-detail2" data-toggle="tab" onclick="return false">Khách hàng đánh giá</a><a class="nav-item nav-link" id="nav-list-tab" href="#nav-detail3" data-toggle="tab" onclick="return false">Thẻ tag</a></div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-detail1" aria-labelledby="nav-grid-tab">
                                <p>
                                    Tên phổ thông: Dạ lam, Huỳnh tinh cảnh, Dong vằn.</p>
                                <p>
                                    Tên khoa học: Calathea zebrina</p>
                                <p>
                                    Họ thực vật: Marantaceae (Củ dong).</p>
                                <p>Chiều cao: 0,8-1,2m</p>
                                <p>Cây dạ lam có nguồn gốc từ Brazil, được du nhập và phân bố rộng khắp ở Việt Nam.</p>
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.
                                     Đây là loại cây có dáng đẹp, màu lá mướt mát, tươi khỏe, cây rất phù hợp trồng chậu trang trí nội thất-văn phòng.
                                     Ngoài ra, cây còn có đặc điểm lọc khí, làm xanh mát môi trường, giúp điều hòa không khí, đặc biệt tốt cho những môi trường thường xuyên sử dụng các loại máy móc tảng nhiệt. Có thể bày cây ở hành lang hay ở giữa sảnh, đặt ở cạnh bàn làm việc hoặc trang trí các góc phòng có diện tích trung bình
                                </p>
                            </div>
                            <div class="tab-pane fade" id="nav-detail2" aria-labelledby="nav-list-tab">
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                                <p>
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-detail3" aria-labelledby="nav-grid-tab">
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                                <p>
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.</p>
                            </div>
                        </div>
                    </div>
                    <div class="title d-flex justify-content-between align-items-center"><span class="text-capitalize">Sản phẩm cùng loại</span>
                        <div class="arrow d-flex">
                            <div class="arrow-left"></div>
                            <div class="arrow-right"></div>
                        </div>
                    </div>
                    <div class="product--relate">
                        <div class="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                            <div class="content">
                                <p>Cây cọ Nhật</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div class="price">
                                    <div class="price--new">250.000 đ</div>
                                    <div class="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div class="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                            <div class="content">
                                <p>Cây Hồng Môn</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div class="price">
                                    <div class="price--new">250.000 đ</div>
                                    <div class="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div class="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="hoa" /></figure>
                            <div class="content">
                                <p>Cây Phát Lộc</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div class="price">
                                    <div class="price--new">250.000 đ</div>
                                    <div class="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div class="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                            <div class="content">
                                <p>Cây Kim Ngân</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div class="price">
                                    <div class="price--new">250.000 đ</div>
                                    <div class="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}
export default detailproduct;