import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = props => {
	let dialogsElements = props.state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	))
	let massageElements = props.state.messages.map(m => (
		<Message massage={m.message} />
	))

	let newPostElement = React.createRef()

	let addNewPost = () => {
		let text = newPostElement.current.value
		alert(text)
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElements}</div>
			<div className={s.massages}>{massageElements}</div>
			<div>
				<textarea ref={newPostElement} cols='30' rows='10'></textarea>
			</div>
			<div>
				<button onClick={addNewPost}>Add post</button>
			</div>
		</div>
	)
}
export default Dialogs
