import { 
    edu_ImgArr,
    edu_academic_ImgArr,
    edu_award_ImgArr,
    edu_conferences_ImgArr,
    edu_courses_ImgArr,
    edu_exibitions_ImgArr,
    edu_certification_ImgArr,
    edu_recommendations_ImgArr
} from "./imagesLoader"

export const FONtitle = `
The Faculty of Organizational Studies (FON), University of Belgrade`
export const FONsubtitle = `Postgraduated Studies, Information Systems and Management`
export const FON = `<b>Coursework:</b><br/>
Agile Management, Software architecture, Database, Algorithms, Specialization project
`

export const ETFtitle = `
The Faculty of Electrical Engineering and Computer Science (ETF), University of Belgrade`
export const ETFsubtitle = `Master studies, Software Engineering, 2 semesters`
export const ETF = `
<b>Exams:</b><br/>
<ul>
<li> Databases </li>
<li> Criptography </li>
<li> Performance Improvement of Computer systems </li>
<li> C++ </li>
<li> Java </li>
</ul>
<br/>
<b>Coursework:</b><br/>
C++ (advanced), Java (advanced), Databases, Cryptography, Computer Organisation & Architecture, Performance Improvement of Computer Systems, Real-Time Programming, Software design, Computer Networks
`

export const ARH2title = `The Faculty of Architecture, University of Belgrade`
export const ARH2subtitle = `Master of Architecture (M.Arch), Arcitectural and Building Sciences/Technology
`
export const ARH2 = `
<b>Grade: 9.04/10</b><br/><br/><b>Team projects:</b><br/>
<ul>
<li> Boutique hotel in Belgrade city center, project management included </li>
<li> Managing construction processes (planning, control, organisation & monitoring) </li> 
<li> Architectural project with preliminary estimate of material costs & site organisation plans </li>
</ul>
<br/>
<b>Independed projects:</b>
<ul>
<li>Residental family villa, Avala, Belgrade with interior and exterior plans including full detailed projects of water supply infrastructure</li>
<li> Analytical urban research & project for reconstruction of Belgrade City Center  </li>
</ul>
<br/>
<b>Master Thesis & Project:</b><br/>
<ul>
<li> Urban & Architectural Project of Multifunctional Complex with construction details: Museum, Hotel, Port, Bus terminal, Cultural Centre with facilities, Old Slankamen, Serbia. Thesis: Tourism Development in Serbia through Urban & Architectural Project</li>
</ul>
`

export const ARH1title = `
The Faculty of Architecture, University of Belgrade`
export const ARH1subtitle = `Bachelor of Architecture (B.Arch.)`
export const ARH1 = `
<b>Team projects:</b>
<ul>
<li> Design project with full construction details for Sports & Recreational Centre, New Belgrade</li>
<li> Analytical urban research & project for multicultural part of New Belgrade - blok 70 (street, square, thematic park)</li>
<li> Analytical urban research for renewal of the Belgrade City Center (old industrial buildings, houses and streets )</li>
</ul><br/>
<b>Independent projects:</b>
<ul>
<li>Preliminary design projects for: Outdoor Skating Rink with Cafe & Restaurant, Sports & Recreational Centre Housing projects, New Belgrade</li>
<li>Urban design projects: Belgrade City Center, The Danube Bank</li>
</ul>
`

export const MGtitle = `Mathematical Grammar School, Belgrade`
export const MGsubtitle = ``
export const MG = `School for talented students in mathematics, physics and computer science`

export const ITAtitle = `
IT Academy, Zemun, Belgrade`
export const ITAsubtitle = `Certified Web Developer, PHP & Javascript Web Development, 2 semester course`
export const ITA = `
<b>Coursework:</b><br/>
HTML & CSS, Adobe Dreamweaver CS5, PHP, JavaScript, AJAX, XML, MySQL Programming & administration, APACHE web server administration, Web cryptography & security TLS/SSL, Internet marketing SEO
`

export const INTtitle=`Interventure Hackaton, Belgrade `
export const INTsubtitle=`Theme:"Knowledge sharing"`
export const INT=`
    Award winner, Project Leader, Designer and Presenter
`
export const RNtitle=`React Native, Indjija`
export const RNsubtitle=`3 months course`
export const RN=`React Native Course (3 months)`

export const RWtitle=`React Week, Belgrade`
export const RWsubtitle=`Conferences with lectures and workshops`
export const RW=`Modern React Development`

export const ANtitle=`Startit, Nova Iskra, Impact Hub Belgrade`
export const ANsubtitle=``
export const AN=`<b>Lectures:</b>
Agile Development,
Animation
`

export const Utitle=`Udemy Courses`
export const Usubtitle=``
export const U=`
<b>Coursework:</b>
<br/>UI design in Ilustrator, SVG animation design
`
export const Etitle=`Enter Conference, Belgrade`
export const Esubtitle=`3 day conference`
export const E=`Frontend workshops and lectures`

export const Stitle=`Serbian Chamber of Engineers, Belgrade`
export const Ssubtitle=``
export const S=`Licenced Senior Architect `

export const Dtitle=`Vinca Institute`
export const Dsubtitle=``
export const D=`Certified Specialist: digital video and montage ( Adobe After Effects, Adobe Premiere`

export const LEtitle=`Leskovac`
export const LEsubtitle=`Exibition`
export const LE=``

export const SKCtitle=`SKC, Belgrade`
export const SKCsubtitle=`Exibition`
export const SKC=``

export const Rectitle=''
export const Recsubtitle=''
export const Rec=''


export const eduJson = {
    academic:{
        title:'academic education',
        imgArr:edu_academic_ImgArr,
        arr: {
            fon:{
                title:FONtitle,
                subtitle:FONsubtitle,
                description:FON
            },
            etf:{
                title:ETFtitle,
                subtitile:ETFsubtitle,
                description:ETF
            },
            arhMaster:{
                title:ARH2title,
                subtitile:ARH2subtitle,
                description:ARH2
            },
            arhBachelor:{
                title:ARH1title,
                subtitile:ARH1subtitle,
                description:ARH1
            },
            mathHighSchool:{
                title:MGtitle,
                subtitile:MGsubtitle,
                description:MG
            },
        },
    },
    courses:{
        title:'courses',
        imgArr:edu_courses_ImgArr,
        arr: {
            ita: {
                title:ITAtitle,
                subtitil:ITAsubtitle,
                description:ITA
            },
            reactNative:{
                title:RNtitle,
                subtitile:RNsubtitle,
                description:RN
            },
            // online:{
            //     title:Utitle,
            //     subtitile:Usubtitle,
            //     description:U
            // }
        }
    },
    awards:{
        title:'award',
        imgArr:edu_award_ImgArr,
        arr: {
            hackaton: {
                title:INTtitle,
                subtitile:INTsubtitle,
                description:INT
            },
        }
    },
    exibitions:{
        title:'exibitions',
        imgArr:edu_exibitions_ImgArr,
        arr: {
            gallery: {
                    title:'',
                    subtitile:'',
                    description:''
                },

            // leskovac: {
            //     title:LEtitle,
            //     subtitile:LEsubtitle,
            //     description:LE
            // },
            // skc: {
            //     title:SKCtitle,
            //     subtitile:SKCsubtitle,
            //     description:SKC
            // },
        }
    },
    conferences: {
        title:'conferences / workshops / lectures',
        imgArr:edu_conferences_ImgArr,
        arr: {
            conf:{
                title:'',
                subtitile:'',
                description:''
                
            },
            // reactWeek : {
            //     title:RWtitle,
            //     subtitile:RWsubtitle,
            //     description:RW
            // },
            // enter:{
            //     title:Etitle,
            //     subtitile:Esubtitle,
            //     description:E
            // },
            // animation:{
            //     title:ANtitle,
            //     subtitile:ANsubtitle,
            //     description:AN
            // }
        }
    },
    recommendations: {
        title: 'recommendations & certifications - architecture',
        imgArr:edu_recommendations_ImgArr,
        arr: {
            architecture:{
                title:Rectitle,
                subtitile:Recsubtitle,
                description:Rec
            }
        },
    },
    certifications: {
        title: 'recommendations & certifications - IT',
        imgArr:edu_certification_ImgArr,
        arr: {
            architecture:{
                title:"",
                subtitile:"",
                description:""
            },
        },
    },
 
}