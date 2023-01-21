import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import pageContext from '../context/pageContext'
import '../styles/Menu.sass'
import imgArrow from '../assets/images/imgArrow.svg'
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
		<div className='container'>
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
					<div className='theme'></div>
				</Link>
				<Link className='link' onClick={handleMenu}>
					<img
						src={imgArrow}
						alt='Posición del menú'
						className='imgMenu'></img>
				</Link>
			</nav>
		</div>
	)
}

export default Menu
