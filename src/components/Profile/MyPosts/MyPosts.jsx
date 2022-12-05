import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
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
					<div>
						<Post />
					</div>
					<button>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	)
}
export default MyPosts
