import React from 'react'
import { useSelector } from 'react-redux'

import Badge from '../../Molecules/Badge'
import Event from '../../Molecules/Event'
import EventForm from '../Form/EventForm'

const Card = ({ projects, deleteProject, openModal }) => {

	const changeVisibility = () => {
		openModal({
			title: 'Adicionar evento',
			content: (<EventForm handleSubmit={() => console.log('NICE event')} />)
		})
	}

	const user = useSelector(state => state.User.currentLogged)

	user.level = 3;

	console.log('user')
	console.log(user)
	console.log(projects)

	const isAdminOfProject = project => project.projectAdmins.filter(admin => user._id === admin._id).length > 0

	const renderProjects = () =>
		projects.projects.map(project => (
			<div className='col-5' key={project._id}>
				<div className='project'>
					<div className='header'>
						<h4 className='titleProject'>
							{project.name}

							{user.level === 3 && isAdminOfProject(project) && (
								<i
									className='fas fa-close'
									onClick={() =>
										deleteProject(project._id)
									}></i>
							)}

							{user.level === 3 && (
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
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Doloremque eligendi libero rem illo eveniet
							dolore non! Eligendi, obcaecati commodi ipsa
							asperiores quae inventore excepturi libero
							voluptatibus magni, veritatis nisi a!
						</p>

						<button className='fakeA btnCard'>
							see more
							{/* <i className='fas fa-angle-right'></i> */}
						</button>

						{user.level === 3 && (
							<button
								className='fakeA btnCard'
								onClick={changeVisibility}>
								novo evento{' '}
								<i
									className='fas fa-plus'
									style={{ fontSize: '15px' }}></i>
							</button>
						)}

						<Badge tags={project.tags} />
					</div>
					<Event events={project.events} />
				</div>
			</div>
		))

	return projects.projects === undefined ? <h1>Nothing to show</h1> : renderProjects()

}

export default Card
