import { Produtos } from "./style"
export function CartProduct ({cartProduct,remover}){
    return(
        <Produtos>
            <>
                <figure>
                    <img src={cartProduct.img} alt={cartProduct.name} />
                </figure>
                <div className="descricao">
                    <h3 className="titulo">{cartProduct.name}</h3>
                    <h4>{cartProduct.category}</h4>
                </div>
                <span className="botao" onClick={()=>remover(cartProduct.id)}>Remover</span>
            </>
        </Produtos>
    )
}
        
