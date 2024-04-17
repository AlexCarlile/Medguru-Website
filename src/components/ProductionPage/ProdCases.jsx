import { React, useState } from 'react';
import v1 from "../../img/v1.jpg";
import v2 from "../../img/v2.jpg";
import v3 from "../../img/v3.jpg";
import v4 from "../../img/v4.jpg";
import v5 from "../../img/Prodution_video.jpg";
import ModalVideo from "../blocks/ModalVideo";



export default function ProdCases() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="cases container">
            <ul className="cases-list list-reset flex">
                <li className="cases-item flex" style={{backgroundImage:`url(${v1})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    Отчетные видео конгрессов и других проектов
                </li>
                <li className="cases-item flex" style={{backgroundImage:`url(${v2})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    Анимационные видео с дикторской озвучкой
                </li>

                <li className="cases-item scnd-row flex" style={{backgroundImage:`url(${v3})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    Лекции в классическом формате
                </li>
                <li className="cases-item scnd-row flex" style={{backgroundImage:`url(${v4})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    Лекции и Short-видео c моушн-дизайном
                </li>
            </ul>

            <div className="cases-video flex" style={{backgroundImage:`url(${v5})`, backgroundSize: "cover", backgroundPosition: "center"}} onClick={() => setModalActive(true)}>
                <svg width="130" height="133" viewBox="0 0 130 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_149_414)">
                    <path d="M51.459 84.4133V45.5866C51.4598 45.1009 51.5912 44.6242 51.8396 44.2067C52.0879 43.7892 52.444 43.4461 52.8704 43.2135C53.2969 42.9809 53.7781 42.8673 54.2636 42.8845C54.749 42.9018 55.2209 43.0493 55.6298 43.3116L85.8331 62.7196C86.2156 62.9646 86.5303 63.3019 86.7482 63.7004C86.9662 64.0989 87.0804 64.5458 87.0804 65C87.0804 65.4542 86.9662 65.9011 86.7482 66.2996C86.5303 66.6981 86.2156 67.0354 85.8331 67.2804L55.6298 86.6937C55.2209 86.956 54.749 87.1036 54.2636 87.1208C53.7781 87.1381 53.2969 87.0245 52.8704 86.7918C52.444 86.5592 52.0879 86.2162 51.8396 85.7987C51.5912 85.3811 51.4598 84.9045 51.459 84.4187V84.4133Z" fill="white"/>
                    <path d="M5.41602 65.0001C5.41602 32.0938 32.0931 5.41675 64.9993 5.41675C97.9056 5.41675 124.583 32.0938 124.583 65.0001C124.583 97.9063 97.9056 124.583 64.9993 124.583C32.0931 124.583 5.41602 97.9063 5.41602 65.0001ZM64.9993 13.5417C51.3517 13.5417 38.2631 18.9632 28.6128 28.6135C18.9625 38.2639 13.541 51.3525 13.541 65.0001C13.541 78.6477 18.9625 91.7363 28.6128 101.387C38.2631 111.037 51.3517 116.458 64.9993 116.458C78.6469 116.458 91.7356 111.037 101.386 101.387C111.036 91.7363 116.458 78.6477 116.458 65.0001C116.458 51.3525 111.036 38.2639 101.386 28.6135C91.7356 18.9632 78.6469 13.5417 64.9993 13.5417Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_149_414" x="-3" y="0" width="138" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_149_414"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_149_414" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </div>
            <p className="cases-video-dscr">
                Отчетное видео конгресса (более 3-х тысяч участников)
            </p>
            <ModalVideo active={modalActive} setActive={setModalActive} link={"https://youtube.com/embed/Du7iohnYSW0"}/>
        </div>
  )
}
