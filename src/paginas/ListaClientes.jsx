

function ListaClientes() {
    // Recupera os clientes do localstorage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    
    const handleExclusao = (id) => {
        //Filtra os usuáros para excluir o usuário com o id informado
        const usuariosAtualizados = clientes.filter((cliente, index) => index !== id);

        //Atualiza o localstorage com a lista de usuários atualzado
        localStorage.setItem('clientes', JSON.stringify(usuariosAtualizados));

        alert("Usuário excluido com sucesso!");

        //Recarrega a página para exibir a lista de usuários atualizada
        window.location.reload();
    };


    

    return (
        <div className="lista">
            <h1>Listagem de Clientes:</h1>
            <ul>
                {clientes.map((cliente, index) => (
                    <li key={index}>
                        <p><strong>Nome do proprietário:</strong> {cliente.nome}</p>
                        <p><strong>Placa do veículo:</strong> {cliente.placa}</p>
                        <p><strong>Número do apartamento:</strong> {cliente.apartamento}</p>
                        <p><strong>Bloco do apartamento:</strong> {cliente.bloco}</p>
                        <p><strong>Modelo do veículo:</strong> {cliente.veiculo}</p>
                        <p><strong>Cor do veículo:</strong> {cliente.cor}</p>
                        <p><strong>Número da vaga:</strong> {cliente.vaga}</p>
                        <button onClick={() => handleExclusao(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaClientes;
