import React from 'react';
import { Link } from "react-router-dom"
import Omni from "../../img/products/Omni_icon.png";
import Research from "../../img/products/Research_icon.png";
import CRM from "../../img/products/CRM_icon.png";
import Production from "../../img/products/Production.png";
import Events from "../../img/products/Events.png";

export default function Products() {
  return (
    <section className="products-section">
        <div className="products container" >
            <h2 className="products-title section-title">
                Области нашей экпертизы
            </h2>
            <ul className="products-list list-reset flex">
                <li className="products-item active flex">
                    <span className="products-item-name" style={{backgroundImage: `url(${Omni})`, backgroundRepeat: "no-repeat"}}>
                        ОМНИКАНАЛЬНЫЕ МАРКЕТИНГОВЫЕ ПРОЕКТЫ
                    </span>
                </li>
                <li className="products-item active flex">
                    <span className="products-item-name" style={{backgroundImage: `url(${Research})`, backgroundRepeat: "no-repeat"}}>
                        МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ
                    </span>
                </li>
                <li className="products-item null_item flex">
                    
                </li>
                <li className="products-item active flex">
                    <span className="products-item-name" style={{backgroundImage: `url(${CRM})`, backgroundRepeat: "no-repeat"}}>
                        CRM-СИСТЕМА ORAGEN
                    </span>
                </li>
                <li className="products-item active flex">
                    <span className="products-item-name" style={{backgroundImage: `url(${Production})`, backgroundRepeat: "no-repeat"}}>
                        ТЕХНИЧЕСКИЙ ПРОДАКШН
                    </span>
                </li>
                <li className="products-item active flex">
                    <Link className="products-item-name" style={{backgroundImage: `url(${Events})`, backgroundRepeat: "no-repeat"}}>
                        ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ
                    </Link>
                </li>
            </ul>
        </div>
    </section>
  )
}
