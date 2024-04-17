import React from 'react';
import bck from "../../img/Backgound-3.png";
import "../../CSS/omni.css";
import system from "../../img/System.png";
import back from "../../img/Abstract.png";

export default function OmniAbout() {
  return (
    <div>
        <div style={{position: "absolute", width: "100%", height: "100%", zIndex: "-10", top:"0", backgroundImage: `url(${bck})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "left top"}}></div>
        <section className="omni-about-container container flex">
            <div className="about-block flex">
                <div className="about-dscr flex">
                    <h2 className="about-dscr-title">
                        Омниканальные
                        маркетинговые проекты
                    </h2>
                    <p className="about-dscr-txt">
                        В&nbsp;международной фармацевтической бизнес-среде системный подход уверенно входит в&nbsp;практику организационного менеджмента. Команда MEDGURU разрабатывает экосистемные решения, позволяющие фармацевтическому бизнесу достигать управленческого совершенства.
                    </p>
                    <p className="about-dscr-txt">
                        Одно из&nbsp;таких решений&nbsp;&mdash; <a href="https://medtouch.org/" target="_blank" rel="noreferrer"><i style={{color: "#1D4ED8"}}>платформа Medtouch</i></a>&nbsp;&mdash; технологический и&nbsp;маркетинговый проводник для фармы среди всех образовательных порталов. Medtouch позволяет выстраивать сквозную коммуникацию фармбизнеса с&nbsp;врачами с&nbsp;помощью единой платформы.
                    </p>
                    <p className="about-dscr-txt">
                        Решение зарегистрировано в&nbsp;реестре Отечественного ПО<br/><i style={{color: "#1D4ED8"}}>Номер записи: 17411</i><br/><i style={{color: "#1D4ED8"}}>Дата регистрации в&nbsp;реестре: 21.04.2023&nbsp;г.</i>
                    </p>
                </div>
                <img  src={system} alt="Экосистема Medtouch для омниканальных проектов"/>
            </div>
        </section>
        <div className="omnitouch container flex" style={{backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"}}>
            <span className="omnitouch-dscr">
            <i style={{color: "#1D4ED8"}}>OMNITOUCH&nbsp;</i>&mdash; Омниканальная платформа для продвижения ваших брендов и&nbsp;Визуализации всех каналов вокруг пользователя.
            </span>
        </div>
    </div>
  )
}
