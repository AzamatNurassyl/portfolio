import { useEffect, useRef, useState } from "react";

import "./style.css";
import sun from "./Sun.svg";
import moon from "./Moon.svg";




const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState ('darkMode', 'light');

    const btnRef = useRef (null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add ('dark')
            btnRef.current.classList.add ('dark-mode-btn--active');
        } else {
            document.body.classList.remove ('dark');
            btnRef.current.classList.remove ('dark-mode-btn--active');
        }
    });

        const useToggleDarkMode = () => {
            setDarkMode ((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={useToggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    
     );
}
 
export default BtnDarkMode;