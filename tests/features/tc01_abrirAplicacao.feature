# language: en
# charset: UTF-8
# Supported severity values: blocker, critical, normal, minor, trivial. ex.: @severity=critical
# Every Feature or Scenario can be annotated by following tags: @flaky, @muted, @known

Feature: Abrir a aplicação
 Eu como usuário
 Gostaria de abrir o aplicativo
 em um device Android

  Scenario: Abrir a Aplicação
    Given acesso a aplicação
    Then vejo a seguinte mensagem "Informe o usuário"
