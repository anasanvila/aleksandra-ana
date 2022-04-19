import React from 'react'
import {Route, Routes} from 'react-router-dom'
import InfoPage from '../pages/infoPage'
import Education from '../pages/education'
import Architecture from '../pages/architecture'
import Design from '../pages/design'
import ProjectsPage from '../pages/itProjectsPage'

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<InfoPage/>} />
            <Route path="/education"element={<Education/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/architecture" element={<Architecture/>}/>
            <Route path="/design" element={<Design/>}/>
        </Routes>        
    )
}

export default Router