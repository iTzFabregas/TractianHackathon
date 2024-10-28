import { useState } from 'react'
import './assets/tailwind.css'
import Manutentor from './components/Manutentor'
                            <button className='font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-72 text-center hover:bg-gray-800 transition duration-300' onClick={(e) => handleClick(e)}>Assistente</button>
 ort Manutentor from './components/Manutentor'
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
            <div className='flex w-full h-screen bg-gradient-to-r from-trac-blue to-white'>
                <div className='w-1/2 flex flex-col items-start justify-center p-16 gap-20'>
                    <div className="absolute inset-0"></div>
                        <div className= "gap-10">
                            <h1 className="text-8xl font-bold mb-4 relative z-10 font-poppins"> Automatizamos Ordem de Serviços </h1>
                            <p className="font-jetbrains text-2xl mb-4 relative z-10 font-poppins"> michel texto texto texto textoasjdad asodjasd a maosda daajsdas dad aoisdjasd jaiosdjaiosd asdiasmd micehalca iajc aec</p>
                        </div> 
                        <div className='flex flex-row gap-20 font-bold text-4xl'>
                            <button className='font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-72 text-center hover:bg-gray-800 transition duration-300' onClick={(e) => handleClick(e)}>Manutentor</button>
                            <button className='font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-72 text-center hover:bg-gray-800 transition duration-300' onClick={(e) => handleClick(e)}>Assistente</button>
                        </div>
                </div>
                <div className='w-1/2 flex items-center justify-center bg-tower'> </div>
            </div>
			{job === 'Manutentor' && <Manutentor />}
			{job === 'Assistente' && <Assistente />}
		</>

	)
}

export default App
