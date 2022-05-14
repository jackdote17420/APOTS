import React, { Component } from 'react';

class SellRegister extends Component {
    constructor(props) {
        super(props );
        this.state={
            Ten: "",
            Email: "",
            DiaChi: "",
            SoChungChi: "",
            NgayCap: "",
            AnhChungNhan: "",  
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
                AnhChungNhan:result,
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

    addDataNb=(Ten, Email, DiaChi, SoChungNhan, NgayCap, AnhChungNhan) =>{
        var item={};
        item.Ten=Ten;
        item.Email=Email;
        item.DiaChi=DiaChi;
        item.SoChungNhan=SoChungNhan;
        item.NgayCap=NgayCap;
        item.AnhChungNhan=AnhChungNhan;
        if(item.Ten == '' || item.AnhChungNhan == '' || item.Email == ' ' || item.DiaChi == ' ' || item.SoChungNhan == '' || item.NgayCap == ' '){
            alert('vui Lòng nhập đầy đủ thông tin')
        }
        else{
             this.props.getData(item);
        }
        
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: "\n        #topic {\n            background-image: url(./images/background_sp.jpg);\n            background-size: cover;\n            height: 500px;\n        }\n\n        #topic h1 {\n            padding-top: 90px;\n        }\n    " }} />
                <div id="topic">
                    <h1 className="text-topic">Đăng ký bán hàng</h1>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col-3 col-second">
                            <img src="./images/nongtrai.jpg" alt="Farm" className="background-img" style={{ height: '900px' }} />
                        </div>
                        <div className="col-7 col-second">
                            <div className="information">
                                <h1>Thông Tin Đăng Ký</h1>
                                <h5>Những thông tin bên dưới của bạn sẽ được công khai để người mua hàng có thể liên lạc trao đổi về
                                    sản phẩm</h5>
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='Ten' className="infor-input" placeholder="Tên:" />
                                <input type="text" onChange={ (event) =>this.isChange(event)}  name='Email' className="infor-input" placeholder="Email:" />
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='DiaChi' className="infor-input" placeholder="Địa chỉ:" />
                                <h5>Chứng nhận của VietGAP về sản phẩm của bạn</h5>
                                <label htmlFor="#">Số chứng chỉ</label>
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='SoChungChi' className="infor-input" placeholder="Số chứng chỉ:" /><br />
                                <label htmlFor="#">Ngày cấp chứng chỉ</label>
                                <input onChange={ (event) =>this.isChange(event)} name='NgayCap' type="date"  className="infor-input"  /><br />
                                <label htmlFor="#">Ảnh giấy chứng nhận:</label>
                                <div className="form-group">
                                  <input type="file" name='AnhChungNhan' onChange={this.handleFileInputChange} className="filetype" id="group_image"/>                                                           
                                </div>
                                <div className="form-group">
                                  <input type="image" style={{height:350, width:350, }} src={this.state.AnhChungNhan}  /> 
                                </div>
    
                                <input  className="btn-register" value="Đăng Ký" type="reset"
                                 onClick={() =>{this.addDataNb(
                                        this.state.Ten,
                                        this.state.Email,
                                        this.state.DiaChi,
                                        this.state.SoChungChi,
                                        this.state.NgayCap,
                                        this.state.AnhChungNhan,                                 
                                        )} }
                                 ></input>   
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                </div>
            </div>

        );
    }
}

export default SellRegister;