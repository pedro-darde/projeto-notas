import React, { Component } from "react";
import "./style.css";
import Icon from "@mdi/react";
import { mdiDeleteSweepOutline } from "@mdi/js";

class CardNota extends Component {
  props: any;
  constructor(props: any) {
    super(props);
  }
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo"> {this.props.titulo} </h3>

          <a onClick={this.apagar.bind(this)} className="delete-link">
            <Icon path={mdiDeleteSweepOutline} size={1} color="red" />
          </a>
        </header>
        <p className="card-nota_texto">{this.props.conteudo}</p>
        <p className="categoria-info">{this.props.categoria}</p>
      </section>
    );
  }
}

export default CardNota;
