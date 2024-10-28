import { useState } from 'react'
import './assets/tailwind.css'
import Manutentor from './components/Manutentor'
import Assistente from './components/Assistente'

function App() {
	const [status, setStatus] = useState('idle') // 'idle', 'loading', 'error', 'ready'
	const [job, setJob] = useState('') // 'Manutentor', 'Assistente'

	const handleClick = (e) => {
		setStatus('ready')
		setJob(e.target.textContent)
		console.log(e.target.textContent)
	}

	return (
		<>
			<div className='flex flex-col items-center relative w-full h-screen'>
				<div className='w-full h-full flex flex-col items-center justify-center gap-16 relative'>
					<div className=''>
						<a href="https://tractian.com/en" target="_blank" className='justify-center items-center'>
							<img src="./tractian.webp" alt="Tractian logo" />
						</a>
					</div>
					<div className='flex flex-row gap-20 font-bold text-4xl'>
						<button className='text-white bg-gray-600 p-4 rounded-xl w-72 text-center hover:bg-gray-800 transition duration-300' onClick={(e) => handleClick(e)}>Manutentor</button>
						<button className='text-white bg-gray-600 p-4 rounded-xl w-72 text-center hover:bg-gray-800 transition duration-300' onClick={(e) => handleClick(e)}>Assistente</button>
					</div>
				</div>
				{status === 'ready' &&
					<div className="flex mb-8 gap-7">
						<img className="z-10 w-24 animate-bounce" src="./blue-arrow.png" alt="Descrição da imagem" />
					</div>}
			</div>
			{job === 'Manutentor' && <Manutentor />}
			{job === 'Assistente' && <Assistente />}
		</>

	)
}

export default App
