import { toast } from "react-toastify"
import { Product } from "../Product"
import { DivProduto } from "./style"


export function ProductList ({products, filteredProducts, setCurrentSale, currentSale}){
    function irAoCarrinho(produtoId){
        const pegandoOProduto = products.find((produto)=>
            produto.id === produtoId
        )
        const verificando = currentSale.find((produto)=>
            produto.id === pegandoOProduto.id
        )
        if(verificando === undefined){
            setCurrentSale(estadoJaExistente => [...estadoJaExistente,pegandoOProduto])
            
            toast.success ("Adicionado ao carrinho", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            toast.error ("Já existe esse produto no carrinho!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    return(
        <DivProduto>
            
            {filteredProducts.length > 0 ?
            filteredProducts.map((produto)=>{
                return <Product key={produto.id} produto={produto} irAoCarrinho={irAoCarrinho}/>
            })
            :
            products.map((produto)=>{
                return <Product key={produto.id} produto={produto} irAoCarrinho={irAoCarrinho}/>

            })
            }   
        </DivProduto>
    )
}
                




