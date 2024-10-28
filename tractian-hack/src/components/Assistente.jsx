import { useState } from 'react'

import "../assets/tailwind.css"


export default function Assistente() {

    const [status, setStatus] = useState('idle') // 'idle', 'ready'
    const [text, setText] = useState('')

    const handleClick = (e) => {
		setStatus('ready')
		
	}

    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            <div className="flex flex-col items-center w-8/12 bg-gray-200 text-center">
                {status === 'idle' && <button className="bg-sky-500 p-2 w-2/5 h-14 rounded-xl text-xl font-bold hover:bg-blue-600 transition duration-300 text-white" onClick={(e) => handleClick(e)}>Criar uma nova ordem de serviço</button>}
                {status === 'ready' && 
                <div className="flex w-8/12 gap-10 items-center">
                    <div className='flex w-full'>
                        <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Digite ou fale aqui..."
                        className="w-full p-2 border border-gray-300 rounded-md pr-16 h-10"
                        />
                        <button className="h-10/12 p-2 mr-10 w-24 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Falar
                        </button>
                    </div>
                    <button className="h-10/12 p-2 mr-10 w-24 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Enviar
                    </button>
                </div>}
            </div>
            <div className="w-4/12 bg-gray-500 overflow-y-auto">
                    <h1 className="text-center text-xl bg-gray-600 m-3 rounded-xl p-1">Solicitações de manutenção</h1>
                    <div className="m-5 bg-white h-1/5 rounded-xl text-black">
                    <h2>Estado: CRÍTICO</h2> 
                </div>
            </div>
        </div>
    )
}
