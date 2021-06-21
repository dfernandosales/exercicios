# API REST - FEATHERS + REACT

## Descrição
<p>Projeto de uma API REST implementado em NodeJs utilizando Feathers e Squelize que realiza operações CRUD</p>

## Link GitHub
https://github.com/dfernandosales/exercicios

## Tabela de conteúdos
<!--ts-->
   * [Features](#features)
   * [Execução](#execução)
   * [Tecnologias utilizadas](#tecnologias)
   * [Testes](#testes)
   * [Autor](#autor)
<!--te-->

## Features

- [x] CRUD de veiculos
- [x] Listagem específica de veículos


## Execução

```bash
docker-compose -f docker/arquivo_docker up -d
```
```bash
db-migrate up
```
```bash
yarn dev
```

Após esses três comando serem executados com sucesso o backend + banco da aplicação estará rodando.


## Tecnologias
<p>As seguintes ferramentas foram utilizadas na construção do projeto:</p>

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.mongodb.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [FeathersJs](https://docs.feathersjs.com/)
- [Mocha](https://mochajs.org/)

## Testes

<p>O projeto conta com testes de integração para as operações CRUD. Para rodar os testes, execute:</p>

```bash
yarn test
```

## Autor
---

<a href="https://www.linkedin.com/in/diogo-fernando-sales/">
 <img style="border-radius: 50%;" src="https://media-exp3.licdn.com/dms/image/C4D03AQHg91PUvzwdyw/profile-displayphoto-shrink_800_800/0/1597152826327?e=1629331200&v=beta&t=uQ55Ss1GUmY1Ajm3YdmJ-QTXhmbrTgH3YhgIFkHIAjg" width="100px;" alt=""/>
 <br />
 <sub><b>Diogo Fernando de Melo Sales</b></sub></a> <a href="https://www.linkedin.com/in/diogo-fernando-sales/" title="perfil"> </a>

