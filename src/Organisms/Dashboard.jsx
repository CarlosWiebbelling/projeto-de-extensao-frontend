import React from 'react'

import ifrsLogo from '../Utils/static/images/ifrs.png'

export default props => {
	// const courses = useState(state => state.courses)
	return (
		<div style={{ textAlign: 'center"' }}>
			<img src={ ifrsLogo } alt="" srcset="" /><br />
			<h1>Autenticado</h1>
		</div>
	)

	// return (
	// 	<div>
	// 		<ul class='nav nav-tabs'>
	// 			{courses.map((course, index) => (
	// 				<li class='nav-item'>
	// 					<a
	// 						class={'nav-link' + (index === 0 ? ' active' : '')}
	// 						href='#'
	// 						id={course.name + '-tab'}
	// 						data-toggle='tab'
	// 						href={'#' + course.name}
	// 						role='tab'
	// 						aria-controls={course.name}
	// 						aria-selected='true'>
	// 						{course.name}
	// 					</a>
	// 				</li>
	// 			))}
	// 		</ul>
	// 		<div class='tab-content' id='myTabContent'>
	// 			{courses.map((course, index) => (
	// 				<div
	// 					class={
	// 						'tab-pane fade show' +
	// 						(index === 0 ? ' active' : '')
	// 					}
	// 					id={course.name}
	// 					role='tabpanel'
	// 					aria-labelledby={course.name + '-tab'}>
	// 					{course.projects.map(project => (
	// 						<div class='card' style={{ width: '18rem' }}>
	// 							<img
	// 								class='card-img-top'
	// 								src={project.images[0]}
	// 								alt={`${project.name}`}
	// 							/>
	// 							<div class='card-body'>
	// 								<h5 class='card-title'>{project.name}</h5>
	// 								<p class='card-text'>
	// 									{project.description}
	// 								</p>
	// 								<a href='#' class='btn btn-primary'>
	// 									Enter
	// 								</a>
	// 							</div>
	// 						</div>
	// 					))}
	// 				</div>
	// 			))}
	// 		</div>
	// 	</div>
	// )
}
