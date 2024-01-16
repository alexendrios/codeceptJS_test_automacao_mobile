const { loginPage } = inject();

When('informo o usuário {string} e senha {string}', (usuario, senha) => {
    loginPage.logar(usuario, senha)
  });
  