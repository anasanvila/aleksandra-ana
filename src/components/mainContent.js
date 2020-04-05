import React from 'react';
import {Wrapp, H3, H5} from '../style/mainContentStyle.js';

import Company from './company'
import {json} from '../data/projectData'

function MainContent (){

    const createProjectsArray = (data) => {
        let arrayVal=[];
        for (let [key,value] of Object.entries(data)){
            arrayVal.push(value);
        }
        return arrayVal;
    }
    const createCompanyArray=(data)=>{
        let arr=[];
        for (let [key,value] of Object.entries(data)){
            arr.push(value);
        }
        return arr;
    }

    const companyArr = createCompanyArray(json);

    return (
        
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
}

export default MainContent;
