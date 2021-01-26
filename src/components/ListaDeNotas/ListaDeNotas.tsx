import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  props: any;
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <ul className="lista-notas list-group-notas">
          {this.props.notas.map((nota: any, index: number) => {
            return (
              <div className="col">
                <li
                  className="lista-notas_item list-group-item-notas"
                  key={index}
                >
                  <CardNota
                    indice={index}
                    apagarNota={this.props.apagarNota}
                    titulo={nota.titulo}
                    conteudo={nota.conteudo}
                    categoria={nota.categoria}
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListaDeNotas;
