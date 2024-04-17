import React from 'react'

export default function Contacts() {
  return (
    <section className="contacts container">
      <div className="contacts-block flex">
        <div className="contacts-info flex">
          <h2 className="contacts-info-title">
            КОНТАКТЫ
          </h2>
          <span>
            <i style={{color: "#1D4ED8"}}>ООО «МЕДГУРУ»</i>
          </span>

          <div className="contacts-info-block">
            <h3 className="contacts-info-subtitle">
              Адрес
            </h3>
            <p className="contacts-info-adress">
              123060, г. Москва, ул. Маршала Рыбалко, дом 2, корпус 6, помещение I, комната 5, офис 722
            </p>
          </div>

          <div className="contacts-info-block">
            <h3 className="contacts-info-subtitle">
              Телефон/почта
            </h3>
            <ul className="item-list flex list-reset" style={{paddingTop: "10px"}}>
                <li className="item-points">
                    Общий номер телефона<br/>
                    <a href="tel:+74954454510">
                      +7 495 445-45-10 
                    </a>
                </li>
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
          </div>
        </div>

        <div className="map" style={{display: "flex", alignItems: "center"}}>
          <iframe className="y-maps" title="карта" src="https://yandex.ru/map-widget/v1/?um=constructor%3Accce73efb95cd3d994f5b23018a3038c68f6b0639fbff59a6ba533d26b598fee&amp;source=constructor" width="832" height="502" frameBorder="0" style={{borderRadius:"50px"}}></iframe>
        </div> 
      </div>
    </section>
  )
}
