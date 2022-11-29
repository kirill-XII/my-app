import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src='https://traveltimes.ru/wp-content/uploads/2022/08/Earth-Porn-A-5.jpg'
					alt=''
				/>
			</div>
			<div className={s.descriptionBlock}>ava + description</div>
		</div>
	)
}
export default ProfileInfo
