import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from "../Organisms/Card/index";
import FormProject from '../Organisms/Form/ProjectForm'
import UpdateUserForm from '../Organisms/Form/UpdateUserForm'
import EventForm from '../Organisms/Form/EventForm'

import { postProject, getAllProjects, deleteProject } from '../Redux/Actions/ProjectActions'

const Project = () => {
    const dispatch = useDispatch()
    const projects = useSelector(state => state.Project)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])

    const handleForm = values => dispatch(postProject(values))

    const handleDelete = id => dispatch(deleteProject(id))

    return (
        <div className="container">
            <div className="row row justify-content-around">
                <div className="col-3" style={{ backgroundColor: '#e6e6e6', margin: '8px' }}>
                    <FormProject handleSubmit={handleForm} />
                </div>
                <div className="col-4" style={{ backgroundColor: '#e6e6e6', margin: '8px' }}>
                    <UpdateUserForm handleSubmit={() => console.log('NICE updateUser')} />
                </div>
                <Card projects={ projects } deleteProject={ id => handleDelete(id) } />
            </div>
        </div>
    )
}


export default Project