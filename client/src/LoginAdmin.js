import React, { Component } from 'react';

class LoginAdmin extends Component {

  handleSignIn(e) {
    e.preventDefault()
    var sha512 = require('js-sha512');
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(sha512(username), sha512(password), 'adm')
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSignIn.bind(this)}>
            <h5>Login para administradores</h5>
            <input type="text" ref="username" placeholder="Usuário" />
            <input type="password" ref="password" placeholder="Senha" />
            <button class="btn-flat green-text">Login</button>
          </form>
          <p><br /></p>
        </div>
    );
  }

}

export default LoginAdmin;
