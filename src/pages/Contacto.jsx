import React from 'react'
import Formulario from '../components/Formulario'
import Menu from '../components/Menu'
import { useContext } from 'react'
import pageContext from '../context/pageContext'
import '../styles/Contacto.sass'

const Contacto = () => {
	const { bgTheme } = useContext(pageContext)
	console.log('bgThem', bgTheme)
	return (
		<div>
			<Menu></Menu>
			<section className={bgTheme ? 'light1' : 'dark1'}>
				<div className='contactContainer'>
					<div className='contactSpace'>
						<h2 className='contactTitle'>Contacto</h2>
					</div>
					<Formulario />
				</div>
			</section>
		</div>
	)
}

export default Contacto
