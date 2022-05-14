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
                    <h1 className="text-topic">Đăng hàng cần mua</h1>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col-3 col-second">
                            <img src="/images/nongtrai.jpg" alt="Farm" className="background-img" style={{ height: '700px' }} />
                        </div>
                        <form>
                        <div className="col-7 col-second">
                            <div className="information">
                                <h1>Thông Tin Hàng Cần Mua</h1>
                                <h5>Những thông tin bên dưới của bạn sẽ được công khai để người mua hàng có thể liên lạc trao đổi về sản phẩm</h5>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="TenNongSan" placeholder="Tên Sản Phẩm:" autofocus />
                                </div>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="SoDienThoai" placeholder="Số Điện Thoại:" autofocus />
                                </div>
                                <label htmlFor="#" className="description">Mô Tả Sản Phẩm Bạn Cần Mua:</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="text" className="infor-input" name="MoTa" placeholder="Mô Tả Sản Phẩm:" autofocus/><br />
                                </div>
                                <label htmlFor="#">Số Lượng</label>
                                <div className="form-group">
                                <input onChange={ (event) =>this.isChange(event)} type="number" className="infor-input" name="SoLuong" placeholder="Số Lượng:" autofocus/>
                                </div>
                                <label htmlFor="#">Ảnh gợi ý sản phẩm(Có thể có hoặc không):</label>
                                <div className="form-group">
                                <input type="file" onChange={this.handleFileInputChange} className="filetype" id="group_image"/>
                                <img style={{height:350, width:350, }} id="target" src={this.state.AnhSanPham}/>
                                </div>
                                <div className="form-group">
                                <input  className="btn btn-block btn-primary" value="Đăng Tin" type="reset"
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