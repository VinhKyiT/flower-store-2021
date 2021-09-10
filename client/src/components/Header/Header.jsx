import { Icon, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__top-info">
                    <ul>
                        <li>CÔNG TY TNHH MTV VINHKYIT</li>
                        <li>SĐT: 037 8383 986</li>
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
                <div className="header__container-logo">
                    <img src="http://placehold.it/50x50" alt="vinhkyit" />
                </div>
                <div className="header__container-search">
                    <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Type anything...' fluid/>
                </div>
                <div className="header__container-action">
                    <ul>
                        <li><Icon name="shopping cart"/></li>
                        <li><Icon name="heart"/></li>
                        <li><Icon name="user"/></li>
                    </ul>
                </div>
            </div>
            <div className="header__menu">
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul>
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
                        <ul>
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul>
                            <li><Link to="/woman">Hoa cưới</Link></li>
                            <li><Link to="/man">Hoa tặng 14-02</Link></li>
                            <li><Link to="/kid">Các dịp lễ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/categories">Hoa sự kiện</Link>
                        <ul>
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
