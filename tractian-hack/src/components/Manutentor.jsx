import "../assets/tailwind.css"
import { useState } from "react";
import Bololo from "./Bololo"

export default function Manutentor() {
    
    const [items, setItems] = useState([
        { id: 1, text: 'Faça a lubrificação dos rolamentos. Coloque o lubrificante correto.', estado:'Crítico', check:`<h2>Checklist para Verificação de Máquina CNC conforme a Norma NR12:</h2><ol><li><strong>Preparação e Planejamento:</strong><ul><li><strong>Documentação:</strong><ul><li>Consultar os manuais do fabricante.</li><li>Revisar a documentação técnica da máquina CNC.</li></ul></li><li><strong>Checklist de Verificação:</strong><ul><li>Listar todos os itens a serem inspecionados conforme a NR12.</li></ul></li></ul></li><li><strong>Equipamentos de Proteção Individual (EPIs) Necessários:</strong><ul><li>Capacete de segurança.</li><li>Óculos de proteção.</li><li>Protetores auriculares.</li><li>Luvas de segurança adequadas.</li><li>Calçados de segurança com biqueira de aço.</li></ul></li><li><strong>Ferramentas Necessárias:</strong><ul><li>Multímetro.</li><li>Chaves de fenda e chave inglesa.</li><li>Paquímetro e micrômetro.</li><li>Lanterna.</li></ul></li><li><strong>Procedimento de Verificação:</strong><ul><li><strong>Desligamento da Máquina:</strong><ul><li>Garantir que a máquina esteja desligada e desconectada.</li></ul></li><li><strong>Inspeção Visual Inicial:</strong><ul><li>Verificar danos, vazamentos e sujeira.</li></ul></li><li><strong>Verificação de Componentes de Segurança:</strong><ul><li>Inspecionar guardas de proteção e dispositivos de segurança.</li></ul></li><li><strong>Análise de Ruído:</strong><ul><li>Ligar a máquina e identificar ruídos anormais.</li></ul></li><li><strong>Testes Funcionais:</strong><ul><li>Executar testes e verificar precisão e alinhamento.</li></ul></li><li><strong>Verificação Elétrica:</strong><ul><li>Testar conexões elétricas com multímetro.</li></ul></li></ul></li><li><strong>Relatório de Verificação:</strong><ul><li>Documentar achados e ações corretivas.</li><li>Informar a equipe de manutenção sobre problemas identificados.</li></ul></li><li><strong>Conformidade com a NR12:</strong><ul><li>Assegurar que todas as etapas sigam as diretrizes da NR12.</li></ul></li></ol><p>Este checklist detalhado garante a segurança e conformidade da máquina CNC com a NR12, minimizando riscos de acidentes e assegurando o funcionamento adequado do equipamento.</p>` , 'passo_a_passo': `<h1>Ordem de Procedimento para Lubrificação de Rolamentos</h1>\n\n<h2>Descrição do Material/Equipamento:</h2>\n<ul>\n    <li><strong>Graxa Industrial:</strong> MAT301</li>\n    <li><strong>Bomba de Graxa Pneumática:</strong> EQP301</li>\n</ul>\n\n<h2>Passos para Lubrificação:</h2>\n\n<ol>\n    <li><strong>Identificação do Tipo de Rolamento:</strong>\n        <ul>\n            <li>Determine o tipo de rolamento que precisa de lubrificação consultando a ficha técnica do equipamento.</li>\n        </ul>\n    </li>\n    <li><strong>Seleção do Lubrificante Adequado:</strong>\n        <ul>\n            <li>Escolha o lubrificante correto de acordo com o tipo de rolamento e condições de operação:\n                <ul>\n                    <li>Aeroshell 7</li>\n                    <li>Aeroshell 22</li>\n                    <li>Isoflex NBU 15</li>\n                    <li>Krytox</li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n    <li><strong>Verificação dos Bicos de Graxa:</strong>\n        <ul>\n            <li>Inspecione os bicos de graxa para garantir que estão presentes e em boas condições de funcionamento. Substitua qualquer bico danificado antes de proceder.</li>\n        </ul>\n    </li>\n    <li><strong>Aplicação do Lubrificante:</strong>\n        <ul>\n            <li>Conecte a Bomba de Graxa Pneumática (EQP301) ao bico de graxa.</li>\n            <li>Aplique o lubrificante selecionado nos bicos de graxa.</li>\n            <li>Siga os intervalos de lubrificação recomendados conforme as condições de operação documentadas no manual do equipamento.</li>\n        </ul>\n    </li>\n    <li><strong>Limpeza de Excesso:</strong>\n        <ul>\n            <li>Após a aplicação, remova qualquer excesso de lubrificante ao redor dos bicos de graxa usando um pano limpo e seco para evitar contaminação do ambiente de trabalho.</li>\n        </ul>\n    </li>\n    <li><strong>Registro da Lubrificação:</strong>\n        <ul>\n            <li>Documente a lubrificação realizada no log de manutenção.</li>\n            <li>Inclua detalhes como data, hora, tipo de lubrificante utilizado, e qualquer observação relevante sobre o estado dos rolamentos.</li>\n        </ul>\n    </li>\n</ol>\n\n<p>Este procedimento assegura a eficiência operacional dos rolamentos e prolonga sua vida útil ao garantir uma lubrificação adequada.</p>`},
        { id: 2, text: 'Verifique se houve superaquecimento.', estado:'Crítico', check: ``, passo_a_passo: `<h2><strong>Ordem de Procedimento para Verificação de Problemas de Superaquecimento</strong></h2>\n\n<h3><strong>Objetivo:</strong></h3>\n<p>Este procedimento visa orientar o técnico de manutenção na verificação e resolução de problemas relacionados ao superaquecimento de motores.</p>\n\n<h3><strong>Materiais e Equipamentos Necessários:</strong></h3>\n<ul>\n    <li>Serra Circular (MAT001)</li>\n    <li>Lixadeira Angular (EQP001)</li>\n    <li>Paquímetro Digital (MAT101)</li>\n    <li>Graxa Industrial (MAT301)</li>\n</ul>\n\n<h3><strong>Procedimento:</strong></h3>\n<ol>\n    <li><strong>Inspeção dos Dispositivos de Proteção Térmica:</strong>\n        <ul>\n            <li>Verifique o funcionamento dos termostatos e protetores térmicos, como Pt-100, KTY e termopares.</li>\n            <li>Certifique-se de que todos os dispositivos estão calibrados e operando dentro das especificações de fábrica.</li>\n        </ul>\n    </li>\n    <li><strong>Verificação dos Detectores de Temperatura por Resistência (RTD):</strong>\n        <ul>\n            <li>Realize testes para confirmar que os RTDs estão operando corretamente.</li>\n            <li>Utilize o Paquímetro Digital (MAT101) para medir e garantir a precisão das leituras de temperatura.</li>\n        </ul>\n    </li>\n    <li><strong>Avaliação do Motor para Sinais de Sobrecarga:</strong>\n        <ul>\n            <li>Inspecione visualmente o motor em busca de sinais de sobrecarga, como descoloração ou cheiro de queimado.</li>\n            <li>Verifique se todas as medidas de proteção contra sobrecarga estão ativas e funcionando.</li>\n        </ul>\n    </li>\n    <li><strong>Verificação da Pintura Anticorrosiva Interna do Motor:</strong>\n        <ul>\n            <li>Inspecione a pintura interna do motor, especialmente em ambientes de alta umidade, para detectar sinais de corrosão.</li>\n            <li>Caso necessário, utilize a Lixadeira Angular (EQP001) para remover áreas corroídas e aplique nova camada de Graxa Industrial (MAT301) para proteção.</li>\n        </ul>\n    </li>\n    <li><strong>Verificação de Operação Dentro das Variações de Tensão e Frequência Especificadas:</strong>\n        <ul>\n            <li>Utilize instrumentos apropriados para medir a tensão e a frequência de operação do motor.</li>\n            <li>Assegure-se de que os valores estão dentro das variações especificadas pela norma NEMA MG-1 Parte 12.</li>\n        </ul>\n    </li>\n</ol>\n\n<h3><strong>Conclusão:</strong></h3>\n<p>Após seguir todos os passos, registre qualquer anomalia encontrada e reporte ao supervisor imediatamente para ações corretivas. Assegure-se de que todas as ferramentas e equipamentos utilizados sejam devidamente armazenados após o uso.</p>\n\n<h3><strong>Nota:</strong></h3>\n<p>Este procedimento deve ser realizado com o motor desligado e em condições seguras para evitar acidentes.</p>`},
        { id: 3, text: 'Inspecionar linha de montagem Y.', estado:'Alerta', },
        { id: 4, text: 'Testar a integridade da máquina X.', estado:'Seguro', },
      ]);
    
    const [status, setStatus] = useState('idle') // 'idle', 'ready'
    
    const [selected, setSelected] = useState(0)
    const [sections, setSections] = useState('')

    const deleteItem = (id,event) => {
        setItems(items.filter(item => item.id !== id));
        event.stopPropagation()
        setStatus('idle')
    };

	const openOrder = (id) => {
		setStatus('ready')
        setSelected(id)
	};
    const openSection = (sec) => {
        setSections(sec)
	};

    return (
        <div className="w-full h-screen flex p-12 bg-gray-200">
            
            <div className="w-4/12 bg-trac-lblue overflow-y-auto">
                <h1 className="text-trac-blue text-center text-2xl bg-white m-3 rounded-base p-2">Ordem de serviço a serem cumpridas...</h1>
                {items.map(item => (
                    <div className="m-5 bg-white auto-h rounded-base p-3 text-black cursor-pointer hover:bg-gray-300" onClick={() => openOrder(item.id)}>  
                        <h1 className="text-xl text-trac-blue font-bold"> Solicitação Nº {item.id}</h1> 
                        <p className='font-bold'>{item.text}</p>
                        <p>Estado: {item.estado}.</p>
                        <div className="text-center pt-4 pr-4 font-bold text-white text-2xl">
                            <button className="rounded bg-green-700 p-2 hover:bg-green-800" onClick={(e) => deleteItem(item.id, e)}>Concluído</button>
                        </div>

                    </div>
                ))}
            </div>


            <div className="w-8/12 bg-gray-200 text-black h-full">

                {status === 'idle' && 
                    <div className="w-3/4 bg-gray-200 text-black h-full">
                        <div className="p-10 h-full overflow-y-auto">
                            <h1 className="text-5xl text-trac-blue"> Selecione uma ordem de serviço...</h1>
                        </div>
                </div>}

                {items.map(item => (
                    selected === item.id ? ( 
                        <div className="flex flex-col p-10 h-full overflow-y-auto w-full items-center">
                            <h2>{item.text}</h2>
                            <div className="flex gap-32 items-center">
                                <button className="font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-80 text-center hover:bg-gray-800 transition duration-300" onClick={() => openSection('passo_a_passo')}>Passo-a-passo e equipamentos</button>
                                <button className="font-poppins text-white border-solid border-2 border-white bg-trac-blue p-4 rounded-base w-80 text-center hover:bg-gray-800 transition duration-300" onClick={() => openSection('check_list')}>Check-list</button>
                            </div>
                            {sections === 'passo_a_passo' && <div className="pt-10" dangerouslySetInnerHTML={{ __html: item.passo_a_passo }} />}
                            {sections === 'check_list' && <div className="pt-10" dangerouslySetInnerHTML={{ __html: item.check }} />}
                        </div>

                    ) : null
                ))}
            </div>
        </div>
    )
}
