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
							console.log('message.text: ', message.text)
						}
					}
				})
			})
	}

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