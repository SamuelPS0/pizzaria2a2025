const Produtos = () => {

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