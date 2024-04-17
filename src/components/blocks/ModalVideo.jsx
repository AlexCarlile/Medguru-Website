import { React } from 'react';

export default function ModalVideo({active, setActive, link}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div onClick={e => e.stopPropagation()}>
            <iframe className="youtube-frame"
            width="740"
            height="415"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
    </div>
  )
}
