import styled from 'styled-components';

export const Wrapp = styled.div`
    margin-top:100px;
    font-size:20px;
    font-family: 'Roboto',sans-serif;
    position: relative;
    z-index: 100;
`
export const H3 = styled.h3`
    margin-left:20px;
    // text-decoration:underline;
    color:#9db84b ;
    font-size:50px;
    font-family:system-ui;
   
`
export const H4 = styled.h4`
    & > li {
        color:white;
        font-size:15px;
        padding-left:2px;
        background: #d8616e;
        background: linear-gradient(90deg,rgba(157,184,75,1) 25%, rgba(255,255,211,0) 100%);
        text-transform:uppercase;
        margin-right:20px;
        font-weight:bold;
        font-style:italic;
        padding: 0px 0;
    }
`

export const H5 = styled.h5`
    margin-left:20px;
    font-weight:300;
    margin-top:-22px;
`
export const Img = styled.div`
    margin-top:10px
    margin-right:30px;
    display:inline-block;
    border:1px solid #ccc;
    box-shadow: 10px 10px 35px -4px rgba(158,153,158,1);
`
export const ImgWrapper = styled.div`
    @media (min-width: 1200px){
        margin-top:20px;
        display:flex;
        flex-wrap: wrap;
    }
    @media (max-width:1199px){
        display:none;
    }
`


export const Line=styled.div`
    border-bottom: 1px dashed #ccc;
    margin-top:40px;
    margin-bottom:10px;
`
export const VideoWrapper=styled.div`
    margin-top:20px;
    width: ${props=>props.width||"300px"};
    display:inline-block;
    margin-right:20px;
    border:1px solid black;
    box-shadow: 10px 10px 35px -4px rgba(158,153,158,1);
    @media (max-width:600px){
          width:200px;
        
    }
    @media (min-width:601px)and (max-width:1200){
        width:250px;
      
   }
`
export const LinkCon=styled.div`
   margin-top:20px;
`
export const MainPictureWrapper = styled.div`
    margin-top:20px;
    @media (min-width:1199px){
        display:none;
    }
    @media (max-width:1200px){
       & >img {
            max-width:100%;
       }
    }
`
