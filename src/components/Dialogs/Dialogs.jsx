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

const Massage = props => {
	return <Massage>{props.massage}</Massage>
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
				<Massage massage='Yo real' />
				<Massage massage='How are you?' />
				<Massage massage='Stop' />
			</div>
		</div>
	)
}
export default Dialogs
