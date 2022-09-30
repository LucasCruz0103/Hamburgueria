import { CardProduto } from "./style"
export function Product ({produto,irAoCarrinho}){
    return(
        <CardProduto>
            <figure>
                <img src={produto.img} alt={produto.name} />
            </figure>
            <h2 className="space">{produto.name}</h2>
            <h4 className="space">{produto.category}</h4>
            <p className="space">R${produto.price.toFixed(2)}</p>
            <button onClick={()=>irAoCarrinho(produto.id)} className="button distancia">Adicionar</button>
        </CardProduto>
    )
}