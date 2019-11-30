import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from "../Organisms/Card/index";
import FormProject from '../Organisms/Form/ProjectForm'

import { getAllProjects, postProject } from '../Redux/Actions/ProjectActions'

const Project = () => {
    const dispatch = useDispatch()
    const projects = useSelector(state => state.Project)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])


    const handleForm = values => {
        dispatch(postProject(values))
    }
    
    return (
        <div style={{ display: 'flex' }}>
            <div className="col-3" style={{ backgroundColor: '#e6e6e6', height: '320px' }}>
                <FormProject handleSubmit={ handleForm } />
            </div>
            <div className="col-9">
                <Card projects={ projects } />
            </div>
        </div>
    )
}


export default Project