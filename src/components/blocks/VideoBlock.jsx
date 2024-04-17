import { React, useState } from 'react';
// import video_img from "../../img/Video Yaroslav.png";
import { videoData } from "../MainPage/Video"
import ModalVideo from './ModalVideo';

export default function VideoBlock(props) {
    const { id } = props;
    const [modalActive, setModalActive] = useState(false)

    return (
    <div className="ecosystem-video">
        <ul className="eco-video-list flex list-reset">
            <li className="eco-video-item video-descr">
                <h3 className="video-item-title">
                    {videoData.find(ttl => ttl.id === id).title}
                </h3>
                <img className="video-img" src={videoData.find(ttl => ttl.id === id).videoImg} alt={videoData.find(ttl => ttl.id === id).alt} onClick={() => setModalActive(true)}></img>
                <p className="video-item-descr">
                    {videoData.find(ttl => ttl.id === id).text1}
                </p>
                <p className="video-item-descr">
                    {videoData.find(ttl => ttl.id === id).text2}
                </p>
                <span className="video-item-descr sign flex">
                {videoData.find(ttl => ttl.id === id).name}
                    <br/>{videoData.find(ttl => ttl.id === id).position}
                </span>
            </li>
            <li className="eco-video-item video-play" onClick={() => setModalActive(true)}>
                <img className="img" src={videoData.find(ttl => ttl.id === id).videoImg} alt={videoData.find(ttl => ttl.id === id).alt}></img>
            </li>
        </ul>

        <ModalVideo active={modalActive} setActive={setModalActive} link={videoData.find(ttl => ttl.id === id).videoLink}/>
    </div>
  )
}
