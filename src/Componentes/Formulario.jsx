import estilos from "./Formulario.module.css"

export function Formulario() {
    return(
        <div className={estilos.container__form}>
            {/* número de cuenta, nºtarjeta bancaria, dni del usuario
             */}
             <h3>Introduzca sus datos bancarios</h3>
             <form action="Formulario.php" method="get">
                <div className={estilos.campos}>
                    <label htmlFor="">Número de cuenta</label>
                    <input type="text" name="numCuenta"/>
                </div>
                <div className={estilos.campos}>
                    
                </div>
                <div className={estilos.campos}>
                    <label htmlFor="">Número de tarjeta bancaria</label>
                    <input type="text" name="numTarjBanc"/>
                </div>
                <div className={estilos.campos}>
                    <label htmlFor="">Dni</label>
                    <input type="text" name="dni"/>
                </div>
                <input type="submit" value="Enviar" className={estilos.boton}/>
             </form>
        </div>
    )
}