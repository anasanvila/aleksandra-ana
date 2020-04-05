import gr1 from '../images/gr1.png'
import gr2 from '../images/gr2.png'
import gr3 from '../images/gr3.png'
import gr4 from '../images/gr4.png'
import ib1 from '../images/ib1.png'
import ib2 from '../images/ib2.png'
import ib3 from '../images/ib3.png'
import ib4 from '../images/ib4.png'
import em1 from '../images/em1.png'
import em2 from '../images/em2.png'
import em3 from '../images/em3.png'
import em4 from '../images/em4.png'
import em5 from '../images/em5.png'
import em6 from '../images/em6.png'
import em7 from '../images/em7.png'
import em9 from '../images/em9.png'
import cg1 from '../images/cg1.png'
import cg2 from '../images/cg2.png'
import cg3 from '../images/cg3.png'
import un1 from '../images/unity1.png'
import un2 from '../images/unity2.png'
import cl1 from '../images/cl1.jpg'
import cl2 from '../images/cl2.jpg'
import cl3 from '../images/cl3.jpg'
import cl4 from '../images/cl4.jpg'
import cl5 from '../images/cl5.jpg'
import cl6 from '../images/cl6.jpg'
import cl7 from '../images/cl7.jpg'
import fj1 from '../images/fj1.png'
import fj2 from '../images/fj2.png'

import video1 from '../images/video1.mov'
import video2 from '../images/video2.mov'
import video from '../images/video.mov'

import fpwide from '../images/animationWide.mov'
import fpmobile from '../images/animationMobile.mov'

export const json = {
    interventure : {
        title:"Interventure",
        period:"(2019 - current)",
        description:"",
        projects:{
            fp: {
                projectName:"fp",
                year:"2020",
                title:"ADDING FEATURES FOR THE WEB SITE AND ANIMATION PLUG IN",
                text:"Refactoring code and adding features in Vanilla JS for animation plug-in. Working on website: www.flaschenpost.ch",
                imgArray:[fpwide],
                height:"150px",
                width:"400px",
                link:"",
                tools: " Plain JS, JQuery, Adobe XD, Git, JIRA, MacOS",
                video:true,
            },
        },
    },
    onPoint:{
        title:"On Point Software Engineering",
        period:"2017 - 2019",
        description:"Company is specialized in development of web solutions, Facebook applications, mobile application for iOS and Android and game development",
        projects:{
            grabber: {
                projectName:"grabber",
                year:"2019",
                title:"LOYALTY APP ADMIN PANEL",
                text:"Admin panel for adding/editing/deleting products, users, companies, events, locations and displaying statistics for loyalty app",
                imgArray:[ gr1, gr2, gr3, gr4 ],
                height:"150px",
                width:"",
                link:"",
                tools: " React, ES6, Git, MacOS",
                video:false,
            },
            ibis: {
                projectName:"ibis",
                year:"2019",
                title:"REPORTING TOOL FOR MAJOR CABLE OPERATOR NETWORK",
                text:"Tracking and displaying statistics about active users, channels, contents, network. Data visualization (pie / bar / line charts, tables, cards)",
                imgArray:[ ib1, ib2, ib3, ib4 ],
                height:"330px",
                width:"",
                link:"",
                tools: " React.js, Redux, ES6, Git, MacOS, JIRA, Scrum methodology ( Chart.js, Material Design, Styled Components, JSS)",
                video:false,
            },
            popPro: {
                projectName:"video",
                year:"2018",
                title:"ENGINE FOR ONLINE CREATING AND RENDERING 3D MODELS",
                text:"Developing engine for online creating furniture design and visual view of furniture and rooms",
                imgArray:[video, video1, video2],
                height:"",
                width:"300px",
                link:"",
                tools: " Vanilla JavaScript, Three.js, Git, MacOS",
                video:true,
            },
            edu : {
                projectName:"edu",
                year:"2017",
                title:"ONLINE EDUCATIONAL PLATFORM",
                text:"Platform for connecting students and teachers with options to search teachers by criteria, book class and follow improvement of students. Platform has possibility for collecting and organize class material and for tracking progress of student and a teacher. It is possible to add/edit/delete students and teachers using admin panel with a special rights of administrator",
                imgArray:[em1, em2, em3, em4, em5, em6, em7, em9],
                height:"320px",
                width:"",
                link:"",
                tools:" React.js, Redux, ES6, SASS, Git, MacOS, JIRA, Scrum methodology",
                video:false,
            },
        },
    },
    freelance : {
        title:"Freelance",
        period:"(2017)",
        description:"",
        projects:{
            cardgame : {
                projectName:"cardgame",
                year:"2017",
                title:"SMALL CARD GAME",
                text:"Complete card game (frontend part) for online playing, with design included",
                imgArray:[cg1, cg2, cg3],
                height:"200px",
                width:"",
                link:"",
                tools:" React.js, Redux, Bootstrap, Adobe Ai & Ps, Linux OS",
                video:false,
            },
        },
    },
    itekako : {
        title:"Itekako IT Solutions",
        period:"(2016 - 2017)",
        description:"",
        projects:{
            unity : {
                projectName:"unity",
                year:"2017",
                title:"REPORTING PLATFORM FOR TRACKING RELEASE VERSIONS",
                text:"One-page reporting platform with a timeline for tracking release versions of Unity",
                imgArray:[un1, un2],
                height:"400px",
                width:"",
                link:"",
                tools:" React.js, Git, JIRA, Scrum methodology, Linux OS",
                video:false,
            },
            cl : {
                projectName:"cl",
                year:"2016",
                title:"CAREER LADDER",
                text:"A platform for managing human resources, assigning projects to employees, tracking progress and monitoring employees’ career and growth",
                imgArray:[cl1, cl2, cl3, cl4, cl5, cl6, cl7],
                height:"300px",
                width:"",
                link:"",
                tools:" React.js, Redux, SASS, TypeScript, Git, JIRA, Scrum methodology",
                video:false,
            },
            fj : {
                projectName:"fj",
                year:"2016",
                title:" DESIGN OF LANDING PAGE FOR SPORT APPLICATION - 'FALI JEDAN'",
                text:"Design of landing page for sport application for organizing pickup games and connecting with other players in the same area. Design included creating SVG elements of background picture and a athlete with a CSS / JS animations of athlete walking through that background",
                imgArray:[fj1, fj2],
                height:"70px",
                width:"",
                link:"https://aleksandra-ana.in.rs/falijedan",
                tools:" HTML5, CSS3, Vanilla JS, Bootstrap, Inkscape, Git, Linux OS",
                video:false,
            },
        },
    }
}