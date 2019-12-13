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

import { updateUser } from '../Redux/Actions/User'

import { signout } from '../Redux/Actions/Auth'

const Project = () => {
	const dispatch = useDispatch()
	const projects = useSelector(state => state.Project)

	useEffect(() => dispatch(getAllProjects()), [dispatch])

	// Modal
	const [modalTitle, setModalTitle] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState('');
	const changeModal = ({ title = modalTitle, visible = modalVisible, content = modalContent }) => {
		setModalTitle(title);
		setModalVisible(visible);
		setModalContent(content);
	}
	const closeModal = () => setModalVisible(false)

	const handleFormProject = values => {
		dispatch(postProject(values));
		changeModal({
			title: 'Adicionar projeto',
			visible: !modalVisible,
			content: (<div className='col-12'><FormProject handleSubmit={handleFormProject} afterSubmit={closeModal} /></div>)
		});
	}

	const handleFormUpdateUser = values => {
		console.log(values)
		dispatch(updateUser(values));
		changeModal({
			title: 'Atualizar usuário',
			visible: false,
			content: (<div className='col-12'><UpdateUserForm handleSubmit={handleFormUpdateUser} afterSubmit={closeModal} /></div>)
		});
	}

	const handleDelete = id => dispatch(deleteProject(id))

	return (
		<div className='container'>
			<button
				className='btn btn-primary'
				onClick={() => changeModal({
					title: 'Adicionar projeto',
					visible: !modalVisible,
					content: (<div className='col-12'><FormProject handleSubmit={handleFormProject} afterSubmit={closeModal} /></div>)
				})}>
				Add project
			</button>
			<button
				className='btn btn-primary'
				style={{ margin: '0px 15px' }}
				onClick={() => changeModal({
					title: 'Atualizar usuário',
					visible: !modalVisible,
					content: (<div className='col-12'><UpdateUserForm handleSubmit={handleFormUpdateUser} afterSubmit={closeModal} /></div>)
				})}>
				Update user
			</button>
			<button
				className='btn btn-danger'
				onClick={() => dispatch(signout())}>
				Sign out
			</button>

			<div className='row justify-content-around'>

				<Card
					projects={projects}
					deleteProject={id => handleDelete(id)}
					openModal={data => {
						changeModal(data)
						setModalVisible(!modalVisible)
					}}

				/>

				<Modal
					title={modalTitle}
					visibility={modalVisible}
					alterVisibility={() => setModalVisible(!modalVisible)}>
					{modalContent}
				</Modal>
			</div>
		</div>
	)
}

export default Project
