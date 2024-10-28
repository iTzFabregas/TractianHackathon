import { useState } from 'react'

import "../assets/tailwind.css"


export default function Assistente() {

    const [status, setStatus] = useState('idle') // 'idle', 'ready'
    const [text, setText] = useState('')

    const [items, setItems] = useState([
        { id: 1, text: 'Verificar lubrificação da máquina CNC.', estado: 'Crítico' },
        { id: 2, text: 'Verificar super-aqueciento da máquina X.', estado: 'Crítico' },
        { id: 3, text: 'Inspecionar linha de montagem Y', estado: 'Alerta' },
      ]);

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleClick = (e) => {
		setStatus('ready')	
	}


    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            <div className="flex flex-col items-center w-8/12 bg-gray-200 text-center">
                {status === 'idle' && <button className="bg-white border-solid border-2 border-trac-blue p-2 w-2/5 h-14 rounded-base text-xl font-bold text-trac-blue" onClick={(e) => handleClick(e)}>Criar uma nova ordem de serviço</button>}

                {status === 'ready' && 
                <div className="flex w-8/12 gap-10 items-center">
                    <div className='flex w-full gap-1'>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite ou fale aqui..." className="w-full p-2 border border-gray-300 rounded-md pr-16 h-10" />
                        <button className="h-10/12 p-2 mr-10 w-24 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"> Falar </button>
                    </div>
                    <button className="h-10/12 p-2 w-72 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Gerar ordem de serviço
                    </button>
                </div>}
            </div>
            <div className="w-4/12 bg-trac-lblue overflow-y-auto">
                <h1 className="text-trac-blue text-center text-2xl bg-white m-3 rounded-base p-2">Solicitações de manutenção</h1>
                {items.map(item => (
                    <div className="m-5 bg-white auto-h rounded-base p-3 text-black">  
                        <h1 className="text-xl text-trac-blue font-bold"> Solicitação Nº {item.id}</h1> 
                        <p>{item.text}</p>
                        <p>Estado: {item.estado}.</p>
                        <div className="text-center pt-4 pr-4 font-bold text-white text-2xl">
                            <button className="rounded bg-red-500 p-2" onClick={() => deleteItem(item.id)}>Excluir </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
