import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div className="contentll">
                    <div className="contact-wrapper">
                        <div className="trai">
                            <div className="dis-flex ">
                                <span className="txt1 ">
                                    <h2> {this.props.TenCuaHang} </h2>
                                </span>
                                <div className="flex-col ">
                                    <span className="txt1 ">
                                        <p><i className="bx bxs-map" /> Địa chỉ</p>
                                    </span>
                                    <span className="txt3">
                                        {this.props.DiaChi}
                                    </span>
                                </div>
                            </div>
                            <div className="dis-flex  ">
                                <div className="flex-col ">
                                    <span className="txt1 ">
                                        <p><i className="bx bxs-phone" /> Số điện thoại</p>
                                    </span>
                                    <span className="txt3">
                                        {this.props.SoDienThoai}
                                    </span>
                                </div>
                            </div>
                            <div className="dis-flex  ">
                                <div className="flex-col ">
                                    <span className="txt1 ">
                                        <p><i className="bx bxs-time" /> Thời gian làm việc</p>
                                    </span>
                                    <span className="txt3">
                                        {this.props.ThoiGianLamViec}
                                    </span>
                                </div>
                            </div>
                            <div className="dis-flex  ">
                                <div className="flex-col ">
                                    <span className="txt1">
                                        <p><i className="bx bxs-envelope" /> Email </p>
                                    </span>
                                    <span className="txt3">
                                        {this.props.Email}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="phai">
                            <h2> Thông tin liên lạc</h2>
                            <div className="text">
                                <div className="nd">
                                    <div className="txt4">Tên chủ của hàng:  </div>
                                    <div className="txt5"> {this.props.TenChu}</div>
                                </div>
                                <div className="nd">
                                    <div className="txt4">Số điện thoại: </div>
                                    <div className="txt5"> {this,this.props.SoDienThoai}</div>
                                </div>
                                <div className="nd">
                                    <div className="txt4">Email: </div>
                                    <div className="txt5"> {this.props.Email} </div>
                                </div>
                            </div>
                            <div className="text2">
                                <div className="nd">
                                    <div style={{ fontWeight: 'bold' }}> Thông tin giấy chứng nhận thực phẩm sạch </div>
                                </div>
                                <div className="nd">
                                    <div className="txt4">Ngày cấp: </div>
                                    <div className="txt5"> {this.props.NgayCap} </div>
                                </div>
                                <div className="nd">
                                    <div className="txt4">Loại chứng nhận: </div>
                                    <div className="txt5"> {this.props.LoaiChungNhan} </div>
                                </div>
                            </div>
                            <img src="/images/chungnhan.jpg" alt="" className="hinh" />
                        </div>
                    </div>
                    <div className="map" style={{ textAlign: 'center' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2794478757196!2d108.15109791468385!3d16.050982188892135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219370d701d93%3A0xa3bb790f8f618753!2zSMOyYSBLaMOhbmggTmFtLCBIb8OgIEtow6FuaCBOYW0sIExpw6puIENoaeG7g3UsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1634632588546!5m2!1svi!2s" width="1500px;" height="400px" style={{ borderRadius: '10px' }} />
                    </div>
                </div>
        )
    }
}
