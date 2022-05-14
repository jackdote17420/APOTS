import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Box, Button, TextField } from '@material-ui/core'
import { spdb } from '../../firebase/firebase';
import { onValue } from '@firebase/database';  
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";
import firebaseConfig from '../../firebase/firebaseConfig';
class EditData extends Component {
    

    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[],
            open:false,
            Tenns: "",
            Ngaybd: "",
            Ngaykt: "",
            Phanbon: "",
            Soluong: "",
            Giasp: "",
            Mota: "",
            Loaicn: "",
            Thuonghieu: "",
            Anhsp: "",  
            file: null,
        } 
    }

    handleOpen = () => { 
        this.setState({ open:true }) 
        console.log(this.props.idsp); 
        
      };

      handleClose = () => {
        this.setState({ open:false})    ;
      };

    componentWillMount() {
        onValue(spdb, (snapshot) => {
            var arrayData=[];
            var id = this.props.idsp
            snapshot.forEach(function (childSnapshot) {   
                
               
                var key = childSnapshot.key;
                var AnhSanPham = childSnapshot.val().AnhSanPham;
                var Gia = childSnapshot.val().Gia;
                var LoaiChungNhan = childSnapshot.val().LoaiChungNhan;
                var MoTa = childSnapshot.val().MoTa;
                var NgayBatDauTrong = childSnapshot.val().NgayBatDauTrong;
                var NgayKetThucTrong = childSnapshot.val().NgayKetThucTrong;
                var PhanBon = childSnapshot.val().PhanBon;
                var SoLuong = childSnapshot.val().SoLuong;
                var TenNongSan = childSnapshot.val().TenNongSan;
                var ThuongHieu = childSnapshot.val().ThuongHieu
                if(childSnapshot.key === id) {
                arrayData.push({
                    key:key,
                    AnhSanPham:AnhSanPham,
                    Gia:Gia,
                    LoaiChungNhan:LoaiChungNhan,
                    MoTa:MoTa,
                    NgayBatDauTrong:NgayBatDauTrong,
                    NgayKetThucTrong:NgayKetThucTrong,
                    PhanBon:PhanBon,
                    SoLuong:SoLuong,
                    TenNongSan:TenNongSan,
                    ThuongHieu:ThuongHieu
                })  
            }             
            })
            // console.log(arrayData);
            this.setState({
                dataFirebase:arrayData
            });
        });
    }
    getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
         
          let reader = new FileReader();  
          reader.readAsDataURL(file);
          reader.onload = () => {
            // console.log("Called", reader);
            baseURL = reader.result;
          
            resolve(baseURL);
          };
        //   console.log(fileInfo);
        });
      };
    handleFileInputChange = e => {
        // console.log(e.target.files[0]);
        let { file } = this.state; 
        file = e.target.files[0];
        this.getBase64(file)
          .then(result => {
            file["base64"] = result;
            // console.log("File Is", file);
            this.setState({
                Anhsp:result,
            //   base64URL: result,
              file
            });
          })
          .catch(err => {
            console.log(err);
          });
    
        this.setState({
          file: e.target.files[0],
          
        });
      };
    isChange=(event) =>{
        const name=event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
    }
    updateSp=(Tenns, Ngaybd, Ngaykt, Phanbon, Soluong, Giasp, Mota, Loaicn, Anhsp,  Thuonghieu)=>{
        var id = this.props.idsp;
        var item={};
        item.Tenns=Tenns;
        item.Ngaybd=Ngaybd;
        item.Ngaykt=Ngaykt;
        item.Phanbon=Phanbon;
        item.Soluong=Soluong;
        item.Giasp=Giasp;
        item.Mota=Mota;
        item.Loaicn=Loaicn;
        item.Anhsp=Anhsp;
        item.Thuonghieu=Thuonghieu;
        // console.log(item)
       
        firebase.initializeApp(firebaseConfig);
        firebase.database().ref('SanPhamDangBan/' + id).
        set( {
            Gia:item.Giasp,
            LoaiChungNhan:item.Loaicn,
            MoTa:item.Mota,
            NgayBatDauTrong:item.Ngaybd,
            NgayKetThucTrong:item.Ngaykt,
            PhanBon:item.Phanbon,
            SoLuong:item.Soluong,
            TenNongSan:item.Tenns,
            ThuongHieu:item.Thuonghieu
          })
          .then(() => {
            alert('Lưu thành công');
            this.setState({open:false})
            
          })
          .catch((error) => {
            alert('Lưu Thất bại');
          });
    }

    render() {
        if(this.state.dataFirebase){
            return this.state.dataFirebase.map((value,key) =>{
                return (
                    <div>
                    <Button
                    variant="contained" style={{ width:100, height:40, backgroundColor: "#EEBC1D", position:"absolute", bottom:5 }}
                    onClick={()=>this.handleOpen()}>
                        Sửa
                    </Button>
                    

                    <Modal
                        style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center',}}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={this.state.open}
                        onClose={()=>this.handleClose()}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        
                        }}
                    >
                        <Fade in={this.state.open}>
                        
                        <div style={{width: 1500, backgroundColor: "white", color: "black", borderRadius: 10,}}>
                            <AppBar position="static" style={{ backgroundColor: "transparent", color:"black"}}>
                                <h2 style={{ textAlign:"center" }} >Sửa Thông tin</h2>
                            </AppBar>
                            <Box p={3} style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
                                
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Tên nông sản: "} defaultValue={value.TenNongSan} style={{width:"50%"}} name="Tenns" >
                                </TextField>
                              
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Ngày  bắt đầu trồng: "} defaultValue={value.NgayBatDauTrong}   style={{width:"50%"}} name="Ngaybd" >
                                </TextField>
                                
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Ngày kết thúc trồng: "} defaultValue={value.NgayKetThucTrong} name='Ngaykt'  style={{width:"50%"}}>
                                </TextField>
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Phân bón: "  } defaultValue={value.PhanBon} name='Phanbon'  style={{width:"50%"}}>
                                </TextField>
                                
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="number"  label={"Số Lượng: "} defaultValue={value.SoLuong} name='Soluong'   style={{width:"50%"}}>
                                </TextField>
                              
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Mô tả: "} defaultValue={value.MoTa} name='Mota'   style={{width:"50%"}}>
                                </TextField>
                             
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Thương Hiệu: "} defaultValue={value.ThuongHieu} name='Thuonghieu' style={{width:"50%"}}>
                                </TextField>
                             
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="text" label={"Loại chứng nhận: "} defaultValue={value.LoaiChungNhan} name='Loaicn' style={{width:"50%"}}>
                                </TextField>
                                
                                <TextField onChange={ (event) =>this.isChange(event)} variant="outlined" type="number" label={"Giá: "} defaultValue={value.Gia} name='Giasp'  style={{width:"50%"}}>
                                </TextField>    
                                <div style={{right:"30%", position:"absolute"}}>
                                    <input type="file" onChange={this.handleFileInputChange} className="filetype" id="group_image" value={this.props.AnhSanPham} name='Anhsp' style={{right:"30%", position:"absolute", bottom:-50, left:10 }} />                                                         
                                    <input type="image" style={{height:400, width:400,  }}  src={value.AnhSanPham }  /> 
                                </div>        
                                <Button variant="contained" size="large" style={{ backgroundColor: "#EEBC1D"}}
                                     onClick={() =>{this.updateSp(
                                        this.state.Tenns,
                                        this.state.Ngaybd,
                                        this.state.Ngaykt,
                                        this.state.Phanbon,
                                        this.state.Soluong,
                                        this.state.Giasp,
                                        this.state.Mota,
                                        this.state.Loaicn,
                                        this.state.Anhsp,
                                        this.state.Thuonghieu                                   
                                        )} }              
                                 >
                                    Lưu
                                </Button>     
                            </Box>
                        </div>
                        </Fade>
                    </Modal>
                    </div>
                );
            })   
        }
    }
}

export default EditData;