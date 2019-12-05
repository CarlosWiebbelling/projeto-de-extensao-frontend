import React, { useState } from 'react'
import ReactModal from 'react-modal'

const Modal = ({ visibility, alterVisibility, children, title }) => (
	<ReactModal isOpen={visibility}>
		<div className="modalEventHeader">
			<h2>{ title }</h2>
		</div>
		<div className="modalEventContent col-12">
			{ children }
		</div>
		<div className="modalEventFooter">
			<button class="btn btn-primary" onClick={alterVisibility}>Close Modal</button>
		</div>
	</ReactModal>
)

export default Modal

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))