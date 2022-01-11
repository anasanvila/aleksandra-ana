import React from 'react';
import {H3, H5} from '../style/mainContentStyle.js';
import Project from './project';
import {Timeline} from 'vertical-timeline-component-react';

function Company({title, period, description, companyProjects}){
    return(
        <Timeline>
            <H3>{title}</H3>
            <H5>{period}</H5>
             {/* <H5><i>{description}</i> </H5> */}
            {companyProjects.map((project,index)=>(
                <Project 
                    key={`${project.projectName}--${index}`}
                    projectName={project.projectName}
                    year={project.year} 
                    title={project.title}
                    text={project.text}
                    live={project.live}
                    imgArray={project.imgArray}
                    height={project.height}
                    width={project.width}
                    link={project.link}
                    tools={project.tools}
                    video={project.video}
                />))}
        </Timeline>
    );
}

export default Company;