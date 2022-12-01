import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'Hi, motherfuker', likesCount: 11 },
		{ id: 2, message: 'YO, motherfuker', likesCount: 22 },
	]
	let postsElements = posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))
	return (
		<div className={s.postBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea name='' id='' cols='30' rows='10'></textarea>
				</div>
				<div>
					<button>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
}
export default MyPosts
