import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import * as bootstrap from "react-bootstrap";

class App extends Component {
  notas = new Array();
  categorias: Array<string>;
  show: boolean;
  constructor(props: any) {
    super(props);
    this.notas = [];
    this.categorias = [];
    this.state = {};
    this.show = false;
  }

  handleClose(){
    this.setState({show: this.show = false})
   
  }
  handleShow(){
    this.setState({show: this.show = true})
  }
  criarNota(titulo: string, conteudo: string, categoria:string) {
    this.setState({ notas: this.notas.push({ titulo, conteudo , categoria }) });
  }

  deletarNota(index: number) {
    let arrayNotas = this.notas;
    arrayNotas.splice(index, 1);
    this.setState({
      notas: arrayNotas,
    });
  }
  adicionarCategoria(valorCategoria: string) {
    this.setState({ categorias: this.categorias.push(valorCategoria) });
  }
  render() {
    return (
      <div className="container" id="teste">
        <FormularioCadastro 
                categorias={this.categorias}
                criarNota={this.criarNota.bind(this)} />
        <button
          className="btn btn-primary"
          id="btn-adicionar"
          onClick={this.handleShow.bind(this)}>
          Adicionar Categorias
        </button>
        <bootstrap.Modal
          show={this.show}
          keyboard={true}>
          <bootstrap.Modal.Header closeButton>
            <bootstrap.Modal.Title>Adicione Categorias</bootstrap.Modal.Title>
          </bootstrap.Modal.Header>
          <bootstrap.Modal.Body>
            <ListaDeCategorias
              adicionarCategoria={this.adicionarCategoria.bind(this)}
              categorias={this.categorias}/>
          </bootstrap.Modal.Body>
          <bootstrap.Modal.Footer>
            <bootstrap.Button variant="secondary" onClick={this.handleClose.bind(this)}> Sair
            </bootstrap.Button>
          </bootstrap.Modal.Footer>
        </bootstrap.Modal>
        <main className="conteudo-principal">
          <div className="col-12">
            <ListaDeNotas
              apagarNota={this.deletarNota.bind(this)}
              notas={this.notas}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
