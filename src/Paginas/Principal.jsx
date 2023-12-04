import estilos from "./Principal.module.css"
import { Cabecera } from "../Componentes/Cabecera"
import { Formulario } from "../Componentes/Formulario"

export function Principal() {
    return(
        <div className={estilos.container__principal}>
            <Cabecera/>
            <Formulario/>
        </div>
        
    )
}