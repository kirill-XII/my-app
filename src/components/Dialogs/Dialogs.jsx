import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	let dialogs = [
		{ id: 1, name: 'Bob' },
		{ id: 2, name: 'Luka' },
		{ id: 3, name: 'Shtrom' },
		{ id: 4, name: 'Linda' },
		{ id: 5, name: 'Lizabet' },
		{ id: 6, name: 'Vasya' },
	]

	let messages = [
		{ id: 1, message: 'Yo real' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Stop' },
	]

	// let dialogsElements = dialogs.map(dialog => (
	// 	<DialogItem name={dialog.name} id={dialog.id} />
	// ))
	// Сократилось до
	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

	// let massageElements = messages.map(message => (
	// 	<Message massage={message.message} />
	// ))
	//Сократилось до
	let massageElements = messages.map(m => <Message massage={m.message} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
				<DialogItem name={dialogs[1].name} id={dialogs[1].id} /> */}
				{dialogsElements}
			</div>
			<div className={s.massages}>
				{/* <Message massage={messages[0].message} id={messages[0].id} /> */}
				{massageElements}
			</div>
		</div>
	)
}
export default Dialogs
