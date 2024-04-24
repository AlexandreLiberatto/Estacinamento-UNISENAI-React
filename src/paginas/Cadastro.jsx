import { useState } from "react";
import './Cadastro.css';
import eventBus from './eventBus';

function CadastroClientes() {
    const [cliente, setCliente] = useState({
        nome: '',
        placa: '',
        apartamento: '',
        bloco: '',
        veiculo: '',
        cor: '',
        vaga: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validação dos campos para evitar que os dados sejam enviados incorretamente
        if (!cliente.nome || !cliente.placa || !cliente.apartamento || !cliente.bloco || !cliente.veiculo || !cliente.cor || !cliente.vaga)
        {
            alert("Preencha todos os campos!");
            return;
        }


        if (cliente.vaga < 1 || cliente.vaga > 30) 
        {
            alert("Vagas disponiveis, de 01 a 30...");
            return;
        }

        // Recupera os dados cadastrados no localstorage
        const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];

        // Adiciona um novo cliente à lista de clientes
        clientesCadastrados.push(cliente);

        // Atualiza o localstorage com a lista de clientes atualizada
        localStorage.setItem('clientes', JSON.stringify(clientesCadastrados));

        // Emite um evento para sinalizar a atualização da lista de vagas disponíveis
        eventBus.emit('clienteCadastrado');

        // Limpa os campos após o cadastro
        setCliente({
            nome: '',
            placa: '',
            apartamento: '',
            bloco: '',
            veiculo: '',
            cor: '',
            vaga: ''
        });

        alert("Cadastro realizado com sucesso!!!")

    };

    return (
        <div>
            <h1 className="container" >Cadastro de Usuários</h1>
            <form  onSubmit={handleSubmit}>

                <label>Nome do proprietário:</label>
                <input type="text" name="nome" value={cliente.nome} onChange={handleInputChange} placeholder="Digite seu nome..."/>

                <label>Placa do veículo:</label>
                <input type="text" name="placa" value={cliente.placa} onChange={handleInputChange} placeholder="Digite a placa..."/>

                <label>Número do apartamento:</label>
                <input type="number" name="apartamento" value={cliente.apartamento} onChange={handleInputChange} placeholder="Digite o número do apartamento..."/>

                <label>Bloco do apartamento:</label>
                <input type="text" name="bloco" value={cliente.bloco} onChange={handleInputChange} placeholder="Digite o bloco do apartamento..."/>

                <label>Modelo do veículo:</label>
                <input type="text" name="veiculo" value={cliente.veiculo} onChange={handleInputChange} placeholder="Digite o modelo do veículo..."/>

                <label>Cor do veículo:</label>
                <input type="text" name="cor" value={cliente.cor} onChange={handleInputChange} placeholder="Digite a cor do veículo..."/>

                <label>Número da vaga:</label>
                <input type="number" name="vaga" value={cliente.vaga} onChange={handleInputChange} placeholder="Digite o número da vaga..."/>

                <button type="submit">Cadastrar</button>

            </form>
        </div>
    )

}
export default CadastroClientes;
