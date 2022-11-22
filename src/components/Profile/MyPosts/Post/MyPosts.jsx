import s from './MyPosts.module.css'
import Post from './Post'
const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea name='' id='' cols='30' rows='10'></textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.post}>
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
