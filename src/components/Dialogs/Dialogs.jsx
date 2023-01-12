import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'

const Dialogs = props => {
	let state = props.store.getState().dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	))
	let massageElements = state.messages.map(m => <Message massage={m.message} />)
	let newMassageBody = state.newMassageBody
	let onNewMessageChange = e => {
		let body = e.target.value
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElements}</div>
			<div className={s.massages}>{massageElements}</div>
			<div>
				<div>
					<textarea
						onChange={onNewMessageChange}
						value={newMassageBody}
						placeholder='Enter your message'
					></textarea>
				</div>
				<div>
					<button onClick={onSendMessageClick}>Add post</button>
				</div>
			</div>
		</div>
	)
}
export default Dialogs
