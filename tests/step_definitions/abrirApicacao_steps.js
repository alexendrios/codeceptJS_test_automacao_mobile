const { openAppPage } = inject();
// Add in your custom step files

Given('acesso a aplicação', () => {
  openAppPage.openApp()
});

Then('vejo a seguinte mensagem {string}', (mensagem) => {
  openAppPage.validacao(mensagem)
});


