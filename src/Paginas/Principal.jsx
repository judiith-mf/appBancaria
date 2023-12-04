import estilos from "./Principal.module.css"
import { Cabecera } from "../Componentes/Cabecera"

export function Principal() {
    return(
        <div className={estilos.container__princiapl}>
            <Cabecera/>
        </div>
        
    )
}