import { useState } from "react";
import { Headers } from "./style";

export function Header({showProducts}){
    const [info, setInfo] = useState("")
    return(
        <Headers>
            <h1>Burger <span>Kenzie</span></h1>
            <div className="divInput">
                <input onChange={(e)=>setInfo(e.target.value)} className="input" type="text" placeholder="Digitar Pesquisa" />
                <span className="span">
                    <button onClick={()=>showProducts(info)} className="spanBotao">Pesquisar</button>
                </span>
            </div>
        </Headers>
    )
}