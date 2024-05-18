# Projeto Integrador Grupo 35

## Integrantes
- Beatriz Ferro de Carvalho Benvenuto - Bbenvennuto 
- Bianca de Oliveira Santos - biaaoliveira
- Isabella Moussa Macedo - isabellammacedo
- Nei Guilherme Silva - gsilvaro11
- Raimundo Marcio Nunes Costa - tuxbr/ tuxgrupomx
- Renato Ramalho Lima

## Projeto Revisado
[PDF da Segunda Entrega](adicionar o link do que ainda vai ser entregue na segunda entrega)

## Vídeo de Demonstração
[Assista ao Vídeo no YouTube](https://www.youtube.com/watch?v=HL1YoPHdF1M)

## Descrição
O frontend foi desenvolvido utilizando HTML, CSS, React (com Next.js) e Bootstrap, localizado na pasta `frontend/terratrocada` deste repositório. 
O backend foi desenvolvido utilizando Java 8 + Spring Boot + JPA Hibernate + RESTful, localizado na pasta `backend/appback` deste repositório.
O sistema gerenciador de banco de dados utilizado foi o H2 DATABASE (SQL).

## Tecnologias Utilizadas
- Java 17
- Maven
- React (com Next.js)
- Bootstrap
- VSCode
- H2 DATABASE (SQL)
- GitHub

## Requisitos para Executar o Projeto

Requisitos para executar o nosso projeto em sua máquina:

### Frontend

1. **Node.js**

2. **npm ou Yarn**

### Backend

1. **Java 17**

2. **Maven**

3. **H2 DATABASE (SQL)**


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