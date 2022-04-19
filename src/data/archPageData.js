import {
    mm_ImgArr,
    museum_ImgArr,
    master_ImgArr,
    villa_ImgArr,
    takovska_ImgArr,
    hotel_ImgArr
} from '../data/imagesLoader'

export const archJson = {
    built: {
        title:"Built project",
        period:"",
        description:"",
        projects:{
            houses:{
                projectName:"Houses in a row",
                year:"2006-2009",
                title:"FAMILY HOMES",
                text:`Row of four family homes, each with own garage and roof. Address: 2 Marka Miljanova Street, Belgrade, Serbia`,
                imgArray:mm_ImgArr,
                mainPhoto:mm_ImgArr[0],
                height:"300px",
                width:"400px",
                link:"",
                tools: "AutoCad",
                video:false,
            }
        }
    },
    student : {
        title:"Exibition projects",
        period:"",
        description:"",
        projects:{          
            villa:{
                projectName:"Studio",
                year:"2009",
                title:"RESIDENTAL VILLA WITH A POOL",
                text:`Residental house with a pool`,
                imgArray:villa_ImgArr,
                mainPhoto:villa_ImgArr[0],
                height:"300px",
                width:"400px",
                link:"",
                tools: "AutoCad",
                video:false,
            },
            takovska:{
                projectName:"Studio",
                year:"2009",
                title:"SMALL BOUTIQUE HOTEL",
                text:`Takovska street`,
                imgArray:takovska_ImgArr,
                mainPhoto:takovska_ImgArr[0],
                height:"300px",
                width:"400px",
                link:"",
                tools: "AutoCad",
                video:false,
            },
            perm:{
                projectName:"Perm",
                year:"2009",
                title:"HOTEL",
                text:'Design variations',
                imgArray:hotel_ImgArr,
                mainPhoto:hotel_ImgArr[0],
                height:"300px",
                width:"400px",
                link:"",
                tools: "AutoCad",
                video:false,
            },
            museum:{
                projectName:"Studio",
                year:"2009",
                title:"MUSEUM - PART OF THE MASTER PROJECT",
                text:``,
                imgArray:museum_ImgArr,
                mainPhoto:museum_ImgArr[0],
                height:"300px",
                width:"400px",
                link:"",
                tools: "AutoCad",
                video:false,
            },
            master:{
                projectName:"Master",
                year:"2009",
                title:"MULTIFUNCTIONAL TOURIST CENTER - MASTER PROJECT",
                text:`Consisting of Museum, Hotel, Sport & Recreational Center, Spa & Wellness, Bus Terminal and Port`,
                imgArray:master_ImgArr,
                mainPhoto:master_ImgArr[0],
                height:"250px",
                width:"400px",
                link:"",
                tools: "AutoCad, Maya",
                video:false,
            }   
        }
    },  
}
