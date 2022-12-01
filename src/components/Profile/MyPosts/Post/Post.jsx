import s from './Post.module.css'
const Post = props => {
	return (
		<div className={s.item}>
			<img
				src='https://avatarko.ru/img/kartinka/29/zhivotnye_lev_odezhda_28257.jpg'
				alt=''
			/>
			{props.message}
			<div>
				<span>like</span>
				{props.LikesCount}
			</div>
		</div>
	)
}
export default Post
