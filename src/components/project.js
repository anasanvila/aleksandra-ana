import React from 'react';
import {Img, ImgWrapper,  VideoWrapper, LinkCon, Line} from '../style/mainContentStyle.js';
import {
    Content,
    ContentYear,
    ContentBody,
    Description
  } from 'vertical-timeline-component-react';
  import '../style/video-react.css'
  import { Player } from 'video-react';

const arr = (el, index, video, projectName, height, width)=>{
    let ret;
    console.log(width)
    if (!video) { 
        ret = <Img key={`${projectName}-${index}`}>
                 <img src={el} height={height} key={`${projectName}${index}`} alt={`${projectName}${index}`}/>
              </Img>
    }
        else {
            ret = <VideoWrapper key={`${projectName}-${index}`} width={width}>
                     <Player  playsInline  src={el} key={`${projectName}${index}`}/>
                  </VideoWrapper>
        }
    return ret;
}

const showLink = (link) => {
    if (link!=="") return (
        <LinkCon>
            <a href={link} target="_blank">LIVE</a>
        </LinkCon>
    )
}

const Project = ({projectName, year, title, text, live, imgArray, height, width, link, tools, video})=>{
    return(
        <Content>
            <ContentYear year={year} />
            <ContentBody title={title}>
                <Description text={text} />
                {live&&<h5>{live.map((website)=><a href={website} target="_blank">{website}<br/></a>)}</h5>}
                 <ImgWrapper>
                    {imgArray.map((el, index)=>
                        arr(el, index, video, projectName, height, width))}
                </ImgWrapper>
                {showLink(link)}
                <h5><i>Tools used : </i>{tools}</h5>                                  
                <Line/>         
            </ContentBody>
        </Content>
    );
}

export default Project;