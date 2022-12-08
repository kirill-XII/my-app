import SideBarItem from './SideBarItem/SideBarItem'

const SideBar = props => {
	let sideBarElement = props.sidebar.map(s => <SideBarItem name={s.name} />)
	return (
		<div>
			<div>{sideBarElement}</div>
		</div>
	)
}
export default SideBar
