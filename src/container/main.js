import React, {Component} from 'react';
import styled from 'styled-components';
import picture from '../images/ana2.png';
import MainContent from '../components/mainContent';
import Menu from '../components/menu';
import '../style/video-react.css'
import {Header, BackgroundSVGImage, Image, TextWrapper, H1, H5} from '../style/mainStyle.js';


class Main extends Component {
    constructor() {
        super();
        this.state = { 
            height: window.innerHeight, 
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
          height: window.innerHeight, 
          width: window.innerWidth
        });
    }

  render(){
    const Wrapper=styled.div`
        position: relative;
        width: ${this.state.width};
    }
    `
    let string=`0,100 ${this.state.width},370 ${this.state.width},400 0,330`
    
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
            <MainContent width={this.state.width}/>
        </Header>
        <BackgroundSVGImage>            
            <svg width={this.state.width} height={this.state.height} fill="#f2f2f2" >
                <polygon points={string} />      
            </svg>
        </BackgroundSVGImage>
      </Wrapper>
    );
  }
}

export default Main;
