let rerenderEntireTree = () => {
	console.log('State change')
}
let state = {
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
}

window.state = state

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 2,
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export let updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export const subscribe = observer => {
	rerenderEntireTree = observer
}
export default state
