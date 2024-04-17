import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer-section flex">
        <div className="footer-container container">
            <ul className="footer-list list-reset flex">
                <li className="footer-list-item">
                    <h3 className="item-title">
                        Экосистема Медгуру
                    </h3>
                    <ul className="item-list flex list-reset">
                        <li className="item-points">
                            <Link to="#">
                                MedGuru — полноценная двусторонняя 
                                коммуникация
                            </Link>
                        </li>
                        <li className="item-points">
                            Области нашей экпертизы
                        </li>
                        <li className="item-points">
                            Партнеры
                        </li>
                    </ul>
                </li>
                <li className="footer-list-item">
                    <h3 className="item-title">
                        Наши продукты
                    </h3>
                    <ul className="item-list flex list-reset">
                        <li className="item-points">
                            Омниканальные маркетинговые проекты
                        </li>
                        <li className="item-points">
                            CRM-система Oragen
                        </li>
                        <li className="item-points">
                            Продакшн
                        </li>
                    </ul>
                </li>
                <li className="footer-list-item">
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

            <ul className="footer-info-list list-reset flex">
                <li className="info-list-item">
                    ©2024 ООО «МЕДГУРУ» 
                </li>
                <li className="info-list-item">
                    ИНН 7716860313
                </li>
                <li className="info-list-item">
                    КПП 773401001
                </li>
                <li className="info-list-item" style={{cursor: "pointer"}}>
                    ОГРН 1177746556130
                </li>
            </ul>
        </div>
    </section>
    
  )
}
