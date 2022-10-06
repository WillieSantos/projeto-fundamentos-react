import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const produtosTD = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preço.toFixed(2)}</td>
            </tr>

        )


    })

    return (
        <div className='TabelaProdutos'>
            <h2>Tabela Produtos</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {produtosTD}
            </table>
        </div>
    )


}

