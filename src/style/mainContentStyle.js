import styled from 'styled-components';

export const Wrapp = styled.div`
    margin-top:100px;
    margin-left:80px;
    font-size:20px;
    font-family: 'Roboto',sans-serif;
    position: relative;
    z-index: 100;
`
export const H3 = styled.h3`
    margin-left:20px;
    text-decoration:underline;
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
    margin-top:20px;
    display:flex;
    flex-wrap: wrap;
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
`
export const LinkCon=styled.div`
    margin:20px;
    margin-left:0;
    padding:5px;
    border:1px solid purple;
    background-color: lavender;
    width:40px;
`