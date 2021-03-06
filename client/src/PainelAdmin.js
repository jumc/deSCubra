import React from 'react';
import Client from './Client.js';
import {ListaPercursos} from './ListaPercursos.js';
import M from 'materialize-css';

//classe de tela de adiminstracao
export class PainelAdmin extends React.Component{
	constructor(props){

		super(props);
		this.state = {
			percursos:  [ [ 'Teste 1',
											'Esse é um percurso de teste. Ele está sendo inserido diretamente no banco de dados.',
											'images/percursos/teste1.png' ],
										[ 'Teste 2',
											'Eu queria ter algo legal para escrever aqui, mas vou ensinar você a terminar uma frase. Quando achar que está bom, escreva um ponto.',
											'images/percursos/teste2.png' ] ],
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
				var options = {};
				M.Modal.init(elems, options);
 		});
	}

	componentDidMount(){
		Client.listPercursos(res => {
			this.setState({percursos: res.percursos})
			console.log(res.percursos)
		})
	}

	render(){
		return(
		<div className="container">
 			<div align='center'>
  			<div id="tituloPainelAdmin" className='black-text'>
					<h3>Painel de Administração</h3>
					<h5>Percursos Disponíveis</h5>
				</div>
			</div>
			<ListaPercursos percursos = {this.state.percursos} />
			{/*render da colecao dos percursos disponiveis no sistema*/}
			<a href="/adicionarPercurso" className="btn green">Cadastrar Novo Percurso</a><br /><br />
		</div>
		);
	}
}
