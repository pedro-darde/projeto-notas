import { mdiBottleSodaOutline } from "@mdi/js";
import * as React from "react";
import { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  props: any;
  isClicked: boolean;
  constructor(props: any) {
    super(props);
    this.isClicked = false;
  }
  
  adicionarCategoria(event: any) {
    if (event.key === "Enter" || this.isClicked) {
      let valorCategoria = event.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <div className="container">
        <div className="form-row align-items-center" id="div-input">
          <input
            type="text"
            className="form-control"
            id="input-categoria"
            placeholder="Categoria"
            onKeyUp={this.adicionarCategoria.bind(this)}
          />
          <button
            type="submit"
            className="btn btn-primary">
            Adicionar
          </button>
        </div>
        <div className="container" id="categorias-div">
          <h3 className="">Categorias Disponiveis</h3>
          <ul className="list-group list-group-horizontal">
            {this.props.categorias.map((categoria: string, index: number) => {
              return (
                <li
                  key={index}
                  className="list-group-item list-group-item-primary"
                >
                  {categoria}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaDeCategorias;
