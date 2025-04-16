import project1 from "./../img/projects/01.jpg";
import projectMega from "./../img/pages/Mega project.png";

import project2 from "./../img/projects/02.jpg";
import projectShah from "./../img/pages/Shah.png";

import project3 from "./../img/projects/Mukhammad Travel.png";
import projectTravel from "./../img/pages/Page Travel.png";

const projects = [
    {
        title:'Mukhammad Travel',
        skills:'JavaScript, HTML, CSS, NPM, React Js.',
        img: project3,
        imgBig: projectTravel,
        gitHubLink1: 'https://azamatnurassyl.github.io/Mukhammad-Travel/',
    },
    {
        title:'Shah Reastaurant',
        skills:'JavaScript, HTML, CSS, NPM, React Js.',
        img: project2,
        imgBig: projectShah,
        gitHubLink2: 'https://azamatnurassyl.github.io/Shah-Restaurant/',
    },
    {
        title:'Mega',
        skills:'JavaScript, HTML, CSS, NPM, React Js.',
        img: project1,
        imgBig: projectMega,
        gitHubLink3: 'https://azamatnurassyl.github.io/MegaAlmaty/',
    }, 
]

export {projects}