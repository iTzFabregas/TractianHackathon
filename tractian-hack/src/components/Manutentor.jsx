import "../assets/tailwind.css"
import Bololo from "./Bololo"

export default function Manutentor() {

    const openOrder = () => {

    }

    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            <div className="w-1/4 bg-gray-500 overflow-y-auto">
                <h1 className="text-center text-xl bg-gray-600 m-3 rounded-xl p-1">Ordem de serviço a serem cumpridas...</h1>
                <div className="m-5 bg-white h-1/5 rounded-xl text-black" onClick={openOrder}>
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
            <div className="w-3/4 bg-gray-200 text-black h-full">
                <div className="p-10 h-full overflow-y-auto">
                    <Bololo className="text-black" />
                </div>
            </div>
        </div>
    )
}
