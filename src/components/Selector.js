import React from "react";

export default class Selector extends React.Component {

    componentWillUnmount() {
        alert("Fin.");
    }

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={() => this.props.handleClick("A")}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={() => this.props.handleClick("B")}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        );
    }
}