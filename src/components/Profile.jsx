import s from './Profile.module.css'
const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img
					src='https://traveltimes.ru/wp-content/uploads/2022/08/Earth-Porn-A-5.jpg'
					alt=''
				/>
			</div>
			<div className={s.item}>ava + description</div>
			<div>
				My posts
				<div>New post</div>
				<div className={s.post}>
					<div className={s.item}>Post 1</div>
					<div className={s.item}>Post 2</div>
				</div>
			</div>
		</div>
	)
}
export default Profile
