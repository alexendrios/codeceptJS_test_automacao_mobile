# language: en
# charset: UTF-8
# Supported severity values: blocker, critical, normal, minor, trivial. ex.: @severity=critical
# Every Feature or Scenario can be annotated by following tags: @flaky, @muted, @known

Feature: Login
    Eu como usuário 
    gostaria de realizar o login na aplicação


Scenario: TC01 - Login - Dados em Branco
   Given acesso a aplicação
    When informo o usuário "" e senha " "
   Then vejo a seguinte mensagem "Usuário ou Senha inválida!" 

Scenario: TC02 - Login - Preenchendo somente usuário
   Given acesso a aplicação
   When informo o usuário "ale" e senha ""
   Then vejo a seguinte mensagem "Usuário ou Senha inválida!" 

Scenario: TC03 - Login - Preenchendo somente a senha
   Given acesso a aplicação
   When informo o usuário "" e senha "12345678"
   Then vejo a seguinte mensagem "Usuário ou Senha inválida!" 

Scenario: TC04 - Login - Usuário não cadastrado
   Given acesso a aplicação
   When informo o usuário "ale" e senha "12345678"
   Then vejo a seguinte mensagem "Usuário ou Senha inválida!" 