import { CartProduct } from "../CartProduct"
import { CartTotal } from "../CartTotal"
import { Container } from "./style"

export function Cart({cartProducts,setCurrentSale}){
    function remover(produtoId){
        const removendo = cartProducts.filter((produto)=> produto.id !== produtoId)
        setCurrentSale(removendo)
    }
    return(
        <>
            <Container>
                <h2>Carrinho De Compras</h2>
                {cartProducts.length === 0 ?
                <div className="tituloCarrinho">
                    <h4>Sua sacola está vazia!</h4>
                    <p>Adicione Itens</p>
                </div>
                :
                <div className="alimentos">
                    {cartProducts.map((produto)=>{
                        return <CartProduct key={produto.id} cartProduct={produto} remover={remover}/>
                    })}
                </div>
                }
                <CartTotal currentSale={cartProducts}/>
            </Container>
        </>
    )
}
            