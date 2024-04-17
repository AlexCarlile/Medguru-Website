import { React, useState } from 'react';

export default function ProdAdvString(props) {
    const [isClicked, setIsClicked] = useState(false);
    const getText = props

    return (
        <li className="adv-item flex">
            <div>
                <h3 className="adv-item-title">
                    {getText.title}
                </h3>
                <p className={isClicked === false ? "adv-dscr" : "adv-dscr active"}>
                    {getText.dscr}
                </p>
            </div>

            <div className="plus-minus" onClick={isClicked === false ? ()=> setIsClicked(true) : ()=> setIsClicked(false)}>
                <svg className={isClicked === false ? "plus active": "plus"}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3333 5.33333C17.3333 4.59695 16.7364 4 16 4C15.2636 4 14.6667 4.59695 14.6667 5.33333V14.6667H5.33333C4.59695 14.6667 4 15.2636 4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H14.6667V26.6667C14.6667 27.403 15.2636 28 16 28C16.7364 28 17.3333 27.403 17.3333 26.6667V17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H17.3333V5.33333Z" fill="#1D4ED8"/>
                </svg>

                <svg className={isClicked === false ? "plus": "plus active"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 14.6667H5.33333C4.59695 14.6667 4 15.2637 4 16.0001C4 16.7365 4.59695 17.3334 5.33333 17.3334H14.6667H17.3333H26.6667C27.403 17.3334 28 16.7365 28 16.0001C28 15.2637 27.403 14.6667 26.6667 14.6667H17.3333H14.6667Z" fill="#1D4ED8" fillOpacity="0.6"/>
                </svg>
            </div>    
        </li>
  )
}
