import React, { Component } from 'react';
import { gh, spdb } from '../firebase/firebase';
import { onValue } from '@firebase/database';
import ItemDetail from '../component/Itemdata/ItemDetail'
import {push} from "firebase/database";
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    
}
class Detail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[]
        }     
    }
   
    componentWillMount() {
        onValue(spdb, (snapshot) => {
            var arrayData=[];
            var id = GetURLParameter('idsanphamdangban');
            snapshot.forEach(function (childSnapshot) {                
                var key = childSnapshot.key;
                var TenNongSan = childSnapshot.val().TenNongSan;
                var Gia = childSnapshot.val().Gia;
                var XuatXu = childSnapshot.val().XuatXu;
                var ThuongHieu = childSnapshot.val().ThuongHieu;
                var MoTa = childSnapshot.val().MoTa;
                var NgayBatDauTrong =childSnapshot.val().NgayBatDauTrong;
                var NgayKetThucTrong = childSnapshot.val().NgayKetThucTrong;
                var PhanBon = childSnapshot.val().PhanBon;
                var SoLuong =childSnapshot.val().SoLuong;
                var LoaiChungNhan = childSnapshot.val().LoaiChungNhan;
                var AnhChungNhan = childSnapshot.val().AnhChungNhan;
                var AnhSanPham = childSnapshot.val().AnhSanPham;
               
                if(childSnapshot.key === id) {
                    console.log("id = "+id);
                    arrayData.push({
                        key:key,
                        TenNongSan:TenNongSan,
                        Gia: Gia,
                        XuatXu:XuatXu,
                        ThuongHieu:ThuongHieu,
                        MoTa:MoTa,
                        NgayBatDauTrong:NgayBatDauTrong,
                        NgayKetThucTrong :NgayKetThucTrong,
                        PhanBon :PhanBon ,
                        SoLuong:SoLuong,
                        LoaiChungNhan:LoaiChungNhan,
                        AnhChungNhan: AnhChungNhan,
                        AnhSanPham:AnhSanPham
                    }) 
                }
                             
            })
            this.setState({
                dataFirebase:arrayData
            });
        })
    }
    addGH=(item)=>{
        push(gh, item);
        alert('thêm thành công');
    }
    getData=() =>{
        if(this.state.dataFirebase){     
           return this.state.dataFirebase.map((value,key) =>{
                return(
                    <ItemDetail  
                    getDt={(item) =>this.addGH(item)}
                    TenNongSan={value.TenNongSan}
                    Gia={value.Gia} 
                    XuatXu={value.XuatXu} 
                    ThuongHieu={value.ThuongHieu}
                    MoTa={value.MoTa}
                    NgayBatDauTrong={value.NgayBatDauTrong}
                    NgayKetThucTrong={value.NgayKetThucTrong}
                    PhanBon={value.PhanBon}
                    SoLuong={value.SoLuong}
                    LoaiChungNhan={value.LoaiChungNhan}
                    AnhSanPham={value.AnhSanPham}
                     />
                )
            })
        }
            
    }
   
    render() {
        return (
            <div>
                <div className="banner" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
                    <h1> Chi tiết sản phẩm</h1>
                </div>
                <div className=" detail">
                  {this.getData()}
                    <div className="bot-detail">
                        <div className="nut">
                            <a href="bill"><div className=" btnbot ">Xem Giỏ hàng   </div></a>
                            <a href="store"><div className=" btnbot ">Cửa hàng</div></a>
                        </div>
                        <img src="/images/qr.jpg" alt="" className="qrcode" />
                    </div>
                </div>
            </div>
             

        );
       
    }
}

export default Detail;