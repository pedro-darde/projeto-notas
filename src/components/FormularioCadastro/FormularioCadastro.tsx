import React, { Component, FormEvent, ReactNode } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class FormularioCadastro extends Component {
  titulo: string;
  conteudo: string;
  categoria: string;
  props: any;
  constructor(props: any) {
    super(props);
    this.titulo = "";
    this.conteudo = "";
    this.categoria = "Sem Categoria"
  }
  handleMudancaTitulo(evento: any) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  handleMudancaConteudo(evento: any) {
    evento.stopPropagation();
    this.conteudo = evento.target.value;
  }
  handleMudancaCategoria(evento: any) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  criarNota(evento: any) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.conteudo, this.categoria);
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <h3 className="form-titulo"> Cadastre sua nota </h3>
        <div className="form-group">
          <input
            type="text"
            id="form-cadastro_input"
            placeholder="Titulo da nota"
            className="form-control"
            onChange={this.handleMudancaTitulo.bind(this)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Escreva sua nota"
            className="form-control"
            onChange={this.handleMudancaConteudo.bind(this)}
          />
        </div>
        <div className="form-group">
          <select className="form-control" aria-label="Default select example" onChange={this.handleMudancaCategoria.bind(this)}>
            <option> Sem Categoria </option>
            {this.props.categorias.map((categoria: string)=>{
              return <option>{categoria}</option>
            })}
          </select>
        </div>
        <button
          className="btn btn-primary"
          id="form-cadastro_input form-cadastro_submit"
        >
          {" "}
          Criar Nota{" "}
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
