import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Organisms/Card/index'
import FormProject from '../Organisms/Form/ProjectForm'
import UpdateUserForm from '../Organisms/Form/UpdateUserForm'

import Modal from '../Molecules/Modal'

import {
	postProject,
	getAllProjects,
	deleteProject
} from '../Redux/Actions/ProjectActions'

import { signout } from '../Redux/Actions/Auth'

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
			<button
				className='btn btn-primary'
				onClick={() => changeVisibilityProject()}>
				Add project
			</button>
			<button
				className='btn btn-primary'
				style={{ margin: '0px 15px' }}
				onClick={() => changeVisibilityUser()}>
				Update user
			</button>
			<button
				className='btn btn-danger'
				onClick={() => dispatch(signout())}>
				Sign out
			</button>

			<div className='row justify-content-around'>
				<Modal
					title='Adicionar projeto'
					visibility={showModalProject}
					alterVisibility={changeVisibilityProject}>
					<div className='col-12'>
						<FormProject handleSubmit={handleFormProject} />
					</div>
				</Modal>

				<Modal
					title='Atualizar usuário'
					visibility={showModalUser}
					alterVisibility={changeVisibilityUser}>
					<div className='col-12'>
						<UpdateUserForm
							handleSubmit={() => console.log('NICE updateUser')}
						/>
					</div>
				</Modal>

				<Card
					projects={projects}
					deleteProject={id => handleDelete(id)}
				/>
			</div>
		</div>
	)
}

export default Project
