import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Badge from '../../Molecules/Badge'
import Event from '../../Molecules/Event'
import UpdateEventForm from '../Form/UpdateEventForm'

import { postEvent } from '../../Redux/Actions/EventActions'

const Card = ({ projects, deleteProject, openModal, afterSubmit }) => {

	const dispatch = useDispatch()

	const handleEventSubmit = (values) => {
		console.log(values)
		postEvent(dispatch(values))
	}

	const changeVisibility = () => {
		openModal({
			title: 'Adicionar evento',
			content: (<UpdateEventForm handleSubmit={handleEventSubmit} afterSubmit={afterSubmit} />)
		})
	}

	const user = useSelector(state => state.User.currentLogged)

	const isAdminOfProject = project => project.projectAdmins.filter(admin => user.id === admin._id).length > 0

	const renderProjects = () =>
		projects.projects.map(project => (
			<div className='col-5' key={project._id}>
				<div className='container mainContainer'>
					<div>
						<h4 className='titleProject'>
							{project.name}

							{user.level === 3 && isAdminOfProject(project) && (
								<i
									className='fas fa-close'
									onClick={() =>
										deleteProject(project._id)
									}></i>
							)}

							{user.level === 3 && isAdminOfProject(project) && (
								<i
									className='fas fa-edit'
									style={{
										fontWeight: 200,
										fontSize: '17px',
										marginRight: '13px'
									}}
									onClick={() =>
										console.log(project._id)
									}></i>
							)}
						</h4>
						<p className='card-text'>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Doloremque eligendi libero rem illo eveniet
							dolore non! Eligendi, obcaecati commodi ipsa
							asperiores quae inventore excepturi libero
							voluptatibus magni, veritatis nisi a!
						</p>

						<Badge tags={project.tags} />
						
						{user.level === 3 && isAdminOfProject(project) && (
							<div className='ml-2' style={{margin: 20}}>
								<button className='btn btn-success' style={{margin: 5}}>
									see more
									{/* <i className='fas fa-angle-right'></i> */}
								</button>
								<button
									className='btn btn-success'
									onClick={changeVisibility}>
									novo evento{' '}
									<i
										style={{ fontSize: '15px' }}></i>
								</button>
							</div>
						)}
						
					</div>
					<Event events={project.events} />
				</div>
			</div>
		))

	return projects.projects === undefined ? <h1>Nothing to show</h1> : renderProjects()

}

export default Card
