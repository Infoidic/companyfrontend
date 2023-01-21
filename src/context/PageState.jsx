import pageContext from './pageContext'
import { useState } from 'react'

const PageState = (props) => {
	const [auth, setAuth] = useState(true)
	const [menu, setMenu] = useState(true)
	const [bgTheme, setBgTheme] = useState(true)
	const state = {
		name: 'andres',
		userName: 'DC',
	}
	const logOut = () => {
		setAuth(!auth)
		console.log(auth)
	}
	const changeTheme = () => {
		setBgTheme(!bgTheme)
	}
	const changeMenu = () => {
		setMenu(!menu)
	}
	return (
		<pageContext.Provider
			value={{
				state,
				logOut,
				auth,
				changeTheme,
				bgTheme,
				menu,
				changeMenu,
			}}>
			{props.children}
		</pageContext.Provider>
	)
}

export default PageState
