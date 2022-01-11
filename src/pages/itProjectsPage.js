import React from 'react';
import {Wrapp} from '../style/projectsStyle.js';

import Company from '../components/company'
import {json} from '../data/itProjectsPageData'

const createProjectsArray = (data) => {
    let arrayVal=[];
    for (let [key,value] of Object.entries(data)){
        console.log(key);
        arrayVal.push(value);
    }
    return arrayVal;
}

const createCompanyArray=(data)=>{
    let arr=[];
    for (let [key,value] of Object.entries(data)){
        console.log(key);
        arr.push(value);
    }
    return arr;
}
const companyArr = createCompanyArray(json);

const ProjectsPage = () => (
     <Wrapp>
          {companyArr.map((company)=>
             <Company
                title={company.title}
                period={company.period}
                description={company.description}
                companyProjects={createProjectsArray(company.projects)}
            />)
          }
      </Wrapp>
    );

export default ProjectsPage;
