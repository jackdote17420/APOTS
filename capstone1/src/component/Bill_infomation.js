import React, { Component } from 'react';
import { gh } from '../firebase/firebase';
import { onValue} from '@firebase/database';
import ItemGH from './Itemdata/ItemGH';
class Bill_infomation extends Component {

    constructor(props, context) {
        super(props, context)
        this.state={
            dataFirebase:[]
        } 
    }

    componentWillMount() {
        onValue(gh, (snapshot) => {
            var arrayData=[];
            snapshot.forEach(function (childSnapshot) {                
                var key = childSnapshot.key;
                var TenNongSan = childSnapshot.val().TenNongSan;
                var Gia = childSnapshot.val().Gia;
                var Anhsanpham = childSnapshot.val().Anhsanpham;
                var SoLuong = childSnapshot.val().SoLuong;
                var Thanhtien = childSnapshot.val().Thanhtien;
                var Tong = childSnapshot.val().Tong;
               
                arrayData.push({
                    key:key,
                    TenNongSan:TenNongSan,
                    Gia: Gia,
                    SoLuong:SoLuong,
                    Thanhtien:Thanhtien,
                    Anhsanpham:Anhsanpham,
                    Tong:Tong
                })               
            })
            // console.log(arrayData);
            this.setState({
                dataFirebase:arrayData
            });
        });
    }
    getData=() =>{
        if(this.state.dataFirebase){
            if(this.state.dataFirebase.length == 0) {
                return(
                    <div style={{ backgroundImage: 'url(/images/emptycart.png)', height:300 }} >
                        <h2 style={{ textAlign:"center", fontSize:50, fontFamily:"monospace" }}>Không có sản phẩm trong giỏ hàng</h2>
                        
                    </div>
                )
            }else{
                return this.state.dataFirebase.map((value,key) =>{
                    return(
                      <ItemGH 
                      key={key} id={value.key}
                      item={value}
                      arrayData={value.arrayData}
                      TenNongSan={value.TenNongSan}
                      Gia={value.Gia} 
                      SoLuong={value.SoLuong} 
                      Thanhtien={value.Thanhtien}
                      Tong={value.Tong}
                      Anhsanpham={value.Anhsanpham}  />
                    )
                })
            }
          
        } 
    
            
    }
    render() {
        return (
            <div>
                {/* banner */}
                <div className="banner" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
                    <h1> Thông tin đơn hàng</h1>
                </div>
                {/* content */}
                <div className="list-product-bill">
                   {this.getData()}
                </div>
                {/* end content */}
            </div>

        );
    }
}

export default Bill_infomation;