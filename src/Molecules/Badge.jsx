import React from 'react'

import { generateTagsColor } from '../Helpers/helpers'

const Badge = ({ tags }) => {
	const renderBadge = () =>
		tags.map((tag, index) => (
<<<<<<< HEAD
			<div className='tagProj' style={{display: 'inline'}} key={index}>
				<span className={tags} style={{ backgroundColor: generateTagsColor(tag) }}>{tag}</span>
=======
			<div className='badge' key={index}>
				<span className={`tags ${tags}`} style={{ backgroundColor: generateTagsColor(tag) }}>{tag}</span>
>>>>>>> 3b07df5542cf83466f3a620dc63f7a00a75aae9f
			</div>
		))

	return tags.length > 0 && tags !== undefined ? renderBadge() : null
}

export default Badge
