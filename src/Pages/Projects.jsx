import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Organisms/Card/index'
import FormProject from '../Organisms/Form/ProjectForm'
import UpdateUserForm from '../Organisms/Form/UpdateUserForm'

import Modal from '../Organisms/Event'

import {
	postProject,
	getAllProjects,
	deleteProject
} from '../Redux/Actions/ProjectActions'

const Project = () => {
	const dispatch = useDispatch()
	const projects = useSelector(state => state.Project)

	useEffect(() => dispatch(getAllProjects()), [dispatch])
    
    // Project
	const [showModalProject, alterShowProject] = useState(false)
	const changeVisibilityProject = () => alterShowProject(!showModalProject)

    // User
	const [showModalUser, alterShowUser] = useState(false)
	const changeVisibilityUser = () => alterShowUser(!showModalUser)

	const handleFormProject = values => {
        dispatch(postProject(values))
        changeVisibilityProject()
    }

	const handleDelete = id => dispatch(deleteProject(id))

	return (
		<div className='container'>
            <button className="btn btn-primary" onClick={ () => changeVisibilityProject() }>Add project</button><br/>
            <button className="btn btn-primary" onClick={ () => changeVisibilityUser() }>Update user</button>
			
            <div className='row justify-content-around'>
				<Modal
					title='Adicionar projeto'
					visibility={showModalProject}
					alterVisibility={changeVisibilityProject}>
					<FormProject handleSubmit={handleFormProject} />
				</Modal>

                <Modal
					title='Atualizar usuário'
					visibility={showModalUser}
					alterVisibility={changeVisibilityUser}>
					<UpdateUserForm
						handleSubmit={() => console.log('NICE updateUser')}
					/>
				</Modal>

				<Card
					projects={projects}
					deleteProject={id => handleDelete(id)} />
			</div>
		</div>
	)
}

export default Project
