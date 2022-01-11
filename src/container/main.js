import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import picture from '../images/ana2.png';
import Router from './router';
import Menu from '../components/menu';
import '../style/video-react.css'
import {Header, BackgroundSVGImage, Image, TextWrapper, MainWrapper, H1, H5} from '../style/mainStyle.js';


function Main () {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[width]);

    useEffect(()=>{
        setHeight(window.innerWidth)
    },[height]);
    
    const Wrapper=styled.div`
        position: relative;
        width: ${width};
    `
    let string=`0,100 ${width},370 ${width},400 0,330`
    
    return (
      <Wrapper>
        <Header>                
            <Menu/>
            <Image>
                <img src={picture} width="200px" alt="ana" />
            </Image>
            <TextWrapper>
                <H1>Aleksandra Ana Đorđević</H1>
                <H5>FRONTEND JAVASCRIPT DEVELOPER</H5>
            </TextWrapper> 
        </Header>
        
        <MainWrapper>
            <Router/>
        </MainWrapper>
       
        <BackgroundSVGImage>            
            <svg width={width} height={height} fill="#f2f2f2" >
                <polygon points={string} />      
            </svg>
        </BackgroundSVGImage>
      </Wrapper>
    );
  }

export default Main;
