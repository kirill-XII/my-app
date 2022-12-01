import s from './../Dialogs.module.css'

const Message = props => {
	return <div className={s.dialog}>{props.massage}</div>
}

export default Message
