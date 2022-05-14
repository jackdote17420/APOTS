import React, { Component } from 'react';

class Product extends Component { 
    render() {
        
        return (        
     <div className="card">
                <a href={"detail?idsanphamdangban=" + this.props.id}  >         
                    <img src={this.props.AnhSanPham} style={{width:260, height:300}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 style={{ fontWeight:"bold"}} className="card-title"> {this.props.TenNongSan}</h5>
                        <span style={{color:"red"}} className="card-text">Đơn giá: {this.props.Gia} VND/KG</span>
                        <br />
                        
                        <span className="card-text">Thương Hiệu: {this.props.ThuongHieu}</span>
                        <br />
                        <span className="card-text">Mô tả: {this.props.MoTa}</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default Product;


