import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import SideBar from './Sidebar/SideBar'
const Navbar = props => {
	return (
		<nav className={s.nav}>
			<div>
				<NavLink
					to='/profile' //to вместо href
					className={navData => (navData.isActive ? s.activeLink : s.item)}
				>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/dialogs' //to вместо href
					className={navData => (navData.isActive ? s.activeLink : s.item)}
				>
					Messages
				</NavLink>
			</div>
			<div>
				<NavLink>News</NavLink>
			</div>
			<div>
				<NavLink>Music</NavLink>
			</div>
			<div>
				<NavLink>Settings</NavLink>
			</div>
			<div>
				<SideBar sidebar={props.state.sidebar} />
			</div>
		</nav>
	)
}
export default Navbar
