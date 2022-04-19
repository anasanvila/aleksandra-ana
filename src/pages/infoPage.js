import React from 'react'
import personalPhoto from '../images/personalPhoto3.png'
import {InfoWrapper,Info,InfoText,PersonalPhoto,IntroducingText, Frontend, Backend, ProjectManager, Designer} from '../style/infoPageStyle'
import { InfoDescription } from '../data/infoPageData'

const InfoPage = () => {
    
    return (
        <InfoWrapper>
            <Info>
                <InfoText>
                    <Frontend>Frontend </Frontend>
                    <Backend>developer</Backend>
                    <ProjectManager>Project Manager</ProjectManager>
                    <Designer>Designer</Designer>
                </InfoText>
                <PersonalPhoto>
                    <img src={personalPhoto} alt='personal-photografy'/>
                </PersonalPhoto>
            </Info>
            <IntroducingText dangerouslySetInnerHTML={{ __html: `${InfoDescription}` }}>
            </IntroducingText>    
            <h4 style={{color:'#9db84b'}}>Contact:</h4>   
            ana.aleksandra.djordjevic@gmail.com<br/>
            +381 63 1894743
        </InfoWrapper>
    )
}
export default InfoPage