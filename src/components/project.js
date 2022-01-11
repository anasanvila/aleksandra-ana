import React, {useState} from 'react';
import {Img, ImgWrapper,  VideoWrapper, LinkCon, Line, H3, H4, MainPictureWrapper} from '../style/projectsStyle.js';
import {
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react'
import Lightbox from 'react-spring-lightbox';
import '../style/video-react.css'
import { Player } from 'video-react';





export const showLink = (link) => {
    if (link!=="") return (
        <LinkCon>
           You can find this project live <a href={link} target="_blank"><b><u>here</u></b></a>
        </LinkCon>
    )
}

const Project = ({projectName, year, title, text, live, type, imgArray, mainPhoto, height, width, link, tools, video}) => {

    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const images = imgArray.map( (img,index) => ({src:img, loading:'lazy', alt:`img-${index}`}) )

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    
    const onClose = () => {
            setOpen(false)
    }

    const gallery = (el, index, video, projectName, height, width)=>{
        let picture;
        if (!video) { 
            picture = <Img key={`${projectName}-${index}`}  onClick={()=>setOpen(true)}  >
                    <img src={el} height={height} key={`${projectName}${index}`} alt={`${projectName}${index}`}/>
                  </Img>
        }
            else {
                picture = <VideoWrapper key={`${projectName}-${index}`} width={width}>
                         <Player  playsInline  src={el} key={`${projectName}${index}`}/>
                      </VideoWrapper>
            }
        return picture;
    }

    return (
    <Container>
        <YearContent startDate={year} />
        <BodyContent>
        <Section title={title}>
           <H4><Description text={type} /></H4>
            <Description text={text} />
            <ImgWrapper>
                {imgArray.map((el, index)=>
                    gallery(el, index, video, projectName, height, width))} 
                <Lightbox
                    isOpen={open}
                    onPrev={gotoPrevious}
                    onClose={onClose}
                    onNext={gotoNext}
                    images={images}
                    currentIndex={currentImageIndex}
                    style={{ backgroundColor: 'rgba(40,40,40, 0.7)  ' }}
                />
            </ImgWrapper>
            <MainPictureWrapper>
            {video?<VideoWrapper key={`${projectName}`} width={width}>
                        <Player  playsInline  src={imgArray[0]} key={`${projectName}`}/>
                    </VideoWrapper>
                    :<img src={mainPhoto} alt={projectName}/>}
            </MainPictureWrapper>
            {showLink(link)}
            {live&&<h4 style={{marginTop:'30px'}}>You can find this project live: {live.map((website)=><a href={website} target="_blank"><span style={{color:'#4b7097'}}><b><u>here</u></b></span><br/></a>)}</h4>} 
            <h5><i>Tools used : </i>{tools}</h5>                                  
            <Line/>         
        </Section>
        </BodyContent>
    </Container>
    );
}

export default Project;