import React from 'react'
import Badge from './Badge'

const Event = ({ events }) => {
	const renderEvents = () =>
		events.map(event =>
			<div className='event'>
				<div className='content'>
					<div className='eventHeader'>
						<span className='title'>{event.title}</span>
						<span className='date'>{event.date}</span>
						
						<Badge />
					</div>
					<p>
                        { event.description }
					</p>
				</div>
				<div className='showMore'>
					<i className='fas fa-angle-right'></i>
				</div>
			</div>
		)

	return events.length > 0 && events !== undefined  ? renderEvents() : null
}

export default Event
