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

	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 2,
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 2,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		}
	},
}
export default store
window.store = store
