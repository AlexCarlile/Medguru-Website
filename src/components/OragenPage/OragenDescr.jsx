import React from 'react';

export default function OragenDescr() {
  return (
    <section className="container">
        <div className="oragen-descr">
            <h2 className="oragen-text">
                <a href="https://promo.oragen.ru/" target='_blank' rel="noreferrer"><i style={{color: "#E9CBA0"}}>Oragen</i></a> — Интуитивно понятная и гибкая 
                в настройках CRM-система 
            </h2>
        </div>

        <div className="oragen-adv">
            <ul className="adv-list list-reset flex">
                <li className="adv-list-item">
                    <h3 className="adv-item-title">Big Data</h3>
                    <p className="adv-item-descr">
                        Накопленная база знаний о&nbsp;враче и&nbsp;провизоре, которая позволяет выстроить маркетинговую стратегию, исходя из&nbsp;предпочтений врача/провизора, и&nbsp;повысить конверсию выписки.    
                    </p>
                </li>
                <li className="adv-list-item">
                    <h3 className="adv-item-title">Автоматизация</h3>
                    <p className="adv-item-descr">
                        Настройка инструментов маркетинговых коммуникаций для отправки информации, формирование участников таргет-листа 
                        в&nbsp;автоматическом режиме.
                    </p>
                </li>
                <li className="adv-list-item">
                    <h3 className="adv-item-title">Автосинхронизация</h3>
                    <p className="adv-item-descr">
                        Позволяет оценить эффективность каждого медицинского представителя в&nbsp;формате in&nbsp;real-time.
                    </p>
                </li>
                <li className="adv-list-item">
                    <h3 className="adv-item-title">CLM и аналитика</h3>
                    <p className="adv-item-descr">
                        Позволяет отслеживать эффективность маркетинговых коммуникаций/инвестиций и&nbsp;выполнение KPI.
                    </p>
                </li>
            </ul>
        </div>

    </section>
  )
}

