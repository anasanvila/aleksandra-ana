import React, {useState} from 'react';
import {Img, ImgWrapper,  VideoWrapper, LinkCon, Line, H3, H4, MainPictureWrapper} from '../style/projectsStyle.js';
import {
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react'
import Gallery from './gallery'
import { Player } from 'video-react';

export const showLink = (link) => {
    if (link!=="") return (
        <LinkCon>
           You can find this project live <a href={link} target="_blank"><b><u>here</u></b></a>
        </LinkCon>
    )
}

const Project = (props) => {
    const {projectName, year, title, text, live, type, imgArray, mainPhoto, height, width, link, tools, video} = props;

    return (
    <Container>
        <YearContent startDate={year} />
        <BodyContent>
        <Section title={title}>
           <H4><Description text={type} /></H4>
            <Description text={text} />
            <Gallery {...props}/>
            <MainPictureWrapper>
            {video?<VideoWrapper key={`${projectName}`} width={width}>
                        <Player  playsInline  src={imgArray[0]} key={`${projectName}`}/>
                    </VideoWrapper>
                    :<img src={mainPhoto} alt={projectName}/>}
            </MainPictureWrapper>
            {showLink(link)}
            {live&&<h4 style={{marginTop:'30px'}}>You can find this project live:
                 {live.map((website)=><a href={website} target="_blank"><span style={{color:'#4b7097'}}><b><u>here</u></b></span><br/></a>)}</h4>} 
            <h5><i>Tools used : </i>{tools}</h5>                                  
            <Line/>         
        </Section>
        </BodyContent>
    </Container>
    );
}

export default Project;