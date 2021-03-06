import React, { Component } from 'react';
import { spdb, sptm } from '../firebase/firebase';
import Product from './Itemdata/Product';
import FindProduct from './Itemdata/FindProduct';
import { onValue } from '@firebase/database';
class Index extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[],
            dtFirebaseTm:[]
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
                var AnhSanPham = childSnapshot.val().AnhSanPham
               
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
        onValue(sptm, (snapshot)=>{
            var arrayDatatm=[];
            snapshot.forEach(function (childSnapshot) { 
                var idsp = childSnapshot.key;
                var Ten = childSnapshot.val().TenNongSan;
                var Mota = childSnapshot.val().MoTa;
                var sdt = childSnapshot.val().SoDienThoai;
                var sl = childSnapshot.val().SoLuong;
                var asp = childSnapshot.val().AnhSanPham;

                arrayDatatm.push({
                    idsp: idsp,
                    Ten:Ten,
                    Mota: Mota,
                    sdt: sdt,
                    sl:sl,
                    asp:asp
                })     
             })
             this.setState({
                dtFirebaseTm:arrayDatatm
            });
            
        })
    }
    getData=() =>{
        if(this.state.dataFirebase){
            // console.log(this.state.dataFirebase);
           return this.state.dataFirebase.map((value,key) =>{
                return(
                  <Product key={key} id={value.key}
                  TenNongSan={value.TenNongSan}
                  Gia={value.Gia} 
                  XuatXu={value.XuatXu} 
                  ThuongHieu={value.ThuongHieu}
                  MoTa={value.MoTa}
                  AnhSanPham={value.AnhSanPham}  />
                )
            })
        }
            
    }
     
    getDatatm=() =>{
        if(this.state.dtFirebaseTm){
            // console.log(this.state.dataFirebase);
           return this.state.dtFirebaseTm.map((value,key) =>{
                return(
                 <FindProduct
                     Ten={value.Ten}
                    Mota={value.Mota}
                    sl={value.sl}
                    sdt={value.sdt}
                    asp={value.asp}
                 />
                )
            })
        }
            
    }


    
    render() {
        return (
            <div>
                <div className="header-bottom">
                    <h1 className="header-bottom-item-1">AGRICULTURAL PRODUCTS ONLINE TRADING SYSTEM</h1>
                    <div className="header-bottom-item-2">
                        <form action method="post">
                            <div className="header-search">
                                <input type="text" placeholder="Nh???p m?? s???n ph???m ..." />
                                <img className="qr-code" src="/images/Ecommerce-Qr-Code-icon.png" alt="" />
                                <button type="submit"><i className="fas fa-search" />Qu??t</button>
                            </div>
                        </form>
                        <span className="slogan">Ch??ng t??i truy???n t???i t??m huy???t c???a ng?????i n??ng d??n ?????n v???i ng?????i ti??u d??ng b???ng
                            gi???i ph??p truy xu???t
                            ngu???n g???c ??p d???ng c??ng ngh??? BlockChain</span>
                    </div>
                    <div className="container">
                        <div className="header-search-prduct">
                            <h1>T??m ki???m s???n ph???m</h1>
                            <form className="search-product" action method="post">
                                <input type="text" placeholder="T??n S???n Ph???m ..." />
                                <input type="text" placeholder="Gi?? S???n Ph???m ..." />
                                <button type="submit" className="btn btn-secondary">T??M KI???M<i className="far fa-arrow-alt-circle-right" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Begin: content  */}
                <div id="wp-content">
                   
                <div className="list-product container">
                <h3>S???N PH???M B??N C?? S???N</h3>
                <div className="list-card">
                   {this.getData()}
                 </div>
                   
                <div>
               
            </div>
            <div className="redirect">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">??</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">??</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button type="button" className="btn btn-info">Xem th??m &gt;&gt;&gt; </button>
            </div>
        </div>
                    {/* end list product 1  */}
                    <div className="list-product list-product-2 container">
                        <h3>S???N PH???M C???N MUA</h3>
                    
                        <div className="list-card">
                          {this.getDatatm()}              
                        </div>
                        <div className="redirect">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">??</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">??</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <button type="button" className="btn btn-info btn-left">Xem th??m &gt;&gt;&gt; </button>
                            <a href="postrequest"><button type="button" className="btn btn-info btn-right">????ng tin </button> </a>
                        </div>
                    </div>
                    {/* end list product 2  */}
                </div>
            </div>

        );
    }
}

export default Index;