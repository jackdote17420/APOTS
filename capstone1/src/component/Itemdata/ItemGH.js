import React, { Component } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";
import firebaseConfig from '../../firebase/firebaseConfig';
import ThanhToan from '../Authentication/ThanhToan';
class ItemGH extends Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            ID:""
        }
    }
    
    huySanPham=()=>{
    var idsp = this.props.item.key;
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref('GioHang/' + idsp).remove()
    alert('Hủy sản phẩm thành công !!!');
    }
    
    render() {
            return (
                
                <div className="list-product-box">
                <div className="LeftColumn">
                <img src={this.props.Anhsanpham} style={{width:300, height:300}} className="card-img-top" alt="..." />
                    <p className="product-name">
                    {this.props.TenNongSan}
                    </p>
                    <p className="product-infor">
                        GIÁ: {this.props.Gia} / KG 
                    </p>
                    <hr />
                    <p className="product-quantity">
                        Số Lượng: {this.props.SoLuong}  KG
                    </p>
                    <hr />
                </div>
                <div className="RightColumn">
                    <div className="bill-information">
                        <p className="bill-total">
                            Tổng: {this.props.Tong} VND
                        </p>
                        <p className="bill-details">
                            - Giảm 10%: -25 000
                            <br />
                            - Phí vận chuyển: 25 000
                        </p>
                        <hr />
                        <p className="bill-total-last">
                            Thành tiền: {this.props.Thanhtien} VND
                        </p>
                    </div>
                    <div className="bill-button">      
                        <ThanhToan/> 
                        <input onClick={()=>this.huySanPham()}   className="btn-del" value="Hủy" type="reset"  ></input> 
                    </div>
                </div>
                <div className="clear" />
                </div>
            )
     }
    }


export default ItemGH

