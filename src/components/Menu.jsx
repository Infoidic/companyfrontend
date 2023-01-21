import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import pageContext from '../context/pageContext'
import '../styles/Menu.sass'
const Menu = () => {
	const { changeMenu } = useContext(pageContext)
	const { changeTheme } = useContext(pageContext)
	const { menu } = useContext(pageContext)
	const handleTheme = () => {
		changeTheme()
	}
	const handleMenu = () => {
		changeMenu()
	}
	let menuSpace
	if (menu) {
		menuSpace = 'top'
		console.log('menu', menuSpace)
	} else {
		menuSpace = 'left'
		console.log('menu', menuSpace)
	}
	return (
		<nav className={menuSpace}>
			<NavLink className='link' to='/'>
				Home
			</NavLink>
			<NavLink className='link' to='/Contacto'>
				Contacto
			</NavLink>
			<NavLink className='link' to='/Software'>
				Software
			</NavLink>
			<Link className='link' onClick={handleTheme}>
				Theme
			</Link>
			<Link className='link' onClick={handleMenu}>
				Menu
			</Link>
		</nav>
	)
}

export default Menu
