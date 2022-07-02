import React from 'react'
import {eduJson} from '../data/eduPageData'
import {EducationBox, EduCategory, Pictures, EduImg} from '../style/eduPageSyle'
import { edu_ImgArr } from '../data/imagesLoader'
import Gallery from '../components/gallery'
import { MainPictureWrapper } from '../style/projectsStyle'

const Course = ({title, subtitle, children}) => (
    <div>
        <h2 style={{color:' #4b7097'}}>{title}</h2>
        <h4>{subtitle}</h4>
        <div>{children}</div>
        <br/>
        <hr/>
    </div>
)

const createCategoriesArray = (data) => {
    let arrayVal=[];
    for (let [key,value] of Object.entries(data)){
        console.log(key);
        arrayVal.push(value);
    }
    return arrayVal;
}

const createInstitutionArray = (data) => {
    let arr=[];
    for (let [key,value] of Object.entries(data)){
        console.log(key);
        arr.push(value);
    }
    return arr;
}

const categoryArray = createCategoriesArray(eduJson);

const Institution = ({title,projects}) => {
    console.log("title",title,"projects",projects);
    return (
        <div>
            {projects.map((el)=>(
                <Course title={el.title} subtitle={el.subtitle}>
                    <div dangerouslySetInnerHTML={{ __html: `${el.description}` }}>
                    </div>
                </Course>)
            )}
        </div>
    )
}

const Education = () => {
    return (
        <EducationBox>            
             {categoryArray.map(category=>{
                console.log("category = ", category)
                return(
                <div>
                    <EduCategory>{category.title}:</EduCategory>
                    <Pictures>
                        <Gallery projectName={category.title} imgArray={category.imgArr} height="200px" width="250px" />
                    </Pictures>
                    <MainPictureWrapper>
                         <img src={category.imgArr[1]}/>
                    </MainPictureWrapper>
                    <Institution
                        title={category.title}
                        projects={createInstitutionArray(category.arr)}
                    />      
                </div>
            )})} 
        </EducationBox> 
    )
}
    
export default Education