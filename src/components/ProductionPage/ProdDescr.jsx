import React from 'react';
import bck from "../../img/Background.png"

export default function ProdDescr() {
  return (
    <div className="prod-dscr container">
        <div className="prod-dscr-hero" style={{backgroundImage: `url(${bck})`, backgroundSize: "cover", backgroundRepeat:"no-repeat", backgroundPosition: "center top"}}>
            <h2 className="prod-dscr-title">
                Продакшн включает в себя трансляции, лекции, 
                short-видео, рекламы, отчетные видео
            </h2>
        </div>
    </div>
  )
}
