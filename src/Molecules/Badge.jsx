import React from 'react'

const Badge = ({ tags }) => {
	const renderBadge = () =>
		tags.map(tag => (
			<div className='badge' key={ tag._id }>
				<span className={ tag.name }>{ tag.name }</span>
			</div>
		))

	return tags.length > 0 && tags !== undefined ? renderBadge() : null
}

export default Badge