import { rerenderEntireTree } from '../render'
let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, motherfuker', likesCount: 11 },
			{ id: 2, message: 'YO, motherfuker', likesCount: 22 },
		],
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
export let addPost = postMessage => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 2,
	}
	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}
export default state
