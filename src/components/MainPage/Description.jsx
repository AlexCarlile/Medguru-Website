import React, { useState } from 'react';
import bck from "../../img/First.png";

export default function Description() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="description-section flex" style={{backgroundImage: `linear-gradient(to bottom, black 0%, transparent 100%), url(${bck})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="description container flex">
                    <ul className="description-list list-reset">
                        <li className="description-item first">прогрессивное</li>
                        <li className="description-item second">digital-агентство,</li>
                        <li className="description-item third">специализирующееся</li>
                        <li className="description-item fourth">на создании</li>
                        <li className="description-item fifth">облачной архитектуры</li>
                        <li className="description-item sixth">для фармбизнеса</li>
                    </ul>

                    <div className="description-btn-sec flex">
                        <a href="#1" className="description-btn btn-reset flex" 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span style={{display: "flex", alignItems: "center"}}>узнать больше</span>
                            <svg width="27" height="28" className={isHovered === true ? "arrow active" : "arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                            </svg>
                        </a>
                    </div>
                </div> 
            </div>
            
            <div id="1" className="description-add container">
                <i style={{color: "#1D4ED8"}}>MedGuru</i>&nbsp;&mdash; полноценная двусторонняя коммуникация.
                Наша цель&nbsp;&mdash; помочь клиентам оптимизировать процессы и&nbsp;улучшить их&nbsp;маркетинговую стратегию, чтобы достичь <i style={{color: "#1D4ED8"}}>максимальных показателей</i>.
            </div>
        </div>
    )
}
