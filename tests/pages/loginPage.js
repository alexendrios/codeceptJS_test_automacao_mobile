const { I } = inject();

module.exports = {

  filds:{
    usuario: 'Informe o usuário',
    senha: "Informe a senha"
  }, 

  button: {
    autenticar: 'AUTENTICAR'
  },

  logar(usuario, senha){
    I.fillField(this.filds.usuario, usuario)
    I.fillField(this.filds.senha, senha)
    I.tap(this.button.autenticar)
    I.wait(2)
  }
}
