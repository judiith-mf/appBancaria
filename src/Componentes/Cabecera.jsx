import estilos from "./Cabecera.module.css"
import logo from "../img/santander1-logo.png"

export function Cabecera() {
    return(
        <div className={estilos.container__cabecera}>
            <header>
                <img src={logo} alt="" />
            </header>
        </div>
    );
}