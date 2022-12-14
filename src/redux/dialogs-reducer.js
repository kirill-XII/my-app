const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMassageBody = action.body
	} else if (action.type === SEND_MESSAGE) {
		let body = state.newMassageBody
		state.newMassageBody = ''
		state.messages.push({ id: 6, message: body })
	}

	return state
}
export default dialogsReducer
