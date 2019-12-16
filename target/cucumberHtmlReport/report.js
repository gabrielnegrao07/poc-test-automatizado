$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# encoding: utf-8"
    },
    {
      "line": 2,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Login no site",
  "description": "",
  "id": "login;login-no-site",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 6,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que um usuario entre com o user \"admin\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "a senha \"admin\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clicar no botão login",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "deve ocorrer o login com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 33
    }
  ],
  "location": "LoginSteps.queUmUsuarioEntreComOUser(String)"
});
formatter.result({
  "duration": 409867042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    }
  ],
  "location": "LoginSteps.aSenha(String)"
});
formatter.result({
  "duration": 99422543,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoLogin()"
});
formatter.result({
  "duration": 125218501,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.deveOcorrerOLoginComSucesso()"
});
formatter.result({
  "duration": 2255898122,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login com usuario ou senha errado",
  "description": "",
  "id": "login;login-com-usuario-ou-senha-errado",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que um usuario entre com o user \"admin2\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "a senha \"1223\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "clicar no botão login",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "deve ocorrer o um erro de acesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "admin2",
      "offset": 33
    }
  ],
  "location": "LoginSteps.queUmUsuarioEntreComOUser(String)"
});
formatter.result({
  "duration": 326565389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1223",
      "offset": 9
    }
  ],
  "location": "LoginSteps.aSenha(String)"
});
formatter.result({
  "duration": 98361249,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoLogin()"
});
formatter.result({
  "duration": 89597329,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.deveOcorrerOUmErroDeAcesso()"
});
formatter.result({
  "duration": 1147372603,
  "status": "passed"
});
});