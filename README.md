# 🚀 Product App - Angular (AWS)



![produto](https://github.com/user-attachments/assets/2aa7e545-821b-458b-9b82-fc3760989eb3)




## 📌 Sobre o Projeto

Este projeto é um **CRUD de produtos** desenvolvido com **Angular**, consumindo uma API REST criada em **Spring Boot** e hospedada na AWS.

A aplicação permite realizar operações completas de:

* ✅ Cadastro de produtos
* ✅ Listagem de produtos
* ✅ Exclusão de registros

O sistema foi desenvolvido com foco em **arquitetura real de mercado**, separando frontend e backend e realizando deploy na nuvem.

---

## 🏗️ Arquitetura

A aplicação segue uma arquitetura distribuída:

* 🌐 **Frontend:** Angular hospedado no **AWS S3**
* ⚙️ **Backend:** API Spring Boot no **AWS Elastic Beanstalk**
* 🗄️ **Banco de Dados:** MySQL no **AWS RDS**

O frontend consome a API via HTTP, garantindo desacoplamento entre as camadas.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* Angular
* TypeScript
* HTML5 + CSS3
* Bootstrap (ou outro, se você usou)

### Backend (API)

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate

### Cloud (AWS)

* S3 (Hospedagem do frontend)
* Elastic Beanstalk (Deploy da API)
* RDS (Banco de dados MySQL)

---

## 🔗 Integração com API

O frontend Angular consome endpoints REST da API para realizar todas as operações CRUD.

Exemplo de requisições:

* `GET /produtos` → Lista produtos
* `POST /produtos` → Cria produto
* `DELETE /produtos/{id}` → Remove produto

---

## 🚀 Deploy

A aplicação foi publicada na AWS:

* Frontend hospedado no S3 (site estático)
* Backend disponível via URL pública no Elastic Beanstalk
* Banco gerenciado no RDS

---

## 💻 Como rodar o projeto localmente

### Pré-requisitos

* Node.js instalado
* Angular CLI instalado

```bash
npm install -g @angular/cli
```

### Clonar o repositório

```bash
git clone https://github.com/TiagoSimaodev/product-app-angular-aws.git
```

### Instalar dependências

```bash
npm install
```

### Rodar o projeto

```bash
ng serve
```

Acesse:

```
http://localhost:4200
```

---

## 📷 Demonstração

📌 *Adicione aqui prints da aplicação ou a imagem da arquitetura utilizada.*

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar desenvolvimento Full Stack
* Aplicar conceitos de arquitetura em nuvem (AWS)
* Criar uma aplicação real com integração entre frontend e backend
* Consolidar conhecimentos em Angular + Spring Boot

---

## 👨‍💻 Autor

**Tiago Simão**

* GitHub: https://github.com/TiagoSimaodev
* LinkedIn: https://www.linkedin.com/in/tiagosimaodev/


