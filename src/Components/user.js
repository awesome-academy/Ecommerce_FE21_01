import React from 'react';
import classNames from 'classnames';

class user extends React.Component {

    Toggle=()=>{
        let toggle = document.getElementsByClassName("config")[0];
        if( toggle.style.display === 'none' ){
            toggle.style.display = 'block';
        }else{
            toggle.style.display = 'none';
        }
    }

    render() {
        return (
            <>

                <div className="row text-center intro">
                    Danh Sách User
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Và Tên</th>
                            <th>Số ĐT</th>
                            <th>Email</th>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Công Cụ</th>
                        </tr>
                    </thead>
                    <tbody className="table-td">
                        <tr>
                            <td>01</td>
                            <td>Hà Tuấn Kiệt</td>
                            <td>0934754627</td>
                            <td>kiethao112@yahoo.com.vn </td>
                            <td>naruto</td>
                            <td>boruto123</td>
                            <td>

                                <button onClick={ this.Toggle } type="button" className="btn btn-success btn-table">Sửa<i className="fas fa-wrench"></i></button>
                                <button type="button" className="btn btn-warning btn-table">Xóa<i className="fas fa-trash-alt"></i></button>

                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Hà Tuấn Kiệt</td>
                            <td>0934754627</td>
                            <td>kiethao112@yahoo.com.vn </td>
                            <td>naruto</td>
                            <td>boruto123</td>
                            <td>

                                <button onClick={ this.Toggle } type="button" className="btn btn-success btn-table">Sửa<i className="fas fa-wrench"></i></button>
                                <button type="button" className="btn btn-warning btn-table">Xóa<i className="fas fa-trash-alt"></i></button>

                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Hà Tuấn Kiệt</td>
                            <td>0934754627</td>
                            <td>kiethao112@yahoo.com.vn </td>
                            <td>naruto</td>
                            <td>boruto123</td>
                            <td>

                                <button onClick={ this.Toggle } type="button" className="btn btn-success btn-table">Sửa<i class="fas fa-wrench"></i></button>
                                <button type="button" className="btn btn-warning btn-table">Xóa<i class="fas fa-trash-alt"></i></button>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="config">

                    <div className="">

                        <form >
                            <legend>Sửa Thông Tin</legend>

                            <div className="form-group">
                                <label>Họ Và Tên</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Số ĐT</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Tài Khoản</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <input type="text" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-primary submit"> Lưu </button>
                        </form>

                    </div>

                </div>
            </>
        );
    }
}
var arr = ['b', {
    c: true,
    d: false
}]
console.log(classNames('a', arr));

export default user;