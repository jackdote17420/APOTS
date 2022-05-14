import React, { Component } from 'react'
import ThanhToan from '../Authentication/ThanhToan';

export default class componentName extends Component {
    constructor(props) {
        super(props );
        this.state={
            SoLuong: 1,
            Tong: 1 *this.props.Gia,
            Thanhtien:1* this.props.Gia + 25000,
            Anhsanpham:""
        }
        
    }
    isChange=(event) =>{
        const name=event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value,   
            Thanhtien: value * this.props.Gia + 25000,
            Tong: value* this.props.Gia,      
        });
    }

    addData=(TenNongSan, SoLuong, Gia, Thanhtien, Tong, Anhsanpham ) =>{
        var item={};
        item.TenNongSan=TenNongSan;
        item.SoLuong=SoLuong ;
        item.Gia=Gia;
        item.Thanhtien=Thanhtien;
        item.Tong = Tong;
        item.Anhsanpham= Anhsanpham;
        // console.log(item);
        this.props.getDt(item);
    }

    render() {
        return (
            <div className="top-detail">
                        <div className="left-detail">
                        
                            <img src={this.props.AnhSanPham} alt="" className="hinhsp" />
                            <p>Tên sản phẩm:  {this.props.TenNongSan} </p>
                            <p>Giá: {this.props.Gia} VND/KG </p>
                            <p>Xuất xứ: {this.props.XuatXu} </p>
                            <p>Thương hiệu: {this.props.ThuongHieu} </p>
                            <p>Mô Tả: {this.props.MoTa} </p>
                        </div>
                        <div className="right-detail">
                            <div className="product-detail">
                                <div className="col-5 noidung">
                                    <h2 style={{ color: 'blue' }}> {this.props.ThuongHieu} </h2>
                                    <p style={{ borderBottom: '1px solid black' }}><i className="bx bxs-calendar" /> Ngày bắt đầu trồng: {this.props.NgayBatDauTrong} </p>
                                    <p style={{ borderBottom: '1px solid black' }}><i className="bx bxs-calendar" /> Ngày kết thúc trồng: {this.props.NgayKetThucTrong} </p>
                                    <p>-Phân bón: {this.props.PhanBon} </p> 
                                    <p style={{ borderBottom: '1px solid black' }}><i className="bx bxs-badge-check" /> Chứng nhận bởi:  {this.props.LoaiChungNhan} </p>                                                            
                                    <p>-Tồn kho: {this.props.SoLuong} </p>
                                </div>
                                <div className="col-7">
                                    <img src="./images/chungnhan.jpg" alt="" className="hinh1" />
                                </div>
                            </div>
                            <div className="oder">
                                <div className="text3 col-5">
                                    <h2 style={{ color: 'blue' }}>Đặt hàng</h2>
                                    <p style={{ borderBottom: '1px solid black', color:"red" }}>Giá: {this.props.Gia} VND / KG </p>
                                    <p>Giảm giá: 10%</p>
                                    <span>số lượng:  (KG) </span>
                                    <div className="plusbtn">                       
                                        <input onChange={ (event) =>this.isChange(event)} name="SoLuong" style={{ width: '70px', border: 'none', textAlign: 'center', backgroundColor: 'rgb(184, 179, 179)' }} type="number" max={99} min={1} id="inc" defaultValue={1} />                        
                                    </div>
                                </div>
                                <div className="total col-7">
                                    <h3 style={{ color: 'blue' }}>Tổng: {this.state.Tong}</h3>
                                    <p>Giảm: 10%</p>
                                    <p>Phí vận chuyển: 25.000</p>
                                    <h3 style={{ color: 'blue' }}>Thành tiền: {this.state.Thanhtien}</h3>
                                </div>
                                <div className="btn-buy "> <ThanhToan></ThanhToan> </div>  
                                <input  value="Thêm vào giỏ hàng" type="reset"
                                className="btn-add " onClick={()=>this.addData(
                                        this.props.TenNongSan,
                                        this.state.SoLuong,
                                        this.props.Gia,
                                        this.state.Thanhtien,
                                        this.state.Tong,
                                        this.props.AnhSanPham,
                                )}  ></input>                               
                            </div>
                        </div>
                    </div>
        )
    }
}
