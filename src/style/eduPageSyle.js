import styled from 'styled-components'

export const EducationBox = styled.div`
    margin-top: 100px;
`
export const EduCategory = styled.div`
  
    text-transform:capitalize;
    color:#9db84b;
    font-weight:bold;
    font-family: system-ui;
    margin: 75px 0;

    @media (max-width:599px) {
        font-size:30px;
    }

    @media (min-width:600px) and (max-width:1000px) {
        font-size:40px;
    }

    @media (min-width:1000px) {
        font-size:50px;
    }
`

export const Pictures = styled.div`
    height:215px; 
    overflow-x:hidden;
    overflow-y:hidden;
    width:100%;
    display:flex;
`
export const EduImg = styled.div`
    height:200px;
    display:inline-block;
    & > img {
        height:100%;
        margin:4px;
    }
`