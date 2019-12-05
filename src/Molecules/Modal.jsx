import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({ visibility, alterVisibility, children, title }) => {
	const styles = {
		content: {
			top: '70px',
			left: '180px',
			right: '180px',
			bottom: '120px'
		}
	}

	return (
		<ReactModal isOpen={visibility} ariaHideApp={false} style={styles}>
			<div className='modalEventHeader'>
				<h2>{title}</h2>
			</div>
			<div className='modalEventContent col-12'>{children}</div>
			<div className='modalEventFooter'>
				<button className='btn btn-primary' onClick={alterVisibility}>
					Close Modal
				</button>
			</div>
		</ReactModal>
	)
}

export default Modal

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
