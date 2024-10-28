import { useState } from 'react'
import './assets/tailwind.css'

function App() {
	const [status, setStatus] = useState('idle') // 'idle', 'loading', 'error', 'ready'

	const handleClick = (e) => {
		
	}


	return (
		<div className='flex flex-col items-center relative w-full h-screen'>
			<div className='w-full h-full flex flex-col items-center justify-center gap-16 relative'>
				<div className=''>
					<a href="https://tractian.com/en" target="_blank" className='justify-center items-center'>
						<img src="./tractian.webp" alt="Tractian logo" />
					</a>
				</div>
				<div className='flex flex-row gap-20 font-bold text-4xl'>
					<button className='text-black bg-gray-200 p-4 rounded-xl w-72 text-center hover:bg-gray-400 transition duration-300' onClick={(e) => handleClick(e.target.value)}>Manutentor</button>
					<button className='text-black bg-gray-200 p-4 rounded-xl w-72 text-center hover:bg-gray-400 transition duration-300'>Assistente</button>
				</div>
			</div>
			{status === 'ready' &&
				<div className="flex mb-8 gap-7">
					<img class="z-10 w-24 animate-bounce" src="./blue-arrow.png" alt="Descrição da imagem" />
				</div>}
		</div>
	)
}

export default App
