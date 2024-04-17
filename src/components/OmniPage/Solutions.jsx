import { React, useState } from 'react';
import VideoBlock from "../blocks/VideoBlock";
import square from "../../img/solutions/Square.png";
import circles from "../../img/solutions/29 (1).png";
import snake from "../../img/solutions/Snake.png";
import lines from "../../img/solutions/Lines.png";
import sphere from "../../img/solutions/shape and lines.png";



export default function Solutions() {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
        <section className="solutions container">
            <h2 className="solutionss-title section-title flex">
                    <span>
                        КАК НАШИ РЕШЕНИЯ
                    </span>
                    <span style={{ display: 'block' }}>
                        <i className="solutions-title-part" style={{color: "#1D4ED8"}}>
                            ПОМОГАЮТ БРЕНДАМ?
                        </i>
                    </span>
                </h2>

            <ul className="sulutions-list list-reset flex">
                <li className="sulutions-item flex">
                    <span className="solutions-item-dscr" style={{backgroundImage: `url(${square})`, backgroundRepeat: "no-repeat"}}>
                        Возможность контроля триггерных коммуникаций в рамках маркетинговой кампании.
                    </span>
                </li>
                <li className="sulutions-item flex">
                    <span className="solutions-item-dscr" style={{backgroundImage: `url(${circles})`, backgroundRepeat: "no-repeat"}}>
                        Оценка как комплексной эффективности от&nbsp;проектов, так и&nbsp;эффективности отдельных каналов для совершенствования маркетинговой кампании.
                    </span>
                </li>
                <li className="sulutions-item flex">
                    <span className="solutions-item-dscr" style={{backgroundImage: `url(${snake})`, backgroundRepeat: "no-repeat"}}>
                        Планирование проектов, отталкиваясь от&nbsp;поведения пользователей на&nbsp;основании Customer Journey Map для глубокой работы с&nbsp;разными сегментами целевой аудитории.
                    </span>
                </li>
                <li className="sulutions-item flex">
                    <span className="solutions-item-dscr" style={{backgroundImage: `url(${lines})`, backgroundRepeat: "no-repeat"}}>
                        Видеовизиты, лонгриды, мероприятия проводятся на&nbsp;платформе Medtouch, благодаря чему наш партнер получает прозрачные результаты.
                    </span>
                </li>
                <li className="sulutions-item flex">
                    <span className="solutions-item-dscr" style={{backgroundImage: `url(${sphere})`, backgroundRepeat: "no-repeat"}}>
                        Контроль результатов коммуникаций фармбизнеса с&nbsp;врачами 
                        в&nbsp;омниканальном сервисе Omnitouch.
                    </span>
                </li>
                <li className="solutions-last-item flex">
                    <span className="solutions-dscr-last">
                        Узнайте о&nbsp;омниканальном маркетинге больше, чтобы использовать все возможности вашего бренда.
                    </span>
                    <div className="flex">
                        <a className="description-btn btn-reset flex" 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        href="/contacts">
                            <span style={{display: "flex", alignItems: "center", fontSize: "21px"}}>связаться с нами</span>
                            <svg width="27" height="28" className={isHovered === true ? "arrow active" : "arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>

            <VideoBlock id={2}/>
        </section>
  )
}
