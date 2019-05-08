import React, { Fragment } from 'react';

class list_product extends React.Component {
    render() {
        return (
            <Fragment>
                <main id="list-product">
                    <div className="path"><span>Home / </span><span>Danh sách sản phẩm</span></div>
                    <section>
                        <aside>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Danh mục sản phẩm</span>
                            </div>
                            <ul>
                                <li>Cây chậu treo (10)</li>
                                <li>Cây có hoa (5)</li>
                                <li>Cây dây leo</li>
                                <li>Cây để bàn</li>
                                <li>Cây may mắn</li>
                                <li>Cây trang trí</li>
                                <li>Cây nội thất</li>
                            </ul>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Tìm theo giá</span>
                            </div>
                            <ul>
                                <li>200.000Đ - 400.000Đ</li>
                                <li>400.000Đ - 600.000Đ</li>
                                <li>600.000Đ - 800.000Đ</li>
                                <li>800.000Đ - 1.000.000Đ</li>
                                <li>1.000.000Đ - 1.200.000Đ</li>
                            </ul>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Tìm theo màu</span>
                            </div>
                            <div className="wrap-color">
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">xanh cây</span></div>
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">đỏ cam</span></div>
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">tím</span></div>
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">xanh trời</span></div>
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">vàng</span></div>
                                <div className="item-color d-flex align-items-center"><span></span><span className="text-capitalize">hồng</span></div>
                            </div>
                        </aside>
                        <article>
                            <div className="banner-list"></div>
                            <div className="select-list d-flex justify-content-between align-items-center">
                                <div className="nav nav-tabs"><a className="nav-item nav-link active" id="nav-grid-tab" href="#nav-grid" data-toggle="tab" >   <img src={require('./../../assets/images/Green Shop/list2.png')} alt="icon-list" /></a><a className="nav-item nav-link" id="nav-list-tab" href="#nav-list" data-toggle="tab"><img src={require('./../../assets/images/Green Shop/list1.png')} alt="icon-list" /></a></div>
                                <div className="option-select d-flex">
                                    <div className="select-item"><span>Sắp xếp theo</span>
                                        <select>
                                            <option>Tên sản phẩm</option>
                                        </select>
                                    </div>
                                    <div className="select-item"><span>Show</span>
                                        <select>
                                            <option>15</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid" aria-labelledby="nav-grid-tab">
                                    <div className="list-content">
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Chân Chim</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Danh Dự</p>
                                                <img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Chân Chim</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Chân Chim</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product position-relative">
                                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                            <div className="content">
                                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <div className="price">
                                                    <div className="price--new">375.000đ</div>
                                                    <div className="price--old">250.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-list" aria-labelledby="nav-list-tab">
                                    <div className="grid-content">
                                        <div className="item-list-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" />
                                            <div className="item-content">
                                                <h4>Cây ngọc ngân</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <p>Cây ngọc ngân là một loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn dành tặng người ấy.Ngọc ngân(Valentine) không chỉ đẹp ở phiến lá xanh đám trắng</p><span>279.000đ</span>
                                                <div className="btn-action d-flex align-items-center">
                                                    <button className="text-uppercase">mua ngay</button>
                                                    <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                                    <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-list-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" />
                                            <div className="item-content">
                                                <h4>Cây ngọc ngân</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <p>Cây ngọc ngân là một loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn dành tặng người ấy.Ngọc ngân(Valentine) không chỉ đẹp ở phiến lá xanh đám trắng</p><span>279.000đ</span>
                                                <div className="btn-action d-flex align-items-center">
                                                    <button className="text-uppercase">mua ngay</button>
                                                    <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                                    <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-list-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" />
                                            <div className="item-content">
                                                <h4>Cây ngọc ngân</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <p>Cây ngọc ngân là một loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn dành tặng người ấy.Ngọc ngân(Valentine) không chỉ đẹp ở phiến lá xanh đám trắng</p><span>279.000đ</span>
                                                <div className="btn-action d-flex align-items-center">
                                                    <button className="text-uppercase">mua ngay</button>
                                                    <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                                    <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-list-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" />
                                            <div className="item-content">
                                                <h4>Cây ngọc ngân</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <p>Cây ngọc ngân là một loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn dành tặng người ấy.Ngọc ngân(Valentine) không chỉ đẹp ở phiến lá xanh đám trắng</p><span>279.000đ</span>
                                                <div className="btn-action d-flex align-items-center">
                                                    <button className="text-uppercase">mua ngay</button>
                                                    <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                                    <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-list-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" />
                                            <div className="item-content">
                                                <h4>Cây ngọc ngân</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                                <p>Cây ngọc ngân là một loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn dành tặng người ấy.Ngọc ngân(Valentine) không chỉ đẹp ở phiến lá xanh đám trắng</p><span>279.000đ</span>
                                                <div className="btn-action d-flex align-items-center">
                                                    <button className="text-uppercase">mua ngay</button>
                                                    <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                                    <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <ul className="d-flex ml-auto">
                                    <li>Trang trước</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>Trang sau</li>
                                </ul>
                            </div>
                        </article>
                    </section>
                </main>
            </Fragment>
        );
    }
}
export default list_product;