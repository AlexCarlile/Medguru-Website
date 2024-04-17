import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Advantages() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
  
    return (
        <div className="advantages ">
            <h2 className="advantages-title section-title flex">
                <span>
                    Почему партнеры
                </span>
                <span  style={{ display: 'block' }}>
                    <i className="advantages-title-part" style={{color: "#1D4ED8", paddingLeft: "32vw"}}>
                        Выбирают нас
                    </i>
                </span>
            </h2>

            <div className="scroll-container flex">
                <div className="scroll-item flex">
                    <h3>Мы единственные на рынке, кто предлагает решение полного цикла в связке:</h3>
                    <ul className="scroll-item-list list-reset flex">
                        <li className="scroll-item-point">фармкомпания</li>
                        <li className="scroll-item-point">врач</li>
                        <li className="scroll-item-point">пациент</li>
                    </ul>
                </div>
                <div className="scroll-item">
                    <h3>
                        Располагаем самой полной
                        на&nbsp;рынке постоянно обновляемой базой врачей по&nbsp;целому ряду специальностей
                    </h3>
                </div>
                <div className="scroll-item">
                    <h3>
                        Занимаемся рганизацией очных
                        и&nbsp;онлайн-медмероприятий любого уровня &laquo;под ключ&raquo;
                        с&nbsp;подбором экспертов и&nbsp;лекторов
                    </h3>
                </div>
                <div className="scroll-item">
                    <h3>
                        Наши технологические решения 
                        в&nbsp;области big data позволяют выполнить анализ любой сложности, кастомизированный под клиентский запрос
                    </h3>
                </div>
            </div> 
        </div>
  )
}
