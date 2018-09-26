import React, { Component } from 'react'
import Message from './Message'
import MessageList from './MessageList'
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import SendMessage from './SendMessage'

class App extends Component {
	render() {
		return (
			<div className="container">
				<RoomList />
				<MessageList />
				<SendMessage />
				<NewRoomForm />
			</div>
		)
	}
}

export default App