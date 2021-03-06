import React, { Component } from 'react';




class PostRequest extends Component {
 

    constructor(props) {
        super(props );
        this.state={
            TenNongSan: "",
            SoLuong: "",
            SoDienThoai: "",
            MoTa: "",
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
            console.log(baseURL);
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
        this.setState({
            [name]:value
        });
       
    }
    addData=(TenNongSan,  SoLuong,  MoTa,  AnhSanPham,SoDienThoai ) =>{
        var item={};
        item.TenNongSan=TenNongSan;
        item.SoLuong=SoLuong;
        item.MoTa=MoTa;
        item.AnhSanPham=AnhSanPham;
        item.SoDienThoai=SoDienThoai;
        // console.log(item);
        this.props.getData(item);
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: "\n     #topic{ background-image: url(./images/background_sp.jpg); background-size: cover; height: 500px;}#topic h1{ padding-top: 90px;}\n    " }} />
                <div id="topic">
                    <h1 className="text-topic">????ng h??ng c???n mua</h1>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col-3 col-second">
                            <img src="/images/nongtrai.jpg" alt="Farm" className="background-img" style={{ height: '700px' }} />
                        </div>
                        <form>
                        <div className="col-7 col-second">
                            <div className="information">
                                <h1>Th??ng Tin H??ng C???n Mua</h1>
                                <h5>Nh???ng th??ng tin b??n d?????i c???a b???n s??? ???????c c??ng khai ????? ng?????i mua h??ng c?? th??? li??n l???c trao ?????i v??? s???n ph???m</h5>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="TenNongSan" placeholder="T??n S???n Ph???m:" autofocus />
                                </div>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="SoDienThoai" placeholder="S??? ??i???n Tho???i:" autofocus />
                                </div>
                                <label htmlFor="#" className="description">M?? T??? S???n Ph???m B???n C???n Mua:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="MoTa" placeholder="M?? T??? S???n Ph???m:" autofocus/><br />
                                </div>
                                <label htmlFor="#">S??? L?????ng</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="number" className="infor-input" name="SoLuong" placeholder="S??? L?????ng:" autofocus/>
                                </div>
                                <label htmlFor="#">???nh g???i ?? s???n ph???m(C?? th??? c?? ho???c kh??ng):</label>
                                <div className="form-group">
                                <input type="file" onChange={this.handleFileInputChange} className="filetype" id="group_image"/>
                                <img style={{height:350, width:350, }} id="target" src={this.state.AnhSanPham}/>
                                </div>
                                <div className="form-group">
                                <input  className="btn btn-block btn-primary" value="????ng Tin" type="reset"
                                 onClick={() =>{this.addData(
                                    this.state.TenNongSan,
                                        this.state.SoLuong,
                                        this.state.MoTa,
                                        this.state.AnhSanPham,
                                        this.state.SoDienThoai                                   
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

export default PostRequest;