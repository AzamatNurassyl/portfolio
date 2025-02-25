import "./style.css"; 

import instagram from "../../img/icons/instagram.svg";
import github from "../../img/icons/gitHub.svg";
import vk from "../../img/icons/vk.svg";
import twitter from "../../img/icons/twitter.svg";

const Footer = () => {
    return ( 

    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                <li className="social__item"><a href="#!"><img src={vk} alt="link"/></a></li>
                <li className="social__item"><a href="https://www.instagram.com/nurassylazamat/"><img src={instagram} alt="link"/></a></li>  
                <li className="social__item"><a href="#!"><img src={twitter} alt="link"/></a></li>
                <li className="social__item"><a href="https://github.com/AzamatNurassyl"><img src={github} alt="link"/></a></li>
                </ul>
            <div className="copyright">
                    <p>© 2025 gitHub.com</p>
                </div>
            </div>
        </div>
    </footer>
     ); 
}
 
export default Footer;