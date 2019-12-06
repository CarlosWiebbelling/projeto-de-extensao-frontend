import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Event from '../../Molecules/Event'
import EventForm from '../Form/EventForm'
import Modal from '../../Molecules/Modal'

const Card = ({ projects, deleteProject }) => {
	const [showModal, alterShow] = useState(false)
	const changeVisibility = () => alterShow(!showModal)

	const user = useSelector(state => state.User)
	console.log(user.currentLogged)

	const renderProjects = () =>
		projects.projects.map(project => (
			<div className='col-5' key={project._id}>
				<div className='project'>
					<div className='header'>
						<h4 className='titleProject'>
							{project.name}

							{user.currentLogged.level === 3 && (
								<i
									className='fas fa-close'
									onClick={() =>
										deleteProject(project._id)
									}></i>
							)}

							{user.currentLogged.level === 3 && (
								<i
									className='fas fa-edit'
									style={{ fontWeight: 200, fontSize: '17px', marginRight: '13px' }}
									onClick={() =>
										deleteProject(project._id)
									}></i>
							)}

						</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Doloremque eligendi libero rem illo eveniet
							dolore non! Eligendi, obcaecati commodi ipsa
							asperiores quae inventore excepturi libero
							voluptatibus magni, veritatis nisi a!
						</p>

						<button className='fakeA btnCard'>
							see more <i className='fas fa-angle-right'></i>
						</button>
						<Modal
							title='Adicionar evento'
							visibility={showModal}
							alterVisibility={changeVisibility}>
							<EventForm
								handleSubmit={() => console.log('NICE event')}
							/>
						</Modal>

						<button
							className='fakeA btnCard'
							onClick={changeVisibility}>
							novo evento{' '}
							<i
								className='fas fa-plus'
								style={{ fontSize: '15px' }}></i>
						</button>

					</div>

					<Event events={ [] }/>
				</div>
			</div>
		))

	return projects.projects === undefined ? (
		<h1>Nothing to show</h1>
	) : (
		renderProjects()
	)
}

export default Card
