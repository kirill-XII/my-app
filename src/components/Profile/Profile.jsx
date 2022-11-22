import s from './Profile.module.css'
import MyPosts from './MyPosts/Post/MyPosts'
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
			<MyPosts />
		</div>
	)
}
export default Profile
