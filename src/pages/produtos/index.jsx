//Hooks do REACT - para controlar renderização e estados
import {useState, useEffect} from 'react'
// Ferramenta para consumir rotas do backend
import axios from 'axios'
 
const Produtos = () => {
    // Um estado para controlar os dados
    const [dados, setDados] = useState([]);
 
    // Controla a renderização da página
    useEffect(()=>{  

        // GET - busca os dados do endpoints
        // devolve dados (data) e código da resposta (status)
        // then é uma promise (promessa) requisição assíncrona
        // catch captura o erro da requisição
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then((response) => {
            console.log(response.data.data)
            setDados(response.data.data)
        })
        .catch((error) => console.log(error))
    }, [])
 
    // Iteração da lista de pizzas
    const listaPizzas = dados.map(pizza =>
        <li key={pizza.id}>{pizza.nome}</li>)
 
    return (
        <div>
            <h3>Listagem de Produtos</h3>
 
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
 
export default Produtos