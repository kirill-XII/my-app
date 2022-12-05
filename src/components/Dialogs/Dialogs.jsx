import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	let dialogsElements = props.state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	))
	let massageElements = props.state.messages.map(m => (
		<Message massage={m.message} />
	))

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElements}</div>
			<div className={s.massages}>{massageElements}</div>
		</div>
	)
}
export default Dialogs
