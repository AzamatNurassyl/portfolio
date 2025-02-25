import Header from "../components/header/Header";

import projectpage from "../img/projects/01.jpg";
import projectpage2 from "../img/projects/02.jpg";
import projectpage3 from "../img/projects/Mukhammad Travel.png";

const Home = () => {
    return ( 
        <>
        <Header />

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={projectpage} alt="Project img" className="project__img"/>
                            <h3 className="project__title">Mega Almaty</h3>
                        </a>
                    </li>
                
                    <li className="project">
                        <a href="./project-page2.html">
                            <img src={projectpage2} alt="Project img" className="project__img"/>
                            <h3 className="project__title">Restaurant</h3>
                        </a>
                    </li>
    
                    <li className="project">
                         <a href="./project-page3.html">
                             <img src={projectpage3} alt="Project img" className="project__img"/>
                             <h3 className="project__title">Mukhammad Travel</h3>
                         </a>
                    </li>
    
                </ul>
            </div>
        </main>

        </>
     );
}
 
export default Home;