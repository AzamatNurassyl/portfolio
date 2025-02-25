import "./style.css";
import imgIcon from "./Vector.svg";

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" className="btn-outline">
                <img src={imgIcon} alt="gitHub"/>
                Visit site
         </a>
     );
}
 
export default BtnGitHub;