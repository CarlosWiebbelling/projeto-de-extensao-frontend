import React from 'react'

export default props => {
	return (
		<nav
			className='navbar navbar-dark bg-dark'
			style={{ justifyContent: 'start', alignItems: 'center', height: '55px' }}>
			<i
				class={ props.icon }
				style={{
					fontSize: '25px',
					marginRight: '16px'
				}}></i>
			<h4>{ props.title }</h4>
		</nav>
	)
}
