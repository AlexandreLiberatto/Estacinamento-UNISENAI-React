
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="cadastro">Cadastrar Vagas</Link></li>
                    <li><Link to="lista">Listar Clientes</Link></li>
                    <li><Link to="Vagas">Vagas Disponíveis</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;