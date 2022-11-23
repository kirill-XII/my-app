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
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/profile'> Profile </NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs'> Messages </NavLink>
			</div>
			<div className={s.item}>
				<a> News </a>
			</div>
			<div className={s.item}>
				<a> Music </a>
			</div>
			<div className={s.item}>
				<a> Settings </a>
			</div>
		</nav>
	)
}
export default Navbar
