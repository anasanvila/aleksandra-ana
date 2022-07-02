import React, {useState} from 'react';
import {Img, ImgWrapper,  VideoWrapper} from '../style/projectsStyle.js';

import Lightbox from 'react-spring-lightbox';
import '../style/video-react.css'
import { Player } from 'video-react';

const Gallery = ( {projectName, imgArray, height, width, video=null} ) => {
    
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const images = imgArray.map( 
        (img,index) => ({src:img, loading:'lazy', alt:`img-${index}`}) )

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

    return(
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
    )
}

export default Gallery
