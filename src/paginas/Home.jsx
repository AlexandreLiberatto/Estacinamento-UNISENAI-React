import Carro from './carro.jpg';
import './Cadastro.css';


function Home() {
    return (
        <div className="container">
            <div>
                <h1>Estacionamento UNISENAI</h1>
                <img src={Carro} alt="Imagem Carro" />
            </div>
        </div>
    );
}

export default Home;
