import React from 'react'
import ReactPlayer from 'react-player/lazy'
import videoEjemplo from '../assets/videos/videoEjemplo.mp4'
const ReproductorVideo = () => {
	return (
		<div>
			<div className='player-wrapper'>
				<ReactPlayer
					className='react-player'
					url={{ videoEjemplo }}
					controls></ReactPlayer>
				<ReactPlayer
					className='react-player'
					url='./videoEjemplo.mp4'
					controls></ReactPlayer>
				<video controls src='./videoEjemplo.mp4' width='400px'></video>
			</div>
		</div>
	)
}

export default ReproductorVideo
