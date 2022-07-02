
import hg from '../images/design/hg.jpg'
import tkp from '../images/design/tkp.jpg'
import mini from '../images/it_projects/itekako/mini.png'
import falijedan from '../images/design/falijedan.png'
import mini1 from '../images/design/background/2.jpg'
import mini2 from '../images/design/background/3.jpg'


import {
    tkp_ImgArr,
    tkp2_ImgArr,
    hiperGradnja_ImgArr,
    faliJedanLogo_ImgArr,
    faliJedanLogo2_ImgArr,
    hand_drawn_ImgArr,
    sketches_ImgArr,
    background_ImgArr
 } from './imagesLoader'


 export const designJson = {
    // itprojects : {
    //     title:"IT Projects",
    //     period:"",
    //     description:"as previously presented",
    //     projects:{
    //         faliJedan_background:{
    //             projectName:"Vector elements for the website",
    //             year:"",
    //             title:"as previously presented",
    //             text:``,
    //             imgArray:[],
    //             mainPhoto:'',
    //             height:"250px",
    //             width:"400px",
    //             link:"",
    //             tools: "Adobe Photoshop, Illustrator",
    //             video:false
    //         }
    //     }
    // },
    vectorIllustrations : {
        title:"Vector Illustrations",
        period:"",
        description:" ",
        projects:{
            faliJedan1:{
                projectName:"Vector elements for the website",
                year:"",
                title:"VECTOR ILLUSTRATIONS",
                text:`Creating vector elements for the landing page for the app "FALI JEDAN"`,
                imgArray:[mini1, mini2],
                mainPhoto:mini,
                height:"250px",
                width:"400px",
                link:"https://www.aleksandra-ana.in.rs/falijedan",
                tools: "Pencil, Adobe Illustrator",
                video:false
            },
        }
    },
    hipergradnja_Logo : {
        title:`Design process creating logo for "HIPERGRADNJA" Construction Company`,
        period:"",
        description:" ",
        projects:{
            logoChoosen:{
                projectName:"hipergradnja_Logo",
                year:"",
                title:`"HIPERGRADNJA" - LOGO`,
                text:`Choosen logo`,
                imgArray:[hg],
                mainPhoto:hg,
                height:"200px",
                width:"400px",
                link:"",
                tools: "Pencil, Adobe Illustrator",
                video:false,
            },
            logoVariants:{
                projectName:"hipergradnja_Logo_Varijante",
                year:"",
                title:"DESIGN PROCESS",
                text:`Design process for creating logo. Requirement was also adding some assosiation for pool / water because they were also constructing pools.`,
                imgArray:hiperGradnja_ImgArr,
                mainPhoto:hiperGradnja_ImgArr[0],
                height:"200px",
                width:"400px",
                link:"",
                tools: "Pencil, Adobe Illustrator",
                video:false,
            },
        }
    },
    tkp_Logo : {
        title:`Design process creating logo for "TKP - Sustainable Energy" `,
        period:"",
        description:" ",
        projects:{
            logoChoosen:{
                projectName:"tkp_logo",
                year:"",
                title:`"Turn Key Project (TKP)" - LOGO`,
                text:`Choosen logo`,
                imgArray:[tkp],
                mainPhoto:tkp,
                height:"180px",
                width:"400px",
                link:"",
                tools: "Pencil, Adobe Illustrator",
                video:false,
            },
            logoVariants:{
                projectName:"tkp_logo_variants",
                year:"",
                title:"DESIGN PROCESS",
                text:`Design process - initial sketches `,
                imgArray:tkp_ImgArr,
                mainPhoto:tkp_ImgArr[0],
                height:"100px",
                width:"400px",
                link:"",
                tools: "Pencil, Adobe Illustrator",
                video:false,
            },
            logoVectorVariants:{
                projectName:"tkp_logo_variants",
                year:"",
                title:"DESIGN PROCESS",
                text:`Logo variations - How would logo look like in a visit card `,
                imgArray:tkp2_ImgArr,
                mainPhoto:tkp2_ImgArr[0],
                height:"220px",
                width:"400px",
                link:"",
                tools: "Pencil, Adobe Illustrator",
                video:false,
            },
        }
    },
    fali_jedan_logo : {
        title:`Design process creating logo for "FALI JEDAN" sports application`,
        period:"",
        description:" ",
        projects:{           
            faliJedanChoosen:{
                projectName:"faliJedan",
                year:"",
                title:`"FALI JEDAN"`,
                text:`Design process creating logo for "Fali jedan"`,
                imgArray:[falijedan],
                mainPhoto:falijedan,
                height:"150px",
                width:"400px",
                link:"",
                tools: "Pencil",
                video:false,
            },
            faliJedanVariants:{
                projectName:"faliJedan",
                year:"",
                title:"DESIGN PROCESS",
                text:`Hand-drawn sketches`,
                imgArray:faliJedanLogo_ImgArr,
                mainPhoto:faliJedanLogo_ImgArr[0],
                height:"200px",
                width:"400px",
                link:"",
                tools: "Pencil",
                video:false,
            },
            faliJedanVectorVariants:{
                projectName:"faliJedan",
                year:"",
                title:"DESIGN PROCESS",
                text:`Vector variants`,
                imgArray:faliJedanLogo2_ImgArr,
                mainPhoto:faliJedanLogo2_ImgArr[0],
                height:"150px",
                width:"400px",
                link:"",
                tools: "Pencil",
                video:false,
            },
        }
    },
    handDrawnIllustrations : {
        title:"Hand-Drawn Illustrations",
        period:"",
        description:" ",
        projects:{    
            sketches: {
                projectName:"ILLUSTRATIONS - SKETCHES",
                year:"",
                title:"",
                text:`Sketches`,
                imgArray:sketches_ImgArr,
                mainPhoto:sketches_ImgArr[0],
                height:"250px",
                width:"400px",
                link:"",
                tools: "Pencil, Ink",
                video:false,
            },
            hand_drawn: {
                projectName:"ILLUSTRATIONS - HAND DRAWINGS",
                year:"",
                title:"",
                text:`Illustrations for a book and exibitions, commissioned portraits (from photos)`,
                imgArray:hand_drawn_ImgArr,
                mainPhoto:hand_drawn_ImgArr[0],
                height:"250px",
                width:"400px",
                link:"",
                tools: "Pencil, Ink, Acrylic, Tempera",
                video:false,
            }
        }
    }
}


