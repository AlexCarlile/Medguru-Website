import React from 'react';

export default function ListItem(props) {
    const getText = props;
    return (
    <li>
        <span className="descr-item flex">{ getText.text }</span>
    </li>
  )
}
