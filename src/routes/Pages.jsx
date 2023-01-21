import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error from '../pages/Error'
import PageState from '../context/PageState'
import Software from '../pages/Software'
const Pages = () => {
	return (
		<div>
			<PageState>
				<Router>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Acerca' element={<Acerca />}></Route>
						<Route path='/Contacto' element={<Contacto />}></Route>
						<Route path='/Software' element={<Software />}></Route>
						<Route path='*' element={<Error />}></Route>
					</Routes>
				</Router>
			</PageState>
		</div>
	)
}

export default Pages
