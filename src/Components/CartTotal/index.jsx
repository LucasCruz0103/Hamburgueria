import { Total } from "./style"
export function CartTotal({currentSale}){
    return(
        <Total>
            <h5>Total</h5>
            <p>R$ {currentSale.reduce((valorInicial,valorAnterior) => {
                return valorAnterior.price + valorInicial
            },0).toFixed(2)}</p>
        </Total>
    )
}

