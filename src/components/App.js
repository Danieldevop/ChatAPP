import React, { Component } from 'react'
import Message from './Message'
import MessageList from './MessageList'
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import SendMessage from './SendMessage'
//Chatkit
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import { tokenUrl, instanceLocator } from '../public/config.js'

class App extends Component {

	constructor() {
		super()
		this.state = {
			messages: []
		}
	}

	componentDidMount () {
		const chatManager = new ChatManager({
			instanceLocator,
			userId: 'Danieldevop',
			tokenProvider: new TokenProvider({ 
				url: tokenUrl 
			})
		})

		chatManager.connect()
			.then(currentUser => {
				currentUser.subscribeToRoom({
					roomId: 17664884,
					hooks: {
						onNewMessage: message => {
							this.setState({
								messages: [...this.state.messages, message]
							})
						}
					}
				})
			})
	}

	render() {
		return (
			<div className="container">
				<RoomList />
				<MessageList messages={this.state.messages} />
				<SendMessage />
				<NewRoomForm />
			</div>
		)
	}
}

export default App