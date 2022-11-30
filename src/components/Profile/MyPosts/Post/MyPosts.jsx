import s from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () => {
	let postData = [
		{ id: 1, message: 'Hi, motherfuker', likesCount: 11 },
		{ id: 2, message: 'YO, motherfuker', likesCount: 22 },
	]

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
				<Post
					message={postData[0].message}
					likesCount={postData[0].likesCount}
				/>
				<Post
					message={postData[1].message}
					likesCount={postData[1].likesCount}
				/>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}
export default MyPosts
