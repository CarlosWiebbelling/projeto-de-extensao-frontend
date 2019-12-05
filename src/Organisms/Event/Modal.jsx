import React, { useState } from 'react'
import ReactModal from 'react-modal'

const Modal = ({ visibility, alterVisibility, data }) => (
	<ReactModal isOpen={visibility}>
		<div className="content">
			{ data }
			<button onClick={alterVisibility}>Close Modal</button>
		</div>
	</ReactModal>
)

export default Modal

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
