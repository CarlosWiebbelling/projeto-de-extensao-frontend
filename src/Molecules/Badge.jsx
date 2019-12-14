import React from 'react'

import { generateTagsColor } from '../Helpers/helpers'

const Badge = ({ tags }) => {
	const renderBadge = () =>
		tags.map((tag, index) => (
			<div className='badge' key={index}>
				<span className={`tags ${tags}`} style={{ backgroundColor: generateTagsColor(tag) }}>{tag}</span>
			</div>
		))

	return tags.length > 0 && tags !== undefined ? renderBadge() : null
}

export default Badge
