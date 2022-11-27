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
	return <div className={s.item}>Dialogs</div>
}
export default Dialogs
