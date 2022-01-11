import React from 'react';
import {H3, H5} from '../style/projectsStyle.js';
import Project from './project';
import {Timeline} from 'vertical-timeline-component-react';

function Company({title, period, companyProjects}){
    return(
        <Timeline dateFormat='only-number' theme={
            { yearColor: "#fff", lineColor: "#4b7097 ", dotColor: " #4b7097 ", borderDotColor: "#ffffff", titleColor: "black", subtitleColor: "black", textColor: "black" }
        }>
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
                    mainPhoto={project.mainPhoto}
                    height={project.height}
                    width={project.width}
                    link={project.link}
                    tools={project.tools}
                    type={project.type}
                    video={project.video}
                />))}
        </Timeline>
    );
}

export default Company;