import React, { Component } from 'react'

class SendMessage extends Component {
	render() {
		return(
			<form className="send-message-form">
				<input
					placeholder="SendMessage"
					type="text" />
			</form>
		)
	}
}

export default SendMessage