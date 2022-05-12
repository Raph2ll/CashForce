
# Boas vindas ao repositório do desafio Cash Force

Esse projeto foi desenvolvido para uma vaga de fullstack na empresa [CashForce](https://cashforce.com.br/)

A proposta é desenvolver uma tela de Notas Fiscais.

# Sumário

- [Instruções](#instruções)
- [Stack utilizada](#Stack-utilizadas)
- [Documentação da API](#documentação-da-API)
- [Screenshots](#Screenshots)
- [Próximos passos](#Próximos-passos)

## Instrução

Clonando o repositorio

```bash
  git@github.com:Raph2ll/CashForce.git
```

Entrando no backend do repositorio

```bash
  cd CashForce/backend
```

Instale as dependencias e rode a aplicação
// não esqueça do mysql

```bash
  npm i && npm start
```

Entrando no frontend com o backend rodando em segundo plano

```bash
  cd CashForce/frontend
```

Instale as dependencias e rode a aplicação


```bash
  npm i && npm start
```
## Stack utilizada

**Front-end:** React, React-router-dom, Axios, EsLint

**Back-end:** Node, Express, Sequelie, Sequelize-auto, sequelize-cli, EsLint

## Documentação da API

#### Retorna todos os itens

```http
  GET http://localhost:3000/
```

| Parâmetro   | Descrição  
| :---------- | :---------
| null | Não precisa de `chave` 

### Resultado

```json
[
	{
		"id": 1,
		"orderNfId": "1605181324132",
		"orderNumber": "18153",
		"orderPath": null,
		"orderFileName": null,
		"orderOriginalName": null,
		"emissionDate": "2020-10-30T11:00:00-03:00",
		"pdfFile": null,
		"emitedTo": "22843980000127",
		"nNf": "18153",
		"CTE": "",
		"value": "198450",
		"createdAt": "2020-10-30T17:54:18.000Z",
		"updatedAt": "2020-10-30T17:54:18.000Z",
		"cnpjId": 1,
		"userId": 1,
		"buyerId": 1,
		"providerId": 1,
		"orderStatusBuyer": "0",
		"orderStatusProvider": "0",
		"deliveryReceipt": null,
		"cargoPackingList": null,
		"deliveryCtrc": null,
		"cnpj": {
			"id": 1,
			"cnpj": "00000000000001",
			"companyType": "2",
			"createdAt": "2020-10-29T21:20:33.000Z",
			"updatedAt": "2020-10-29T21:20:33.000Z"
		},
		"user": {
			"id": 1,
			"name": "ALLAN SOUZA",
			"email": "allan@cashforce.com.br",
			"phoneNumber": null,
			"mobile": null,
			"departament": "1",
			"verificationCode": "",
			"emailChecked": true,
			"createdAt": "2020-10-01T21:31:37.000Z",
			"updatedAt": "2020-10-01T22:41:23.000Z",
			"cashforceAdm": false
		},
		"buyer": {
			"id": 1,
			"name": "SACADO 001",
			"tradingName": "SACADO 001 LTDA",
			"cashforceTax": "0",
			"responsibleName": null,
			"responsibleEmail": null,
			"responsiblePosition": null,
			"responsiblePhone": null,
			"responsibleMobile": null,
			"website": null,
			"postalCode": null,
			"address": null,
			"number": null,
			"complement": null,
			"neighborhood": null,
			"city": null,
			"state": null,
			"phoneNumber": null,
			"situation": null,
			"situationDate": null,
			"createdAt": "2020-10-29T21:20:33.000Z",
			"updatedAt": "2020-10-29T21:20:34.000Z",
			"cnpjId": 1,
			"confirm": true,
			"email": null
		},
		"provider": {
			"id": 1,
			"name": "CEDENTE 002",
			"tradingName": "CEDENTE 002 LTDA",
			"cashforceTax": null,
			"responsibleName": null,
			"responsibleEmail": null,
			"responsiblePosition": null,
			"responsiblePhone": null,
			"responsibleMobile": null,
			"website": null,
			"postalCode": null,
			"address": null,
			"number": null,
			"complement": null,
			"neighborhood": null,
			"city": null,
			"state": null,
			"bank": null,
			"bankAgency": null,
			"account": null,
			"documents": null,
			"phoneNumber": null,
			"situation": null,
			"situationDate": null,
			"createdAt": "2020-10-29T21:22:21.000Z",
			"updatedAt": "2020-10-29T21:22:22.000Z",
			"cnpjId": 2,
			"email": null
		}
	},
  [...]
]
```


## Screenshots

### [Tela proposta](https://www.figma.com/file/NY1fe6PAZ6DKeD9eOzyrju/Teste-Cashfroce?node-id=0%3A1)

![Tela proposta](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

### Tela final

![Tela final](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Próximos passos


* Faze a aplicação e Vue.js + Vite 

* Deploy no **Heroku** + PM2

* Implementar o CRUD

* Testes de integração

* Implementação do **Swagger** para documentação da API

* Adicionar uma página de **LOGIN/REGISTER**

* Token de acesso **JWT**

## Autor

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/Raph2ll"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66336767?v=4" width="100px;" alt="Raphael"/><br /><sub><b>Raphael</b></sub></a><br /><a href="https://github.com/Raph2ll" title="GitHub Raphael"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub"/></a><br /><a href="https://www.linkedin.com/in/Raph2ll/" title="Linkedin Raphael"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin Raphael"/></a></td>
</table>

<p align="center">Obrigado pela oportunidade CashForce esse projeto foi feito com muito ❤️, empenho, esforço.</>

