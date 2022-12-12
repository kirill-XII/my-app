import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	let newPostElement = React.createRef()

	let addPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
	}
	return (
		<div className={s.postBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						name=''
						id=''
						cols='30'
						rows='10'
					></textarea>
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
