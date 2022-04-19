import styled from 'styled-components';

export const Header = styled.div`
    color: dimgray;
    font-size: 26px;
    font-weight: bold;
    position: relative;
    z-index: 100;
`
export const BackgroundSVGImage = styled.div`
    color: #999999;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
`
export const Image=styled.div`
    float:right;
    padding-right:50px;
    margin-top:-10px;
`
export const TextWrapper = styled.div`
    padding-top:0px;
    padding-left:100px;
`
export const H1=styled.h1`    
    font-size:80px;
    font-family: 'Times New Roman', serif;

    @media (max-width:600px){
        font-size:41px;
        display:block;
    }

`
export const H5=styled.h5`
    font-size:20px;
    font-weight:500;
    margin-top:-45px;
    font-family: 'Roboto', sans-serif;
   
    letter-spacing:4px;
    font-weight:600px;

    @media (max-width:600px){
        display:block;
        margin-top:20px;
    }
`
export const MainWrapper = styled.div`
    @media (max-width:600px){
        width:90%;
        margin:0 auto;
    }
    @media (min-width:601px) and (max-width:1200px){
        width:90%;
        margin:0 auto
    }
    @media (min-width:1200px){}
        width:85%;
        margin:0 auto;
    }
`