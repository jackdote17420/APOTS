import React, { Component  } from 'react';
import { onValue } from '@firebase/database';
import ItemStore from './Itemdata/ItemStore';
import { auth, spdb } from '../firebase/firebase';
import { Avatar } from '@material-ui/core';
import 'firebase/auth';



class Store extends Component {

    
    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[], 
            us:[]       
        }     
    }

    
    componentWillMount() {
     
        onValue(spdb, (snapshot) => {
            var arrayData=[];
            snapshot.forEach(function (childSnapshot) {                
                var key = childSnapshot.key;
                var TenNongSan = childSnapshot.val().TenNongSan;
                var Gia = childSnapshot.val().Gia;
                var XuatXu = childSnapshot.val().XuatXu;
                var ThuongHieu = childSnapshot.val().ThuongHieu;
                var MoTa = childSnapshot.val().MoTa;
                var AnhSanPham = childSnapshot.val().AnhSanPham;
                arrayData.push({
                    key:key,
                    TenNongSan:TenNongSan,
                    Gia: Gia,
                    XuatXu:XuatXu,
                    ThuongHieu:ThuongHieu,
                    MoTa:MoTa,
                    AnhSanPham:AnhSanPham
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
           return this.state.dataFirebase.map((value,key) =>{
                return(
                    <ItemStore key={key} id={value.key}
                    item={value}
                    TenNongSan={value.TenNongSan}
                    Gia={value.Gia}  
                    ThuongHieu={value.ThuongHieu}
                    MoTa={value.MoTa}
                    AnhSanPham={value.AnhSanPham}
                    />
                )
            })
        }
            
    }
    render() {   
        
        return (
            <div className="store">
                <div className="top-store">
                    <div className="backgroud-store">
                        <div className="profile-store">
                        <Avatar 
                                style={{
                                    height: 250,
                                    width: 300,
                                    cursor: "pointer",
                                    left:25,
                                    top:250,
                                    backgroundColor: "#EEBC1D"
                                }}          
                            />
                            <div className="name-store">                       
                                <h3> Abc store</h3>    
                                
                            </div>
                        </div>
                        <div className="profile-stt">
                            <div className="btn-follow">
                                <a href>Theo d??i<i className="fab fa-gratipay" /></a>
                            </div>
                            <div className="btn-call">
                                <a href="contact">Li??n l???c<i className="fas fa-phone-volume" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: 'url(/images/farm1.png)', width: '100%', height: '10px' }} />
                <div className="store-detail">
                    <h3>CUNG C???P C??C LO???I H??NG N??NG S???N</h3>
                    <a className="store-infor" href="contact">TH??NG TIN C???A H??NG</a>
                    <div className="list-detail-store">
                        <div className="list-detail">
                            <a className="list-detail-item btn-outline-primary" href>B??N CH???Y</a>
                            <a className="list-detail-item btn-outline-primary" href>C?? S???N</a>
                            <a className="list-detail-item btn-outline-primary" href>S???N PH???M M???I</a>
                            <a className="list-detail-item btn-outline-primary" href>T???T C??? S???N PH???M</a>
                            <a className="list-detail-item btn-outline-primary" href>H??NG GI???M GI??</a>
                        </div>
                        <div className="upload-store">
                            <a className="upload-store btn-outline-primary" href="postproduct">????ng th??m s???n ph???m</a>
                        </div>
                    </div>
                </div>
                <div className="list-product-store container">
                <div className="list-card">              
                  {this.getData()}                                           
                </div>
                    <div className="redirect-store">
                        <button type="button" className="btn btn-info">Xem th??m &gt;&gt;&gt; </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Store;