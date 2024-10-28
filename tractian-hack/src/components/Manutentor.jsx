import "../assets/tailwind.css"
import { useState } from "react";
import Bololo from "./Bololo"

export default function Manutentor() {

    const [status, setStatus] = useState('idle') // 'idle', 'loading', 'error', 'ready'
	const [job, setJob] = useState('') // 'Manutentor', 'Assistente'

    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ]);

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

	const openOrder = (e) => {
		setStatus('ready')
		setJob(e.target.textContent)
		console.log(e.target.textContent)
	};

    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            
            <div className="w-1/4 bg-gray-500 overflow-y-auto">
                <h1 className="text-center text-xl bg-gray-600 m-3 rounded-xl p-1">Ordem de serviço a serem cumpridas...</h1>
                <div className="m-5 bg-white h-1/5 rounded-base text-black p-2" onClick={openOrder}>
                    <h2>Estado: CRÍTICO</h2> 
                </div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
                <div className="m-5 bg-white h-1/5"></div>
            </div>


            {status === 'idle' && 
                <div className="w-3/4 bg-gray-200 text-black h-full">
                    <div className="p-10 h-full overflow-y-auto">
                        <h1 className="text-5xl text-trac-blue"> Selecione a ordem de serviço </h1>
                    </div>
                </div>
            }
            
            {items.map(item => (
                    <div className="m-5 bg-white h-1/5 rounded-xl text-black">  
                        <div className="text-right pt-4 pr-4 font-bold text-red-500 text-2xl">
                            <button className="" onClick={() => deleteItem(item.id)}>X</button>
                        </div>
                        <h2>Estado: CRÍTICO</h2>
                        <h2>Estado: CRÍTICO</h2>
                    </div>
                ))}
            {status === 'ready' && 
                <div className="w-3/4 bg-gray-200 text-black h-full">
                    <div className="p-10 h-full overflow-y-auto">
                        <Bololo className="text-black" />
                    </div>
                </div>
            }
        </div>
    )
}
