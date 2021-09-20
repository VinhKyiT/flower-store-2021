import "./Header.scss"
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_vkit_half.png'
import { FaRegHeart, FaRegUser, FaPhoneAlt } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import axios from "axios";
import { useEffect } from "react";

function Header() {

    const getAllCategories = async () => {
        const { data } = await axios.get("/api/category");
        return data;
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__top-info">
                    <ul>
                        <li>CÔNG TY TNHH MTV VINHKYIT</li>
                        <li>CỬA HÀNG HOA TƯƠI TOÀN QUỐC</li>
                    </ul>
                </div>
                <div className="header__top-social">
                    <ul>
                        <li className="fab fa-facebook"></li>
                        <li className="fab fa-twitter"></li>
                        <li className="fab fa-instagram"></li>
                    </ul>
                </div>
            </div>
            <div className="header__container">
                <div className="header__container-contact">
                    <div className="phone">
                        <p><FaPhoneAlt /></p>
                    </div>
                    <a href="tel:0378383986">+8437 8383 986</a>
                </div>
                <div className="header__container-logo">
                    <img src={logo} alt="vinhkyit" />
                </div>
                <div className="header__container-action">
                    <ul>
                        <li><FaRegUser/></li>
                        <li><FaRegHeart/></li>
                        <li><CgShoppingCart /></li>
                    </ul>
                </div>
            </div>
            <div className="header__menu">
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul className="drop-menu">
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul className="drop-menu">
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul className="drop-menu">
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul className="drop-menu">
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
