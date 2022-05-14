import React from 'react'
import { ApotsState } from '../ApotsContext'
import AuthModal from "../component/Authentication/AuthModal"
import UserSidebar from './Authentication/UserSidebar';
const Header = () => {
    const {user} = ApotsState();
    return (
        <div className="menu">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top menutop">
            <a className="navbar-brand logo" href="/" />
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 ml-auto menuright">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"><i className="bx bxs-home bx-tada" /> Trang chủ <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="support"><i className="bx bxs-book-open bx-tada" /> Tin tức</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="bill"><i className="bx bx-cart bx-tada" /> Giỏ hàng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sell"><i className="bx bxs-shopping-bags bx-tada bx-flip-vertical" /> Trở
                            thành người bán hàng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about_us"><i className="bx bx-support bx-tada" /> Hỗ trợ</a>
                    </li>
                    {user? <UserSidebar/> : <AuthModal/> }
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Header
