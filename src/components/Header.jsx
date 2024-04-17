import { React, useState } from 'react';
import logo from "../img/Полный 1.png";
import logo2 from "../img/logo2.png";
import { Link } from 'react-router-dom';

export default function Header() {
  const [navActive, setNavActive]  = useState(false);

  const closeMenu = () => {
    setNavActive(false);
  };
  return (
    <header className="header">
        <div className="header-container container flex">
            <Link to="/" className="header-logo flex" onClick={closeMenu}>
                <img className="classic-logo" src={logo} alt="Логотип Medguru" />
                <img className="alt-logo" src={logo2} alt="Логотип Medguru" />
            </Link>
            <nav className= {navActive === true ? "header-nav active flex " : "header-nav flex"}>
                <ul className="header-list list-reset flex">
                    <li className="header-list-item">
                        <Link className="header-item-txt" to="/omnichannel" onClick={closeMenu}>Омниканальный маркетинг</Link> 
                    </li>
                    <li className="header-list-item">
                        <Link className="header-item-txt" to="/crm" onClick={closeMenu}>CRM-система Oragen</Link>
                    </li>
                    <li className="header-list-item">
                        <Link className="header-item-txt" to="/production" onClick={closeMenu}>Продакшн</Link>
                    </li>
                    <li className="header-list-item">
                        <Link className="header-item-txt" to="/contacts" onClick={closeMenu}>
                            <svg width="14" height="16" style={{marginRight:"4px"}} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.496 6.70899L4.85997 15.589C4.61997 15.835 4.22197 15.55 4.37797 15.244L7.45197 9.17799C7.47525 9.13221 7.48639 9.08122 7.48432 9.0299C7.48225 8.97858 7.46704 8.92865 7.44015 8.88489C7.41325 8.84114 7.37557 8.80502 7.33072 8.78C7.28586 8.75498 7.23533 8.74189 7.18397 8.74199H0.71797C0.658912 8.74195 0.601182 8.72447 0.552015 8.69175C0.502848 8.65903 0.464431 8.61253 0.44158 8.55807C0.418729 8.50361 0.412459 8.44362 0.423558 8.38562C0.434657 8.32761 0.46263 8.27417 0.503971 8.23199L8.51397 0.116993C8.74597 -0.118007 9.13197 0.139993 9.00297 0.444993L6.70597 5.85999C6.68652 5.9059 6.67882 5.95593 6.68357 6.00556C6.68831 6.05519 6.70535 6.10286 6.73314 6.14425C6.76094 6.18564 6.79861 6.21946 6.84275 6.24263C6.88689 6.26581 6.93612 6.27762 6.98597 6.27699L13.277 6.19899C13.3363 6.19804 13.3947 6.21472 13.4445 6.24693C13.4944 6.27914 13.5336 6.32543 13.5572 6.37993C13.5807 6.43443 13.5876 6.4947 13.5769 6.5531C13.5661 6.6115 13.5383 6.66541 13.497 6.70799" fill="white"/>
                            </svg>
                            Контакты
                        </Link>
                    </li>
                    <li className="footer-list-item header-list-contacts">
                        <h3 className="item-title">
                            Связаться с нами
                        </h3>
                        <ul className="item-list flex list-reset">
                            <li className="item-points">
                                Ведущий менеджер по развитию бизнеса<br/>
                                <a href="tel:+79995006454">
                                    +7 999 500-64-54 
                                </a>
                            </li>
                            <li className="item-points">
                                Руководитель ИТ-отдела<br/>
                                <a href="tel:+79998699276">
                                    +7 999 869-92-76  
                                </a>
                            </li>
                            <li className="item-points">
                                <a href="mailto:mail@medguru.studio">
                                    mail@medguru.studio
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <button className={navActive ? "burger active btn-reset" : "burger btn-reset"} onClick={(navActive === true ) ? () => setNavActive(false) : () => setNavActive(true)}>
                <span className="burger-line active"></span>
            </button>
        </div>
    </header>
  )
}
