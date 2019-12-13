import React from 'react'

import { generateTagsColor } from '../Helpers/helpers'

const Badge = ({ tags }) => {
	const renderBadge = () =>
		tags.map(tag => (
			<div className='badge' key={ tag._id }>
				<span className={ tags } style={{backgroundColor: generateTagsColor(tag.name)}}>{ tag.name }</span>
			</div>
		))

	return tags.length > 0 && tags !== undefined ? renderBadge() : null
}

export default Badge
