import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElement = React.createRef()

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' })
	}
	let onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
	}
	return (
		<div className={s.postBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
						cols='30'
						rows='10'
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
}
export default MyPosts
