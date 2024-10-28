import { useState } from 'react'

import "../assets/tailwind.css"


export default function Assistente() {

    const passo_a_passo = '<h1>Ordem de Procedimento para Lubrificação de Rolamentos</h1>\n\n<h2>Descrição do Material/Equipamento:</h2>\n<ul>\n    <li><strong>Graxa Industrial:</strong> MAT301</li>\n    <li><strong>Bomba de Graxa Pneumática:</strong> EQP301</li>\n</ul>\n\n<h2>Passos para Lubrificação:</h2>\n\n<ol>\n    <li><strong>Identificação do Tipo de Rolamento:</strong>\n        <ul>\n            <li>Determine o tipo de rolamento que precisa de lubrificação consultando a ficha técnica do equipamento.</li>\n        </ul>\n    </li>\n    <li><strong>Seleção do Lubrificante Adequado:</strong>\n        <ul>\n            <li>Escolha o lubrificante correto de acordo com o tipo de rolamento e condições de operação:\n                <ul>\n                    <li>Aeroshell 7</li>\n                    <li>Aeroshell 22</li>\n                    <li>Isoflex NBU 15</li>\n                    <li>Krytox</li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n    <li><strong>Verificação dos Bicos de Graxa:</strong>\n        <ul>\n            <li>Inspecione os bicos de graxa para garantir que estão presentes e em boas condições de funcionamento. Substitua qualquer bico danificado antes de proceder.</li>\n        </ul>\n    </li>\n    <li><strong>Aplicação do Lubrificante:</strong>\n        <ul>\n            <li>Conecte a Bomba de Graxa Pneumática (EQP301) ao bico de graxa.</li>\n            <li>Aplique o lubrificante selecionado nos bicos de graxa.</li>\n            <li>Siga os intervalos de lubrificação recomendados conforme as condições de operação documentadas no manual do equipamento.</li>\n        </ul>\n    </li>\n    <li><strong>Limpeza de Excesso:</strong>\n        <ul>\n            <li>Após a aplicação, remova qualquer excesso de lubrificante ao redor dos bicos de graxa usando um pano limpo e seco para evitar contaminação do ambiente de trabalho.</li>\n        </ul>\n    </li>\n    <li><strong>Registro da Lubrificação:</strong>\n        <ul>\n            <li>Documente a lubrificação realizada no log de manutenção.</li>\n            <li>Inclua detalhes como data, hora, tipo de lubrificante utilizado, e qualquer observação relevante sobre o estado dos rolamentos.</li>\n        </ul>\n    </li>\n</ol>\n\n<p>Este procedimento assegura a eficiência operacional dos rolamentos e prolonga sua vida útil ao garantir uma lubrificação adequada.</p>'

    const check = '<h2>Checklist para Verificação de Máquina CNC conforme a Norma NR12:</h2><ol><li><strong>Preparação e Planejamento:</strong><ul><li><strong>Documentação:</strong><ul><li>Consultar os manuais do fabricante.</li><li>Revisar a documentação técnica da máquina CNC.</li></ul></li><li><strong>Checklist de Verificação:</strong><ul><li>Listar todos os itens a serem inspecionados conforme a NR12.</li></ul></li></ul></li><li><strong>Equipamentos de Proteção Individual (EPIs) Necessários:</strong><ul><li>Capacete de segurança.</li><li>Óculos de proteção.</li><li>Protetores auriculares.</li><li>Luvas de segurança adequadas.</li><li>Calçados de segurança com biqueira de aço.</li></ul></li><li><strong>Ferramentas Necessárias:</strong><ul><li>Multímetro.</li><li>Chaves de fenda e chave inglesa.</li><li>Paquímetro e micrômetro.</li><li>Lanterna.</li></ul></li><li><strong>Procedimento de Verificação:</strong><ul><li><strong>Desligamento da Máquina:</strong><ul><li>Garantir que a máquina esteja desligada e desconectada.</li></ul></li><li><strong>Inspeção Visual Inicial:</strong><ul><li>Verificar danos, vazamentos e sujeira.</li></ul></li><li><strong>Verificação de Componentes de Segurança:</strong><ul><li>Inspecionar guardas de proteção e dispositivos de segurança.</li></ul></li><li><strong>Análise de Ruído:</strong><ul><li>Ligar a máquina e identificar ruídos anormais.</li></ul></li><li><strong>Testes Funcionais:</strong><ul><li>Executar testes e verificar precisão e alinhamento.</li></ul></li><li><strong>Verificação Elétrica:</strong><ul><li>Testar conexões elétricas com multímetro.</li></ul></li></ul></li><li><strong>Relatório de Verificação:</strong><ul><li>Documentar achados e ações corretivas.</li><li>Informar a equipe de manutenção sobre problemas identificados.</li></ul></li><li><strong>Conformidade com a NR12:</strong><ul><li>Assegurar que todas as etapas sigam as diretrizes da NR12.</li></ul></li></ol><p>Este checklist detalhado garante a segurança e conformidade da máquina CNC com a NR12, minimizando riscos de acidentes e assegurando o funcionamento adequado do equipamento.</p>'

    const [status, setStatus] = useState('idle') // 'idle', 'ready', 'fetched'
    const [text, setText] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    const [sections, setSections] = useState('')

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

    const openSection = (sec) => {
        setSections(sec)
	};

    const handleClickGerar = async () => {

        const payload = {
            message: text,
        };

        setLoading(true);
        setError(null);
        setStatus('fetched')

        try {
            const response = await fetch('http://127.0.0.1:2000/os', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
              });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData1(result);
        } catch (error) {
            setError(error.message);
        }

        try {
            const response = await fetch('http://127.0.0.1:2000/ordem-procedencia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData2(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            <div className="flex flex-col items-center w-8/12 bg-gray-200 text-center overflow-y-auto">
                {status === 'idle' && <button className="bg-white border-solid border-2 border-trac-blue p-2 w-2/5 h-14 rounded-base text-xl font-bold text-trac-blue hover:bg-trac-blue hover:text-white hover:border-white transition duration-200" onClick={(e) => handleClick(e)}>Criar uma nova ordem de serviço</button>}

                {status === 'ready' &&
                    <div className="flex w-8/12 gap-10 items-center">
                        <div className='flex w-full gap-1'>
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite ou fale aqui..." className="w-full p-2 border border-gray-300 rounded-md pr-16 h-10 text-black" />
                            <button className="h-10/12 p-2 mr-10 w-24 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"> Falar </button>
                        </div>
                        <button className="h-10/12 p-2 w-72 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={handleClickGerar}>
                            Gerar ordem de serviço
                        </button>
                    </div>}
                {status === 'fetched' &&
                <div>
                <div className="flex gap-32 items-center mt-10">
                    <button className="font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-80 text-center hover:bg-gray-800 transition duration-300" onClick={() => openSection('passo_a_passo')}>Passo-a-passo e equipamentos</button>
                    <button className="font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-80 text-center hover:bg-gray-800 transition duration-300" onClick={() => openSection('check_list')}>Check-list</button>
                </div>
                    <div className='text-left text-black'>
                        {sections === 'passo_a_passo' && <div className="pt-10" dangerouslySetInnerHTML={{ __html: passo_a_passo }} />}
                        {sections === 'check_list' && <div className="pt-10" dangerouslySetInnerHTML={{ __html: check }} />}
                    </div>
                    <button className="font-poppins text-white border-solid border-2 border-white bg-green-600 p-4 rounded-base w-80 text-center hover:bg-gray-800 transition duration-300">Aprovar ordem de serviço</button>
                </div>}

            </div>
            <div className="w-4/12 bg-trac-lblue overflow-y-auto">
                <h1 className="text-trac-blue text-center text-2xl bg-white m-3 rounded-base p-2">Solicitações de manutenção</h1>
                {items.map(item => (
                    <div className="m-5 bg-white auto-h rounded-base p-3 text-black">
                        <h1 className="text-xl text-trac-blue font-bold"> Solicitação Nº {item.id}</h1>
                        <p className='font-bold'>{item.text}</p>
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
