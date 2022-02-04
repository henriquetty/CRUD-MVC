# CRUD-MVC — Aplicação de cadastros simples feita utilizado o padrão MVC.

Aplicação para cadastro de usuários construída utilizando o padrão MVC com NodeJS e ExpressJS.

![GitHub repo size](https://img.shields.io/github/repo-size/henriquetty/CRUD-MVC)
![GitHub language count](https://img.shields.io/github/languages/count/henriquetty/CRUD-MVC)

<img src="https://i.imgur.com/GWgL3Cg.png" alt="imagem de exemplo para projeto">

> Página de listagem de usuários cadastrados no sistema.

## 💻 Como configurar o projeto em seu ambiente local?

Antes de começar, verifique se você atende aos seguintes requisitos:
* Tenha instalado a versão mais recente do <a href="https://nodejs.org/en/" target="_blank">NodeJS e NPM</a>
* Possua o banco de dados <a href="https://www.mysql.com/" target=_blank>MySQL</a> ou <a href="https://mariadb.org/" >MariaDB</a> executando em seu sistema operacional.
* E por final, precisaremos do GIT, poderá fazer o download <a href="https://git-scm.com/">aqui</a>
---

## 🚀 Instalando

Para instalar a aplicação, siga estas etapas

1. Execute `$ git clone https://github.com/henriquetty/CRUD-MVC`
2. Entre na pasta criada com `$ cd CRUD-MVC`
3. Agora vamos fazer a instalação do projeto `$ npm install`

## 🔧 Configurando
O primeiro passo para configurar o projeto em seu ambiente local é criar uma database.
Logo após isso renomeie o arquivo *.env.example* para somente *.env* e configure o mesmo com os detalhes de seu banco de dados. </br>
Execute o comando `$ npm run create:table` para automatizar a criação da tabela em sua database que foi previamente configurada.

## ⚙ Executando
Para botar o projeto no ar é muito fácil, simplesmnente execute `$ npm run dev` e navegue para [localhost:8080](http://localhost:8080) (ou a porta configurada).
