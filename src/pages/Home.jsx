import React from 'react'
import Menu from '../components/Menu'
import { useContext } from 'react'
import pageContext from '../context/pageContext'
import '../styles/Home.sass'
import Section from './Section'
import Section2 from './Section2'

const Home = () => {
	const { bgTheme } = useContext(pageContext)
	console.log('bgThem', bgTheme)
	let theme1, theme2
	if (bgTheme) {
		theme1 = 'light1'
		console.log('theme1', theme1)
		theme2 = 'light2'
		console.log('theme2', theme2)
	} else {
		theme1 = 'dark1'
		console.log('theme1', theme1)
		theme2 = 'dark2'
		console.log('theme2', theme2)
	}

	return (
		<div>
			<Menu></Menu>
			<section className={theme1}>
				<div className='containerSection'>
					<Section></Section>
				</div>
			</section>
			<section className={theme2}>
				<div className='containerSection'>
					<Section2></Section2>
				</div>
			</section>
		</div>
	)
}

export default Home
