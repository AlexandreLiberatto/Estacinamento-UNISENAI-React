

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
        <div>
            <h1>Listagem de Clientes:</h1>
            <ul>
                {clientes.map((cliente, index) => (
                    <li key={index}>
                        <strong>Nome do proprietário:</strong> {cliente.nome}<br />
                        <strong>Placa do veículo:</strong> {cliente.placa}<br />
                        <strong>Número do apartamento:</strong> {cliente.apartamento}<br />
                        <strong>Bloco do apartamento:</strong> {cliente.bloco}<br />
                        <strong>Modelo do veículo:</strong> {cliente.veiculo}<br />
                        <strong>Cor do veículo:</strong> {cliente.cor}<br />
                        <strong>Número da vaga:</strong> {cliente.vaga}<br />
                        <button onClick={() => handleExclusao(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaClientes;
