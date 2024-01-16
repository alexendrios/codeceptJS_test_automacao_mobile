const { I } = inject();

module.exports = {

    openApp(){
      I.wait(2)
    },

    validacao(mensagem){
      I.see(mensagem)
    }
}
