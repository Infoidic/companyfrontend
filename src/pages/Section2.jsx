import React from 'react'
import imgAuditor from '../assets/images/imgAuditor.svg'
import '../styles/Section.sass'
const Section = () => {
	return (
		<>
			<div className='container'>
				<img
					src={imgAuditor}
					alt='Imágen del software Auditor'
					className='imgSection'></img>
				<p className='textAudio'>
					Es un hecho establecido hace demasiado tiempo que un lector
					se distraerá con el contenido del texto de un sitio mientras
					que mira su diseño. El punto de usar Lorem Ipsum es que
					tiene una distribución más o menos normal de las letras, al
					contrario de usar textos como por ejemplo "Contenido aquí,
					contenido aquí". Estos textos hacen parecerlo un español que
					se puede leer.
				</p>
			</div>
		</>
	)
}

export default Section
