import React from 'react'
import Menu from '../components/Menu'
import { useContext } from 'react'
import pageContext from '../context/pageContext'
import '../styles/Software.sass'
import ReproductorVideo from '../components/ReproductorVideo'

const Software = () => {
	const { bgTheme } = useContext(pageContext)
	console.log('bgThem', bgTheme)
	return (
		<div>
			<Menu></Menu>
			<section className={bgTheme ? 'light1' : 'dark1'}>
				<div className='softwareContainer'>
					<div className='softwareSpace'>
						<h2 className='softwareTitle'>Software</h2>
						<ReproductorVideo />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Software
