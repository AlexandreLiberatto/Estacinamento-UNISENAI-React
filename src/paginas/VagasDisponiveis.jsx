import { useEffect, useState } from "react";
import "./VagasDisponiveis.css";
import eventBus from './eventBus';

function VagasDisponiveis() {
    const [vagas, setVagas] = useState(Array(30).fill("Disponível"));

    useEffect(() => {
        function verificarVagasDisponiveis() {
            let vagasOcupadas = JSON.parse(localStorage.getItem("clientes")) || [];

            setVagas(prevVagas => {
                let novasVagas = [...prevVagas];
                vagasOcupadas.forEach(cliente => {
                    console.log("Alterando vaga:", cliente.vaga);
                    novasVagas[cliente.vaga - 1] = <span className="vaga-ocupada">Vaga {cliente.vaga} Ocupada</span>;
                });
                return novasVagas;
            });
        }

        verificarVagasDisponiveis();

        // Adiciona um listener para atualizar as vagas disponíveis quando um cliente é cadastrado
        eventBus.on('clienteCadastrado', verificarVagasDisponiveis);

        return () => {
            // Remove o listener quando o componente é desmontado para evitar vazamentos de memória
            eventBus.off('clienteCadastrado', verificarVagasDisponiveis);
        };
    }, []); // Removido vagas das dependências

    return (
        <div id="conteudo2">
            <h1>Vagas Disponíveis</h1>
            <div className="box">
                <ul>
                    {vagas.map((vaga, index) => (
                        <li key={index}>{vaga}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VagasDisponiveis;

