import React, { useState } from 'react'

import EventForm from '../Form/EventForm'
import Modal from '../Event'

const Card = ({ projects, deleteProject }) => {
	const [showModal, alterShow] = useState(false)
	const changeVisibility = () => alterShow(!showModal)

	const renderProjects = () =>
		projects.projects.map(project => (
			<div className='col-5'>
				<div className='project'>
					<div className='header'>
						<h4 className='titleProject'>
							{project.name}
							<i
								className='fas fa-close'
								onClick={() => deleteProject(project._id)}></i>
						</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Doloremque eligendi libero rem illo eveniet
							dolore non! Eligendi, obcaecati commodi ipsa
							asperiores quae inventore excepturi libero
							voluptatibus magni, veritatis nisi a!
						</p>

						<a
							href='http://google.com'
							target='_blank'
							rel='noopener noreferrer'>
							see more <i className='fas fa-angle-right'></i>
						</a>
						<Modal
                            title="Adicionar evento"
							visibility={showModal}
							alterVisibility={changeVisibility}>
							<EventForm
								handleSubmit={() => console.log('NICE event')}
							/>
						</Modal>
						<a
							onClick={changeVisibility}
							target='_blank'
							rel='noopener noreferrer'>
							add evento{' '}
							<i
								className='fas fa-plus'
								style={{ 'font-size': '15px' }}></i>
						</a>

						{project.tags.map(tag => (
							<div className='badge'>
								<span className={tag.name}>{tag.name}</span>
							</div>
						))}
					</div>

					<div className='event'>
						<div className='content'>
							<div className='eventHeader'>
								<span className='title'>Title</span>
								<span className='date'>10/11/2019</span>
								<div className='badge'>
									<span className='adm'>ADM</span>
								</div>
							</div>
							<p>
								Des crip tion des crip tion des crip tion des
								crip tion des crip tion des crip tion des crip
								tion
							</p>
						</div>
						<div className='showMore'>
							<i className='fas fa-angle-right'></i>
						</div>
					</div>
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
