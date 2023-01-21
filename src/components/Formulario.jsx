import React from 'react'
import '../styles/Formulario.sass'

const Formulario = () => {
	return (
		<div>
			<form action='/' method='post' className='contactForm'>
				<div className='contactField'>
					<label htmlFor='name' className='contactLabel'>
						Nombres:
					</label>
					<input
						type='text'
						name='name'
						id='name'
						className='contactInput'></input>
				</div>
				<div className='contactField'>
					<label htmlFor='lastname' className='contactLabel'>
						Apellidos:
					</label>
					<input
						type='text'
						name='lastname'
						id='lastname'
						className='contactInput'></input>
				</div>
				<div className='contactField'>
					<label htmlFor='phone' className='contactLabel'>
						Teléfono:
					</label>
					<input
						type='number'
						name='phone'
						id='phone'
						className='contactInput'></input>
				</div>
				<div className='contactField'>
					<label htmlFor='email' className='contactLabel'>
						Correo:
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='contactInput'></input>
				</div>
				<div className='contactField'>
					<label htmlFor='date' className='contactLabel'>
						Fecha de Nacimiento:
					</label>
					<input
						type='date'
						name='date'
						id='date'
						className='contactInput'></input>
				</div>
				<div className='contactField'>
					<label htmlFor='typeId' className='contactLabel'>
						Tipo de documento:
					</label>
					<select name='typeId' id='typeId' className='contactInput'>
						<option></option>
						<option value='1'>Cédula de ciudadania</option>
						<option value='2'>Tarjeta de Identidad</option>
						<option value='3'>Pasaporte</option>
						<option value='4'>Nit</option>
					</select>
				</div>
				<div className='contactField'>
					<label htmlFor='id' className='contactLabel'>
						Número de identificación:
					</label>
					<input
						type='number'
						name='id'
						id='id'
						className='contactInput'></input>
				</div>
				<div className='contactSend'>
					<button className='contactButton'>Enviar</button>
					<button className='contactButton'>Limpiar</button>
				</div>
			</form>
		</div>
	)
}

export default Formulario
