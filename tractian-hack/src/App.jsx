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
            <div className='flex w-full h-screen bg-gradient-to-r from-trac-blue to-white'>
                <div className='w-1/2 flex flex-col items-start justify-center p-16 gap-20'>
					<div className= "gap-10">
						<h1 className="text-8xl font-bold mb-4 relative z-10 font-poppins"> Automatizamos Ordem de Serviços </h1>
						<p className="font-jetbrains text-2xl mb-4 relative z-10"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, nobis. Nulla, dolorum molestias beatae itaque aperiam nostrum totam eius ipsum pariatur ducimus minima harum magnam enim iusto, voluptatibus id. Nemo aliquid magni repellendus aperiam non placeat aut. Dolorem sint sed debitis nisi corporis ut fugiat, earum hic unde nihil aut exercitationem reprehenderit officiis? Rerum voluptas ipsum placeat, recusandae quam quidem in, aspernatur itaque quos commodi perspiciatis consectetur voluptate quia, corporis officiis beatae incidunt magni! Placeat culpa eligendi enim quidem tempore officiis, rerum ex odit aspernatur qui mollitia, voluptatem fugiat laudantium ipsam impedit velit? Voluptas doloribus ipsam consequuntur quo, aliquid praesentium?
						</p>
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
