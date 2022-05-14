import React, { Component } from 'react';

class Support_detail extends Component {
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
                <h2>Nông sản đã đến mùa thu hoạch</h2>
                <div className="wp-post-detail">
                    <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="ảnh nông sản" />
                    <div className="post-text">
                        <p>Bây giờ, bạn đã chốt được một số lượng giới hạn các phương án thay thế trong danh sách của bạn. Đây là thời gian để lập một kế hoạch kinh doanh nhỏ bằng cách kiểm tra thu nhập tiềm năng mà bạn có thể nhận được từ mỗi lựa chọn thay thế, dựa trên doanh thu và chi phí dự kiến. Việc này thì quá đơn giản. Hãy liên hệ với những người nông dân thành công có nhiều năm kinh nghiệm trong lĩnh vực cây trồng mà bạn đã hướng tới. Nếu những người này sẵn sàng chia sẻ thông tin, đây sẽ là nguồn thông tin tốt nhất liên quan đến giá cả thị trường và chi phí thực tế. Tuy nhiên, để có ý kiến mang tính khoa học hơn, những cố vấn nông nghiệp , những chuyên gia cũng có thể giúp bạn tính toán tất cả những thông số và lập một kế hoạch kinh doanh cho bạn.
                            <br />
                            Bạn có thể nghĩ: cái gì là chi phí trong nông nghiệp trồng trọt?. Thực tế, phụ thuộc vào loại hình trồng trọt, chi phí có thể khác nhau từ hàng vài trăm tới vài triệu đô la một năm. Chi phí bao gồm:
                            <br />
                            Chi phí lắp đặt. Ví dụ, khi trồng trong nhà kính. Chi phí có thể thực sự cao, nhiều thiết bị đắt đỏ mà yêu cầu cần có (khung, mái che, quạt, máy sưởi ấm, đèn, v.v…)
                            <br />
                            Chi phí chuẩn bị đất: Cày bừa, San đất, phục hồi độ phì nhiêu cho đất.
                            <br />
                            Chi phí mua hạt giống/cây giống.
                            <br />
                            Chi phí tưới tiêu: Hầu hết cây trồng cần hệ thống tưới tiêu để phát triển và cho một sản lượng trung bình. Do đó, trong hầu hết trường hợp trồng trọt cho mục đích thương mại cần xây dựng một hệ thống tưới tiêu hiệu quả.
                            <br />
                            Bảo vệ và che chắn. Nhiều giống cây có thể nhạy cảm hơn các loại cây khác và người nông dân cần bảo vệ chúng trong từng điều kiện môi trường cụ thể.
                            <br />
                            Phân bón hoặc phân chuồng: Hầu hết các loại cây trồng cho cho mục đích thương mại cần được “cho ăn” để cho ra sản lượng chấp nhận được.
                            <br />
                            Thuốc bảo vệ thực vật: Những người làm noogn nghiệp truyền thống có thể cần mua các hoá chất nông nghiệp để bảo vệ cây trồng khỏi sâu hại và dịch bệnh.
                            Chi phí lao động: Một trong những chi phí quan trọng nhất là chi phí lao động. Hầu như bạn không thể làm việc được một mình, bạn sẽ phải thuê người làm việc cho bạn nhất là những giai đoạn cao điểm như gặt gái.
                            <br />
                            Chi phí máy móc: Một số loại cây trồng cần những máy móc đặc biệt để gieo hạt hoặc gặt hái.
                        </p></div>
                    <p />
                </div>
            </div>
        </div>

        );
    }
}

export default Support_detail;