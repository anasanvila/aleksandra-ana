import styled from 'styled-components';

export const MenuItemWrapper = styled.div`    
    display:flex;
 
    @media (min-width: 600px) and (max-width: 1200px){
        flex-direction:column;
        justify-content: center ;
    }

    @media (min-width: 1200px){
        flex-direction:row;
        justify-content: flex-start ;
    }
`
export const H4=styled.h4`
    font-family: 'Roboto', sans-serif;   
    font-weight:300;
    text-transform:uppercase;
    
        
    @media (max-width: 600px) {
        display:none;   
    }

    @media (min-width: 600px) and (max-width: 900px){
        font-size:10px;        
        margin-left:5px;
        letter-spacing:2px;
    }

    @media (min-width: 900px) and (max-width: 1200px){
        font-size:15px;        
        margin-left:5px;
        letter-spacing:2px;
    }

    @media (min-width: 1200px){
        font-size:17px;
        margin-left:20px;
        letter-spacing:4px;
    }
`
export const MenuIcon = styled.div`
    align-self:center;
    @media (max-width: 600px) {
        margin-bottom:20px;   
    }
`
