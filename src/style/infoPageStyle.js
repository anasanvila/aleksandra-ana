//InfoWrapper,Info,InfoText,PersonalPhoto
import styled from 'styled-components';

export const InfoWrapper = styled.div`
    margin-top:-50px;
    width:100%;
    color:dimgray;
    font-family: system-ui;
    font-size:20px;
    display:flex;
    flex-direction:column;
`
export const Info = styled.div`
display:flex;
   
    @media (max-width:1200px) {
        flex-direction:column;
        justify-content:center;
    }

    @media (min-width:1200px) {
        flex-direction:row;
        justify-content:space-between;
    ]
`
export const Frontend = styled.h1`
    color:#4b7097;
    
    @media (max-width:1000px) {
        margin-top: 30px!important;
        font-size:60px!important;
        margin-left:-8px!important;
    }

    @media (min-width: 1000px) and (max-width:1199px){
        margin-left:-181px!important;
        font-size:80px!important;
        margin-top:0px!important;
    }

    @media (min-width:1200px) and (max-width:1300px) {
        font-size:100px;
        margin-left:20px;
        margin-top:0px!important;
    }

    @media (min-width:1301px){        
        font-size:150px;
        margin-left:20px;
        margin:-100px 0;
    }

`

export const Backend = styled.h1`
    color:#4b7097;

    @media (max-width:1000px) {
        margin-top: -10px!important;
        margin-left:50px!important;
        font-size:60pximportant;
    } 

    @media (min-width:1801px) and (max-width:2000px) {
        font-size:150px;
        margin-left:100px !important;
        
    }

    @media (min-width:1301px) { 
        font-size:150px;
        margin-left:171px!important;
    }


    
    @media (min-width:1001px) and (max-width:1300px) {
        font-size:80px;
        margin-left:100px !important;
        margin-top:-30px!important;
    }
    
`

export const ProjectManager = styled.h1`
    color:#d8616e;

    @media (max-width:1000px) {
        margin-top: 20px!important;
        margin-left:30px!important;
        font-size:35px!important;
    } 

    @media (min-width: 1000px) and (max-width:1199px){
        margin-left:-175px!important;
        margin-top:0px!important;
        font-size:40px;!important;
    }

    @media (min-width:1301px){        
        font-size:50px;
        margin-top:-30px!important;
        font-weight:500;
    }
    
    @media (min-width:1200px) and (max-width:1300px) {
        font-size:40px;
        margin-top:-10px!important;
        font-weight:600;
    }

    
`
export const Designer = styled.h1`
    color:#9db84b;
    font-size:90px;

    @media (max-width:1000px) {
        margin-top:10px!important;
        font-size:60px!important;
        margin-bottom:10px!important;
    }

    @media (min-width:1200px) and (max-width:1300px) {
        font-weight:700!;
        margin-left:30px!important;
        margin-top:30px!important;
    }

    @media (min-width: 1000px) and (max-width:1199px){
        font-weight:700!;
        margin-left:206px!important;
        margin-top:-10px!important;
    }

     @media (min-width:1301px){
        font-weight:700;
        margin-left:64px!important;
        margin-top:-20px!important;
    }


`

export const InfoText = styled.div`
   
    & > h1 {
        display:block;
        margin:-80px -10px 0 -10px;
        padding:0;
    }

    @media (min-width:1000px) and (max-width:1200px) {
        margin-left:100px;
    }
    @media (max-width:1200px) {
        margin:0 auto;
        padding-top:30px;
    }

    
    @media (min-width:1200px) and (max-width:1232px) {
        margin-top:58px;
    }

    @media (min-width:1233px) {
        margin-top:140px;
    }
`
export const PersonalPhoto = styled.div`
    height:500px;

    @media (max-width:799px){
        overflow-y:hidden; 
        height:350px!important;          
    }

    & > img {
      
        @media (max-width:799px){
            width:100%;
            height:auto;       
            margin-top:-40px;     
        }

        @media (min-width:800px) and (max-width:1200px){
            height:100%;
            width:auto;
            margin-left:20%;
        }

        @media (min-width:1200px){
            height:100%;
            width:auto;
        }

    }
    
`
export const IntroducingText = styled.div`
    margin 30px 0;

    & > p {
        text-align: justify;
    }
    &  a {
        text-decoration:none;
        color: #4b7097 !important;
        & : hover {
            color: #f0b49d
         }      

`
