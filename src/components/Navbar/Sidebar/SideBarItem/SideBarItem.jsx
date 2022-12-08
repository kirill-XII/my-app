import s from './SideBarItem.module.css'
const SideBarItem = props => {
	return (
		<div>
			<div className={s.avatar}>
				<img
					src='https://vraki.net/sites/default/files/inline/images/10_342.jpg'
					alt=''
				/>
				{props.name}
			</div>
		</div>
	)
}
export default SideBarItem
