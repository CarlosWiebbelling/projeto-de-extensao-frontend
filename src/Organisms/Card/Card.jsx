import React from 'react'
import { useSelector } from 'react-redux'

import Badge from '../../Molecules/Badge'
import Event from '../../Molecules/Event'
import EventForm from '../Form/EventForm'

const Card = ({ projects, deleteProject, openModal }) => {
	const changeVisibility = () => openModal({
		title: 'Adicionar evento',
		content: (<EventForm handleSubmit={() => console.log('NICE event')} />)
	})

	const user = useSelector(state => state.User)

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
									style={{
										fontWeight: 200,
										fontSize: '17px',
										marginRight: '13px'
									}}
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
							see more
							<i className='fas fa-angle-right'></i>
						</button>
						<button
							className='fakeA btnCard'
							onClick={changeVisibility}>
							novo evento{' '}
							<i
								className='fas fa-plus'
								style={{ fontSize: '15px' }}></i>
						</button>

						<Badge tags={project.tags} />
					</div>
					<Event events={
						[
							{
								_id: 123123,
								title: 'Evento fake 1',
								date: '15/12/2019',
								description: 'AS A SD ASD AWD AS D d SD  d AS As',
								tags:
									[
										{
											name: 'TECH'
										}, {
											name: 'LG'
										}
									]
							}
						]
					} />
				</div>
			</div>
		))

	return projects.projects === undefined ? <h1>Nothing to show</h1> : renderProjects()

}

export default Card
