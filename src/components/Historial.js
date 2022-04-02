import React from "react";

export default class Historial extends React.Component {
    componentDidUpdate() {
        console.log("DidUpdate desde Historial");
    }

    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>{this.props.historial.filter((item, idx, arr) => idx !== arr.length - 1)}</ul> {/* De esta manera nos aseguramos que el historial de opciones elegidas no redunde mostrando la selección anterior */}
            </div>
        );
    }
}