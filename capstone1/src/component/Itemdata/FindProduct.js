import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div className="card">
                                    <a >
                                        <img src={this.props.asp} style={{width:260, height:300}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Sản phẩm cần mua: <h5 className="card-title" style={{fontWeight:"bold", color:"red"}}> {this.props.Ten}</h5> </h5>
                                            <span className="card-text">Mô tả:  {this.props.Mota} </span>
                                            <br />
                                            <span className="card-text">Số Lượng: {this.props.sl} </span>
                                            <br />
                                            <span  className="card-text">Số điện thoại liên lạc:  <h5 className="card-title" style={{fontWeight:"bold", color:"red"}}> {this.props.sdt} </h5></span>
                                        </div>
                                    </a>
                                </div>         
        )
    }
}
