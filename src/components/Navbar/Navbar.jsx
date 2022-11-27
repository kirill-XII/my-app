import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
// let s = {
// 	nav: 'Navbar_nav__Uqc9g',
// 	item: 'Navbar_item__6A+qR',
// }
console.log(s)
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<NavLink to='/profile'> Profile </NavLink>
			</div>
			<div>
				<NavLink to='/dialogs'> Messages </NavLink>
			</div>
			<div>
				<NavLink to='/news'> News </NavLink>
			</div>
			<div>
				<NavLink to='/music'> Music </NavLink>
			</div>
			<div>
				<NavLink to='/settings'> Settings </NavLink>
			</div>
		</nav>
	)
}
export default Navbar
