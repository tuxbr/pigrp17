# pigrp17
Projeto Integrador Grupo 35

## Integrantes
- Beatriz Ferro de Carvalho Benvenuto - Bbenvennuto 
- Bianca de Oliveira Santos - biaaoliveira
- Isabella Moussa Macedo - isabellammacedo
- Nei Guilherme Silva - gsilvaro11
- Raimundo Marcio Nunes Costa - tuxbr/ tuxgrupomx
- Renato Ramalho Lima - (adicionar usuário do Renato)

## Projeto Revisado
[PDF da Segunda Entrega](adicionar o link do que ainda vai ser entregue na segunda entrega)

## Vídeo de Demonstração
[Assista ao Vídeo no YouTube](link da url do vídeo que vamos fazer)

## Descrição
O frontend foi desenvolvido utilizando HTML, CSS, React (com Next.js) e Bootstrap, localizado na pasta `frontend/terratrocada` deste repositório. 
O backend foi desenvolvido utilizando Java 8 + Spring Boot + JPA Hibernate + RESTful, localizado na pasta `backend/appback` deste repositório.

## Tecnologias Utilizadas
- Java 17
- Maven
- React (com Next.js)
- Bootstrap
- VSCode
- PostgreSQL
- GitHub

## Requisitos para Executar o Projeto

Requisitos para executar o nosso projeto em sua máquina:

### Frontend

1. **Node.js**: [site oficial do Node.js](https://nodejs.org/).

2. **npm ou Yarn**: [site oficial do Yarn](https://yarnpkg.com/).

### Backend

1. **Java 17**: [site oficial do Java](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

2. **Maven**: [site oficial do Maven](https://maven.apache.org/download.cgi).

3. **PostgreSQL**: [site oficial do PostgreSQL](https://www.postgresql.org/download/).


## Como Subir o Projeto localmente

1. Para rodar o frontend: 
    - navegue até o diretório `frontend/terratrocada` e execute os seguintes comandos:

    ```bash
    npm install
    ```
    ```bash
    npm run dev
    ```
    Isso iniciará o frontend localmente em: http://localhost:3000/

2. Para rodar o backend:
   - - navegue até o diretório `backend/appback` e execute os seguintes comandos:
   ```bash
    mvn clean install
    ```
    ```bash
    java -jar target/appback-0.0.1-SNAPSHOT.jar
    ```
    Isso iniciará o frontend localmente em: http://localhost:8080/