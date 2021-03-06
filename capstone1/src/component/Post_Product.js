import React, { Component } from 'react';

class Post_Product extends Component {

    constructor(props) {
        super(props );
        this.state={
            TenNongSan: "",
            NgayBatDauTrong: "",
            NgayKetThucTrong: "",
            PhanBon: "",
            SoLuong: "",
            Gia: "",
            MoTa: "",
            LoaiChungNhan: "",
            ThuongHieu: "",
            AnhSanPham: "",  
            file: null,
           
        }
        
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
                AnhSanPham:result,
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
    addData=(TenNongSan, NgayBatDauTrong, NgayKetThucTrong, PhanBon, SoLuong, Gia, MoTa, LoaiChungNhan, AnhSanPham,  ThuongHieu) =>{
        var item={};
        item.TenNongSan=TenNongSan;
        item.NgayBatDauTrong=NgayBatDauTrong;
        item.NgayKetThucTrong=NgayKetThucTrong;
        item.PhanBon=PhanBon;
        item.SoLuong=SoLuong;
        item.Gia=Gia;
        item.MoTa=MoTa;
        item.LoaiChungNhan=LoaiChungNhan;
        item.AnhSanPham=AnhSanPham;
        item.ThuongHieu=ThuongHieu;
        // console.log(item);
        this.props.getData(item);
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: "\n        #topic{ background-image: url(./images/background_sp.jpg); background-size: cover; height: 500px;}#topic h1{ padding-top: 90px;}\n    " }} />
                <div id="topic">
                    <h1 className="text-topic">????ng s???n ph???m</h1>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col-3 col-second">
                            <img src="/images/nongtrai.jpg" alt="Farm" className="background-img" />
                        </div>
                        <form>
                        <div className="col-7 col-second">
                            <div className="information">
                                <h1>Th??ng Tin S???n Ph???m</h1>
                                <h5>Nh???ng th??ng tin b??n d?????i c???a b???n s??? ???????c c??ng khai ????? ng?????i mua h??ng c?? th??? li??n l???c trao ?????i v??? s???n ph???m</h5>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="TenNongSan" placeholder="T??n S???n Ph???m:" autofocus id/>
                                </div>
                                <label htmlFor className="descrpition">M?? T??? S???n Ph???m:</label><br />
                                <label htmlFor="#">Th???i Gian Tr???ng: <br />T???</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="date" id="date" className="infor-input" name="NgayBatDauTrong" autofocus /><br />
                                </div>
                                <label htmlFor="#">?????n</label>
                                <input onChange={ (event) =>this.isChange(event)} type="date" id="date" className="infor-input" name="NgayKetThucTrong" autofocus /><br />
                                <label htmlFor="#">Ph??n B??n:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="PhanBon" placeholder="Lo???i Ph??n b??n:" autofocus />
                                </div>
                                <label htmlFor="#">S??? L?????ng:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="number" className="infor-input" name="SoLuong" placeholder="S??? l?????ng:" autofocus />
                                </div>
                                <label htmlFor="#">Gi??:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="number" className="infor-input" name="Gia" placeholder="Gi??:" autofocus />
                                </div>
                                <label htmlFor="#">M?? T???:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="MoTa" placeholder="M?? t???:" autofocus />
                                </div>
                                <label htmlFor="#">Th????ng Hi???u:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="ThuongHieu" placeholder="Th????ng hi???u:" autofocus />
                                </div>
                                <label htmlFor="#">Lo???i ch???ng nh???n:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="LoaiChungNhan" placeholder="Lo???i ch???ng nh???n:" autofocus />
                                </div>
                                <label htmlFor="#">???nh S???n Ph???m:</label>                               
                                <div className="form-group">
                                  <input type="file" onChange={this.handleFileInputChange} className="filetype" id="group_image"/>                                                           
                                </div>
                                <div className="form-group">
                                  <input type="image" style={{height:350, width:350, }}  src={this.state.AnhSanPham} /> 
                                </div>
                                <div className="form-group">
                                <input  className="btn btn-block btn-primary" value="Th??m" type="reset"
                                 onClick={() =>{this.addData(
                                        this.state.TenNongSan,
                                        this.state.NgayBatDauTrong,
                                        this.state.NgayKetThucTrong,
                                        this.state.PhanBon,
                                        this.state.SoLuong,
                                        this.state.Gia,
                                        this.state.MoTa,
                                        this.state.LoaiChungNhan,
                                        this.state.AnhSanPham,
                                        this.state.ThuongHieu                                   
                                        )} }
                                 ></input>                                 
                                </div>
                              
                            </div>
                        </div>
                        </form>
                       
                        <div className="clear" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Post_Product;