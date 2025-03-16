import { useParams } from "react-router-dom";
import {projects} from "../helpers/projectsList";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";




const Project = () => {

    const {id} = useParams ();
    const project = projects[id];
 
    return ( 
        <main className="section">
        <div className="container">

            <div className="project-details">
                <h1 className="title-1">{project.title}</h1>
            
                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

            {project.gitHubLink1 && (  <BtnGitHub link="https://azamatnurassyl.github.io/MegaAlmaty/" />)}
            { project.gitHubLink2 && (  <BtnGitHub link="https://azamatnurassyl.github.io/Shah-Restaurant/" />)} 
            { project.gitHubLink3 && (  <BtnGitHub link="https://azamatnurassyl.github.io/Mukhammad-Travel/" />)} 

             </div>

             
        </div>
    </main>
     );
}
 
export default Project;