import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, motherfuker', likesCount: 11 },
				{ id: 2, message: 'YO, motherfuker', likesCount: 22 },
			],
			newPostText: 'LOL',
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: 'Yo real' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Stop' },
			],
			dialogs: [
				{ id: 1, name: 'Bob' },
				{ id: 2, name: 'Luka' },
				{ id: 3, name: 'Shtrom' },
				{ id: 4, name: 'Linda' },
				{ id: 5, name: 'Lizabet' },
				{ id: 6, name: 'Vasya' },
			],
			newMassageBody: '',
		},
		sidebarUnit: {
			sidebar: [
				{ id: 1, name: 'Andrew' },
				{ id: 2, name: 'Sasha' },
				{ id: 3, name: 'Sveta' },
			],
		},
	},
	_callSubscriber() {
		console.log('State change')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebarUnit = sidebarReducer(this._state.sidebarUnit, action)

		this._callSubscriber(this._state)
	},
}

export default store
window.store = store
