import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="content-contact">
                    <div className="content-contact-img">
                        <img src="images/img-about-1.png" alt="" />
                    </div>
                    <div className="content-contact-detail">
                        <span>Về Agricultural Transaction</span>
                        <span>Chúng tôi cung cấp những sản phẩm chất lượng và đáng tin cậy nhất cho bạn</span>
                        <span />
                        <span />
                        <span />
                        <span>Thông qua công nghệ BlockChain. Mọi sẳn phẩn trên trang web đều được kiểm định chất lượng
                            threo tiểu chuẩn VietGAP nhằm đảm bảo chất lượng tốt nhất cho mọi sản phẩm</span>
                    </div>
                </div>
                {/* end content-contact  */}
                <div className="content-rules">
                    <div className="content-rules-img">
                        <img src="images/AboutUsContainer.png" alt="" />
                        <div className="content-box-rules">
                            <div className="content-box-rules-img">
                                <img src="/images/quantity.jpg" alt="" />
                            </div>
                            <div className="content-box-rules-detail">
                                <h3>BẠN LO LẮNG VỀ CHẤT LƯỢNG SẢN PHẨM?</h3>
                                <span>Xem điều khoản và dịch vụ của chúng tôi ngay bây giờ!</span>
                                <a className="btn btn-primary" href="support">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end content-rules  */}
                {/* footer */}
                <div>
                    <div className="above">
                        <div id="ab">Sứ mệnh của chúng tôi là mang đến cho <br /> bạn những sản phẩm nông sản tươi sạch nhất</div>
                        <div id="ab" style={{ fontSize: '18px' }}><i className="bx bxs-phone-call" /> Hotline <br /> +24156795636</div>
                        <div className="btnc btn-info">Contact US <i className="bx bx-log-in-circle" /></div>
                    </div>
                    <div className="bottom">
                        <div className="t1">
                            <div id="t2">
                                <h4> About APOST</h4>
                                <p style={{ color: 'yellow' }}>_________________________</p>
                                <p>APOTS là dự án ứng dụng blockChain để truy xuất nguồn gốc nông sản <br /> &nbsp;và là sàn giao dịch
                                    để nông dân, thương lái và người tiêu dùng giao dịch<br /> &nbsp; nông sản với nhau thông qua sàn
                                    giao dịch trực tuyến</p>
                            </div>
                            <div id="t2">
                                <h4> Thông tin liên lạc</h4>
                                <p style={{ color: 'yellow' }}>_________________________</p>
                                <p>. APOTS@gmail.cpm <br /> &nbsp;
                                    . +254717255460 <br /> &nbsp;
                                    . Số 111, ông ích khiêm, đà nẵng</p>
                            </div>
                        </div>
                        <h4>@ 2021 APOTS - AGRICULTURAL PRODUCTS ONLINE TRADING SYSTEM. Terms &amp; Conditions</h4>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;