import React, { Component } from 'react';
class Clima extends Component {

    mostrarResultado = () => {

        //Obtener los datos de la consulta

        const {name, weather, main} = this.props.resultado;
        
        if(!name || !weather || ! main) return null;

        const kelvin = 273.15;

        const urlIcono = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        
        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={urlIcono} alt="`clima de ${name}`"/>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render() { 
        console.log(this.props.resultado);
        return ( 
            <div className="container">
                {this.mostrarResultado()}
            </div>
         );
    }
}
 
export default Clima;