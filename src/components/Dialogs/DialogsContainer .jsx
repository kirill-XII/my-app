import { connect } from 'react-redux'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
let mapDispatchToProps = dispatch => {
	return {
		sendMessage: body => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		updateNewMessageBody: () => {
			dispatch(sendMessageCreator())
		},
	}
}
let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default DialogsContainer
