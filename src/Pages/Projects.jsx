import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Organisms/Card/index'
import FormProject from '../Organisms/Form/ProjectForm'
import UpdateUserForm from '../Organisms/Form/UpdateUserForm'
import UpdateLevelForm from '../Organisms/Form/UpdateLevelForm'

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

    const handleFormUpdateuser = values => {
        console.log(values)
    }

    const handleFormUpdateLevel = values => {
        console.log(values)
    }

    const handleDelete = id => dispatch(deleteProject(id))

    return (
        <div className='container'>

            {/* ADD Project */}
            <button
                className='btn btn-primary'
                style={{ margin: '5px 10px' }}
                onClick={() => changeModal({
                    title: 'Adicionar projeto',
                    visible: !modalVisible,
                    content: (<div className='col-12'><FormProject handleSubmit={handleFormProject} afterSubmit={closeModal} /></div>)
                })}>
                Add project
			</button>

            {/* UPDATE User */}
            <button
                className='btn btn-primary'
                style={{ margin: '5px 10px' }}
                onClick={() => changeModal({
                    title: 'Atualizar usuário',
                    visible: !modalVisible,
                    content: (<div className='col-12'><UpdateUserForm handleSubmit={handleFormUpdateuser} afterSubmit={closeModal} /></div>)
                })}>
                Update user
			</button>

            {/* UPDATE User privileges */}
            <button
                className='btn btn-primary'
                style={{ margin: '5px 10px' }}
                onClick={() => changeModal({
                    title: 'Atualizar usuário',
                    visible: !modalVisible,
                    content: (<div className='col-12'><UpdateLevelForm handleSubmit={handleFormUpdateLevel} afterSubmit={closeModal} /></div>)
                })}>
                Update user level
			</button>

            {/* Sign out */}
            <button
                className='btn btn-danger'
                style={{ margin: '5px 10px' }}
                onClick={() => dispatch(signout())}>
                Sign out
			</button>

            {/* Show projects */}
            <div className='row justify-content-around'>
                <Card
                    projects={projects}
                    deleteProject={id => handleDelete(id)}
                    openModal={data => {
                        changeModal(data)
                        setModalVisible(!modalVisible)
                    }}
                    afterSubmit={closeModal}

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
