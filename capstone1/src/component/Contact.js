import React, { Component } from 'react';
import {  ttch } from '../firebase/firebase';
import { onValue } from '@firebase/database';
import ItemContact from './Itemdata/ItemContact';
class Contact extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[],
        }     
    }
    componentWillMount() {
        onValue(ttch, (snapshot) => {
            var arrayData=[];
            snapshot.forEach(function (childSnapshot) {                
                var key = childSnapshot.key;
                var AnhChungNhan = childSnapshot.val().AnhChungNhan;
                var DiaChi = childSnapshot.val().DiaChi;
                var Email = childSnapshot.val().Email;
                var LoaiChungNhan = childSnapshot.val().LoaiChungNhan;
                var NgayCap = childSnapshot.val().NgayCap;
                var SoDienThoai = childSnapshot.val().SoDienThoai;
                var TenChu = childSnapshot.val().TenChu;
                var TenCuaHang = childSnapshot.val().TenCuaHang;
                var ThoiGianLamViec = childSnapshot.val().ThoiGianLamViec;
               
                arrayData.push({
                    key:key,
                    AnhChungNhan:AnhChungNhan,
                    DiaChi: DiaChi,
                    Email:Email,
                    LoaiChungNhan:LoaiChungNhan,
                    NgayCap:NgayCap,
                    SoDienThoai:SoDienThoai,
                    TenChu:TenChu,
                    TenCuaHang:TenCuaHang,
                    ThoiGianLamViec:ThoiGianLamViec
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
            // console.log(this.state.dataFirebase);
           return this.state.dataFirebase.map((value,key) =>{
                return(
                 <ItemContact
                     key={key}
                     DiaChi={value.DiaChi}
                     Email={value.Email}
                     LoaiChungNhan={value.LoaiChungNhan}
                     NgayCap={value.NgayCap}
                     SoDienThoai={value.SoDienThoai}
                     TenChu={value.TenChu}
                     TenCuaHang={value.TenCuaHang}
                     ThoiGianLamViec={value.ThoiGianLamViec}
                 />
                )
            })
        }
            
    }



    render() {
        if(this.state.dataFirebase){
            return this.state.dataFirebase.map((value,key) =>{
                return (
                    <div>
                        <div className="banner" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
                            <h1> {value.TenChu} </h1>
                        </div>
                        {this.getData()}
                    </div>
                    );
        })
    }
    }
}


export default Contact;