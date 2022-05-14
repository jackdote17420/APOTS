
import React, { Component } from 'react'
import firebaseConfig from '../../firebase/firebaseConfig';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";
import EditData from './EditData';
export default class componentName extends Component {

    huySanPham=()=>{
        var idsp = this.props.item.key;
        firebase.initializeApp(firebaseConfig);
        firebase.database().ref('SanPhamDangBan/' + idsp).remove()
        alert('Hủy sản phẩm thành công !!!');
        }
    render() {
        return (
          
                    <div  className="card" >
                     

                    <a href={"detail?idsanphamdangban=" + this.props.id}  >         
                        <img src={this.props.AnhSanPham} style={{width:260, height:300}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 style={{ fontWeight:"bold"}} className="card-title"> {this.props.TenNongSan}</h5>
                            <span style={{color:"red"}} className="card-text">Đơn giá: {this.props.Gia} VND</span>
                            <br />                        
                            <br />
                            <span className="card-text">Thương Hiệu: {this.props.ThuongHieu}</span>
                            <br />
                            <span className="card-text">Mô tả: {this.props.MoTa}</span>
                        </div>
                    </a>  
                    <div>
                    <EditData idsp={this.props.id} />
                    <button onClick={()=>this.huySanPham()} style={{bottom:5, position:"absolute", width:"50%", right:10}} type="button" className="btn btn-danger" >Xóa sản phẩm  </button>
              
                    </div> 
                   
        
           </div>
      
        )
    }
}
