import React, { Component } from 'react';

class Certification extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <div className="banner" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
                    <h1> Thông tin chứng nhận</h1>
                </div>
                {/* content */}
                <div className="content">
                    <div className="left">
                        <img src="./images/sanpham.jpg" alt="" className="hinh" />
                        <p>Tên sản phẩm: Dưa Hấu có hạt</p>
                        <p>Giá: 25.000đ / kg</p>
                        <p>Xuất xứ: Đồng Tháp</p>
                        <p>Thương hiệu: Vinh Hà</p>
                    </div>
                    <div className="table-wrapper">
                        <table className="fl-table">
                            <tbody>
                                <tr>
                                    <th> Chứng nhận: </th>
                                    <td>VIETGAP</td>
                                </tr>
                                <tr>
                                    <th> Nơi trồng: </th>
                                    <td>Thôn Duyên Yết, Hồng Thái, Phú Xuyên, Hà Nội</td>
                                </tr>
                                <tr>
                                    <th>Ngày trồng: </th>
                                    <td>23/7/2021</td>
                                </tr>
                                <tr>
                                    <th>Ngày thu hoạch:</th>
                                    <td>22/9/2021</td>
                                </tr>
                                <tr>
                                    <th>Ngày bắt đầu vận chuyển:</th>
                                    <td>23/9/2021</td>
                                </tr>
                                <tr>
                                    <th>Thời gian đến nay: </th>
                                    <td>12 ngày</td>
                                </tr>
                                <tr>
                                    <th>Đơn vị trung gian:</th>
                                    <td>Không</td>
                                </tr>
                            </tbody><tbody>
                            </tbody></table>
                    </div>
                </div>
            </div>

        );
    }
}

export default Certification;