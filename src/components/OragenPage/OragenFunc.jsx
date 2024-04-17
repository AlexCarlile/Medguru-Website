import React from 'react';

export default function OragenFunc() {
  return (
    <div className="func">
        <div className="func-container">
            <ul className="func-list list-reset flex">
                <li className="func-item flex">
                    <div className=""></div>
                    <div className="func-item-part flex">
                        <h2 className="func-item-title">
                            продуманный функционал 
                            для каждой роли 
                        </h2>
                        <ul className="func-item-dscr flex list-reset">
                            Одновременно в системе могут работать:
                            <li className="item-dscr-item">Медицинские представители, фармпредставители </li>
                            <li className="item-dscr-item">Менеджеры по работе с ключевыми клиентами </li>
                            <li className="item-dscr-item">Медицинские советники</li>
                            <li className="item-dscr-item">Отдел маркетинга </li>
                            <li className="item-dscr-item">Коммерческий департамент </li>
                            <li className="item-dscr-item">Менеджмент и руководители различного уровня</li>
                        </ul>
                    </div>
                    
                </li>
                <li className="func-item func-item-img" style={{outline: "1px solid white"}}>

                </li>
            </ul>

            <ul className="func-list second list-reset flex" style={{flexWrap: "wrap-reverse"}}>
                <li className="func-item func-item-img2" style={{outline: "1px solid white"}}>

                </li>
                <li className="func-item flex" style={{justifyContent: "flex-start"}}>
                    <div className=""></div>
                    <div className="func-item-part flex">
                        <h2 className="func-item-title">
                            продуманный функционал 
                            для каждой роли 
                        </h2>
                        <ul className="func-item-dscr flex list-reset">
                            Одновременно в системе могут работать:
                            <li className="item-dscr-item">Медицинские представители, фармпредставители </li>
                            <li className="item-dscr-item">Менеджеры по работе с ключевыми клиентами </li>
                            <li className="item-dscr-item">Медицинские советники</li>
                            <li className="item-dscr-item">Отдел маркетинга </li>
                            <li className="item-dscr-item">Коммерческий департамент </li>
                            <li className="item-dscr-item">Менеджмент и руководители различного уровня</li>
                        </ul>
                    </div>
                    
                </li>
            </ul>

            <div className="oragen-descr">
                <h2 className="oragen-text">
                    валидируемая база врачей MEDGURU включает в&nbsp;себя 
                    &nbsp;<i style={{color: "#1D4ED8"}}>&gt;600&nbsp;000 специалистов</i> для вашей эффективной работы
                </h2>
            </div>
        </div>
    </div>
  )
}
