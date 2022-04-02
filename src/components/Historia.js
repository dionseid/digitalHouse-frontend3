import React from "react";
import Selector from "./Selector";
import Historial from "./Historial";
import Data from "./data";

export default class Historia extends React.Component {

    constructor() {
        super();

        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: ""
        }
    }

    elegirOpcion = (value) => {
        if (this.state.contador < Data.length - 1) // Dejar de funcionar al agotarse le JSON
            this.setState({
                contador: this.state.contador + 1,
                historial: [...this.state.historial, <li key={this.state.contador + 1}>{value}</li>],
                seleccionPrevia: value
            });
        else alert("Fin.");
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{Data[this.state.contador].historia}</h1>
                <Selector handleClick={this.elegirOpcion} opcionA={Data[this.state.contador].opciones.a} opcionB={Data[this.state.contador].opciones.b} />
                <Historial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia} />
            </div>
        );
    }

}