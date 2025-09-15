import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {

    const [dados, setDados] = useState ([]);
    const pegarPizzas = () => {
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then ((response) => setDados(response.data))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        pegarPizzas();
    }, [])

    useEffect(() =>{
        alert(dados)
    }, [dados])

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa',
        'Pizza de Frango'

    ]

    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);
    

    return(
        <div>
            <h3>Listagem de produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos