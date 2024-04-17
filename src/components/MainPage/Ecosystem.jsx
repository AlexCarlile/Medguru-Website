import React from 'react';
import VideoBlock from '../blocks/VideoBlock';

export default function Ecosystem() {
  return (
    <div className="ecosystem">
        <div className="container">
            <h2 className="ecosystem-add" >
                Основой цифровой трансформации компании является <i style={{color: "#1D4ED8"}}>экосистема</i>, которая позволяет значительно улучшить операционное совершенство и&nbsp;близость 
                к&nbsp;клиенту.
            </h2>

            <div className="ecosystem-elems">
                <ul className="elems-list flex">
                    <li className="elems-item">
                        Роль экосистемы в&nbsp;операционном совершенстве заключается 
                        в&nbsp;более эффективном, по&nbsp;сравнению с&nbsp;конкурентами, использовании маркетинговых ресурсов за&nbsp;счет прозрачности маркетинговых инвестиций и&nbsp;автоматизированной оценки эффективности каналов коммуникаций.
                    </li>
                    <li className="elems-item" style={{paddingTop: "50px" }}>
                        Успешно реализованная цифровая трансформация позволяет добиться выдающихся управленческих результатов и&nbsp;является, по&nbsp;сути, основой для систематизации управления бизнесом.
                    </li>
                    <li className="elems-item" style={{paddingRight: "40px"}}>
                        Организация является сложной открытой социотехнической структурой, действующей в&nbsp;многомерной и&nbsp;многофакторной среде, подчиняющейся всем законам системного подхода.
                    </li>
                    <li className="elems-item" style={{paddingTop: "70px"}}>
                        При использовании экосистемы достижение близости с&nbsp;клиентом позволяет глубоко анализировать цифровые приоритеты пользователя и&nbsp;полностью отвечает современным трендам омниканального маркетинга.
                    </li>
                </ul>
            </div>

            <VideoBlock id={1}/>
        </div>

        
    </div>
  )
}
