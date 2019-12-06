import React from 'react'

const Event = ({ events }) => {
	const renderEvents = () =>
		events.map(event =>
			<div className='event'>
				<div className='content'>
					<div className='eventHeader'>
						<span className='title'>{event.title}</span>
						<span className='date'>{event.date}</span>
						<div className='badge'>
							<span className='ADM'>ADM</span>
						</div>
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

	return events.length > 0 ? renderEvents() : null
}

export default Event
