import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from "../Organisms/Card/index";
import FormProject from '../Organisms/Form/ProjectForm'
import UpdateUserForm from '../Organisms/Form/UpdateUserForm'
import EventForm from '../Organisms/Form/EventForm'

import { postProject } from '../Redux/Actions/ProjectActions'

const Project = () => {
    const dispatch = useDispatch()
    const projects = useSelector(state => state.Project)

    // useEffect(() => {
    //     dispatch(getProjects())
    // }, [dispatch])


    const handleForm = values => {
        dispatch(postProject(values))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3" style={{ backgroundColor: '#e6e6e6', margin: '8px' }}>
                    <FormProject handleSubmit={handleForm} />
                </div>
                <div className="col-3" style={{ backgroundColor: '#e6e6e6', margin: '8px' }}>
                    <UpdateUserForm handleSubmit={() => console.log('NICE updateUser')} />
                </div>
                <div className="col-3" style={{ backgroundColor: '#e6e6e6', margin: '8px' }}>
                    <EventForm handleSubmit={() => console.log('NICE event')} />
                </div>
                <div className="col-9">
                    <Card projects={projects} />
                </div>
                {/* <div className="col-9">
                    <Card events={events} />
                </div> */}
            </div>
        </div>
    )
}


export default Project