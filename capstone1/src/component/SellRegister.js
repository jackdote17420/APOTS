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
            alert('vui L??ng nh???p ?????y ????? th??ng tin')
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
                    <h1 className="text-topic">????ng k?? b??n h??ng</h1>
                </div>
                <div className="content-section">
                    <div className="row">
                        <div className="col-3 col-second">
                            <img src="./images/nongtrai.jpg" alt="Farm" className="background-img" style={{ height: '900px' }} />
                        </div>
                        <div className="col-7 col-second">
                            <div className="information">
                                <h1>Th??ng Tin ????ng K??</h1>
                                <h5>Nh???ng th??ng tin b??n d?????i c???a b???n s??? ???????c c??ng khai ????? ng?????i mua h??ng c?? th??? li??n l???c trao ?????i v???
                                    s???n ph???m</h5>
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='Ten' className="infor-input" placeholder="T??n:" />
                                <input type="text" onChange={ (event) =>this.isChange(event)}  name='Email' className="infor-input" placeholder="Email:" />
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='DiaChi' className="infor-input" placeholder="?????a ch???:" />
                                <h5>Ch???ng nh???n c???a VietGAP v??? s???n ph???m c???a b???n</h5>
                                <label htmlFor="#">S??? ch???ng ch???</label>
                                <input type="text" onChange={ (event) =>this.isChange(event)} name='SoChungChi' className="infor-input" placeholder="S??? ch???ng ch???:" /><br />
                                <label htmlFor="#">Ng??y c???p ch???ng ch???</label>
                                <input onChange={ (event) =>this.isChange(event)} name='NgayCap' type="date"  className="infor-input"  /><br />
                                <label htmlFor="#">???nh gi???y ch???ng nh???n:</label>
                                <div className="form-group">
                                  <input type="file" name='AnhChungNhan' onChange={this.handleFileInputChange} className="filetype" id="group_image"/>                                                           
                                </div>
                                <div className="form-group">
                                  <input type="image" style={{height:350, width:350, }} src={this.state.AnhChungNhan}  /> 
                                </div>
    
                                <input  className="btn-register" value="????ng K??" type="reset"
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