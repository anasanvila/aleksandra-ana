import React from 'react'
import {Wrapp} from '../style/projectsStyle.js';
import { showLink } from '../components/project.js';
import {H3, H4} from '../style/projectsStyle';
import Company from '../components/company'
import {designJson} from '../data/designPageData'

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
const companyArr = createCompanyArray(designJson);

const Design = () => {
    return (
        <Wrapp>
        <H3>It projects</H3>
        <div style={{margin:'-20px 0 -20px 50px'}}><H4>as previously presented</H4></div>
        {companyArr.map((company)=>
           <Company
              title={company.title}
              period={company.period}
              description={company.description}
              companyProjects={createProjectsArray(company.projects)}
          />)
        }
    </Wrapp>
    )
}
export default Design