import React from 'react'

export default function Stack() {
  return (
    <div className="marquee-container">
        <h2 className="partners-title container" style={{textTransform: "uppercase"}}>
            наш технологический стек
        </h2>
        <div className="marquee-content">
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Lavarel.png')} alt="Logo 1" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Vector-1.png')} alt="Logo 2" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Vector.png')} alt="Logo 3" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/VUE.JS.png')} alt="Logo 4" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Битрикс.png')} alt="Logo 5" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Lavarel.png')} alt="Logo 1" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Vector-1.png')} alt="Logo 2" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Vector.png')} alt="Logo 3" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/VUE.JS.png')} alt="Logo 4" />
            <img className="marquee-img flex" src={require('../../img/oragen_stack/Битрикс.png')} alt="Logo 5" />
        </div>
    </div>
  )
}
