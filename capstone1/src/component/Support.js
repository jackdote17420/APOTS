import React, { Component } from 'react';
class Support extends Component {
    render() {
        return (
            <div>
                <div className="header-bottom">
                    <h1 className="header-bottom-item-1">AGRICULTURAL PRODUCTS ONLINE TRADING SYSTEM</h1>
                    <div className="header-bottom-item-2">
                        <form action method="post">
                            <div className="header-search">
                                <input type="text" placeholder="Nhập mã sản phẩm ..." />
                                <img className="qr-code" src="/images/Ecommerce-Qr-Code-icon.png" alt="" />
                                <button type="submit"><i className="fas fa-search" />Quét</button>
                            </div>
                        </form>
                        <span className="slogan">Chúng tôi truyền tải tâm huyết của người nông dân đến với người tiêu dùng bằng
                            giải pháp truy xuất
                            nguồn gốc áp dụng công nghệ BlockChain</span>
                    </div>
                    <div className="container">
                        <div className="header-search-prduct">
                            <h1>Tìm kiếm sản phẩm</h1>
                            <form className="search-product" action method="post">
                                <input type="text" placeholder="Tên Sản Phẩm ..." />
                                <input type="text" placeholder="Giá Sản Phẩm ..." />
                                <button type="submit" className="btn btn-secondary">TÌM KIẾM<i className="far fa-arrow-alt-circle-right" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Begin: content  */}
                <div id="post-wp-content">
                    <h2>hỗ trợ thông tin</h2>
                    <h4>Dưới đây là những thông tin hỗ trợ để bạn tham khảo</h4>
                    <div className="wp-post">
                        <img src="/images/vegetable.jpg" alt="ảnh nông sản" />
                        <div className="wp-text-post">
                            <a href="support_detail">Nông sản đã đến mùa thu hoạch</a>
                            <p className="post-time">3 giờ trước</p>
                            <p className="post-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere incidunt
                                ratione, dolores, inventore asperiores facilis error tempore fuga laboriosam dicta quod dolorem
                                magnam obcaecati. Animi aperiam vitae quibusdam aut dolore Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eum enim incidunt animi maiores sunt minus eaque natus magni reiciendis inventore
                                accusamus doloribus, porro illum, dicta velit ea nesciunt officia suscipit!</p>
                        </div>
                    </div>
                    <div className="wp-post">
                        <img src="/images/vegetable.jpg" alt="ảnh nông sản" />
                        <div className="wp-text-post">
                            <a href="support_detail">Nông sản đã đến mùa thu hoạch</a>
                            <p className="post-time">3 giờ trước</p>
                            <p className="post-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere incidunt
                                ratione, dolores, inventore asperiores facilis error tempore fuga laboriosam dicta quod dolorem
                                magnam obcaecati. Animi aperiam vitae quibusdam aut dolore Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eum enim incidunt animi maiores sunt minus eaque natus magni reiciendis inventore
                                accusamus doloribus, porro illum, dicta velit ea nesciunt officia suscipit!</p>
                        </div>
                    </div>
                    <div className="wp-post">
                        <img src="/images/vegetable.jpg" alt="ảnh nông sản" />
                        <div className="wp-text-post">
                            <a href="support_detail">Nông sản đã đến mùa thu hoạch</a>
                            <p className="post-time">3 giờ trước</p>
                            <p className="post-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere incidunt
                                ratione, dolores, inventore asperiores facilis error tempore fuga laboriosam dicta quod dolorem
                                magnam obcaecati. Animi aperiam vitae quibusdam aut dolore Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eum enim incidunt animi maiores sunt minus eaque natus magni reiciendis inventore
                                accusamus doloribus, porro illum, dicta velit ea nesciunt officia suscipit!</p>
                        </div>
                    </div>
                    <div className="wp-post">
                        <img src="/images/vegetable.jpg" alt="ảnh nông sản" />
                        <div className="wp-text-post">
                            <a href="support_detail">Nông sản đã đến mùa thu hoạch</a>
                            <p className="post-time">3 giờ trước</p>
                            <p className="post-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere incidunt
                                ratione, dolores, inventore asperiores facilis error tempore fuga laboriosam dicta quod dolorem
                                magnam obcaecati. Animi aperiam vitae quibusdam aut dolore Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eum enim incidunt animi maiores sunt minus eaque natus magni reiciendis inventore
                                accusamus doloribus, porro illum, dicta velit ea nesciunt officia suscipit!</p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-info btn-left" style={{ marginBottom: '20px', width: '200px', height: '60px', fontSize: '22px' }}>Xem thêm &gt;&gt;&gt; </button>
                </div>
            </div>

        );
    }
}

export default Support;