# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]

## Objetivos da API

O primeiro passo é definir os objetivos da sua API. O que você espera alcançar com ela? Você quer que ela seja usada por clientes externos ou apenas por aplicações internas? Quais são os recursos que a API deve fornecer?

[Inclua os objetivos da sua api.]


## Arquitetura

[Descrição da arquitetura das APIs, incluindo os componentes e suas interações.]


## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]


## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]


## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]


## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]


## Tecnologias Utilizadas

- MySQL
- Framework Node Express.Js 
- ORM Prisma 
- Biblioteca Passport.Js
- Biblioteca json2xml
- API Google Books (ISBN Search)
  
## API Endpoints

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### AUTHENTICATION
- Método: POST
- URL: /auth
- Parâmetros:
  - username: 
  - password:

- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Usuário autenticado com sucesso.",
      "data": {
        token: $bearer_token
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

### USERS
- Método: POST
- URL: /users
- Parâmetros:
  - username: [descrição]
  - password:
  - email:
  - firstname
  - lastname
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Usuário criado com sucesso.",
      "data": {
        username: $username
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

- Método: PUT

  A FAZER 
  
- Método: DELETE

  A FAZER
    
### BOOKS
- Método: POST
- URL: /books
- Parâmetros:
  - title: string
  - authors: array
  - punlishedDate: date
  - description: string
  - edition: string
  - isbn: string
  - pageCount: integer
  - categories: array
  - read: picklist (Lido, Não Lido, Lendo, Abandonado)
  - collection: 
    
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Livro registrado com sucesso.",
      "data": {
        title: $title
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

- Método: GET

  A FAZER
    
- Método: PUT

  A FAZER 
  
- Método: DELETE

  A FAZER

### COLLECTIONS
- Método: POST
- URL: /collections
- Parâmetros:
  - title: string
  - description: string
    
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Coleção criada com sucesso.",
      "data": {
        title: $title
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

- Método: GET

  A FAZER - LISTAR COLLECTIONS
    
- Método: PUT

  A FAZER - EDITAR COLLECTIONS
  
- Método: DELETE

  A FAZER - REMOVER COLLECTIONS


  ### EXPORT
- Método: GET
- URL: /export
- Parâmetros:
  - username: string
    
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Coleção criada com sucesso.",
      "data": {
        media: appplication/csv file
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

### ISBN Search
- Método: GET
- URL: /isbn
- Parâmetros:
  - isbn: string

- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Dados do livro retornados com sucesso.",
      "data": {
      - title: string
      - authors: array
      - punlishedDate: date
      - description: string
      - edition: string
      - isbn: string
      - pageCount: integer
      - categories: array
      }
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    ```
  - Erro (500)
    ```
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
    ```

## Considerações de Segurança

- Todos os endpoints são protegidos por autenticação via token de acesso, com exceção da criação de usuário no /users (POST).
- Todos os endpoints fazem uso de HTTPS, para criptografar os dados em trânsito e proteger contra ataques de interceptação.
- Os endpoints estão sujeitos à taxa limite de uso para evitar ataques e garantir uma utilização justa dos recursos do servidor.
- Todas as entradas de dados recebidas pela API devem ser validadas para evitar ataques de injeção de código, como SQL injection e XSS (Cross-Site Scripting).
- A API está sujeito a versionamento, com atualizações e correções de segurança para mitigar vulnerabilidades conhecidas.
- As bibliotecas de terceiros utilizadas devem ser mantidas devidamente atualizadas para evitar vulnerabilidades conhecidas. 

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

https://expressjs.com/pt-br/
https://www.prisma.io/docs/orm
https://www.passportjs.org/docs/
https://swagger.io/specification/
https://developer.mozilla.org/en-US/docs/Web/HTTP
