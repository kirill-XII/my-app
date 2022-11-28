import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = props => {
	let path = '/dialogs/' + props.id
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className={s.dialog}>{props.massage}</div>
}

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name='Bob' id='1' />
				<DialogItem name='Luka' id='2' />
				<DialogItem name='Shtrom' id='3' />
				<DialogItem name='Linda' id='4' />
				<DialogItem name='Lizabet' id='5' />
				<DialogItem name='Vasya' id='6' />
			</div>
			<div className={s.massages}>
				<Message massage='Yo real' />
				<Message massage='How are you?' />
				<Message massage='Stop' />
			</div>
		</div>
	)
}
export default Dialogs
