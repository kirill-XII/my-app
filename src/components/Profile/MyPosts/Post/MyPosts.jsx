import s from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () => {
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
			<div className={s.posts}>
				<Post message='Hi, motherfuker' />
				<Post message='YO, motherfuker' />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}
export default MyPosts
