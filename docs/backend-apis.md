# APIs e Web Services

O projeto Bibliotech é uma plataforma de gestão de biblioteca pessoal que visa ajudar os usuários a organizar, catalogar e acompanhar suas leituras de forma eficiente. Através de uma interface intuitiva e amigável, os usuários podem registrar os livros que estão lendo, os livros que já leram e os livros que desejam ler no futuro. A plataforma também permite a criação de acervos personalizados e fornece funcionalidades de backup de dados para garantir a segurança das informações dos usuários.

## Objetivos da API

*Permitir que aplicativos externos acessem e interajam com os dados do sistema Bibliotech de forma segura e eficiente.
* Fornecer operações CRUD (Create, Read, Update, Delete) para entidades principais, como usuários, livros e acervos pessoais.
* Facilitar a integração de novos recursos e funcionalidades na plataforma Bibliotech.
* Garantir a segurança dos dados dos usuários por meio de autenticação e autorização adequadas.


## Arquitetura

A arquitetura das APIs do Bibliotech segue um padrão RESTful, onde cada recurso é representado por um endpoint específico. Os componentes principais incluem:

* Controladores: Responsáveis por receber as requisições HTTP, processá-las e encaminhá-las para os serviços apropriados.
* Serviços: Lógica de negócios que manipula as operações CRUD e outras funcionalidades da aplicação.
* Modelo de Dados: Representação das entidades principais do sistema, como usuários, livros e acervos pessoais.
* Middleware de Segurança: Responsável por autenticar e autorizar os usuários antes de permitir o acesso aos endpoints da API.

## Modelagem da Aplicação

// A modelagem da aplicação inclui as seguintes entidades principais:
// Usuário: Representa um usuário registrado na plataforma Bibliotech.
// Livro: Representa um livro dentro da biblioteca pessoal de um usuário.
// Acervo Pessoal: Representa uma coleção de livros organizada por um usuário.
// Backup: Representa uma cópia de segurança dos dados da aplicação.

## Fluxo de Dados

// O fluxo de dados na aplicação começa com uma requisição HTTP feita por um cliente externo ou interno, que é roteada para o endpoint correspondente na API. O controlador então chama o serviço apropriado para processar a requisição, que pode envolver acesso ao banco de dados para recuperar ou modificar informações. Uma resposta é então enviada de volta ao cliente, contendo os dados solicitados ou confirmando o sucesso da operação.


## Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Processamento de login e logout no site | ALTA | 
|RF-002| Permitir o cadastro e edição de novo Acervo Pessoal  | ALTA |
|RF-003| Permitir o usuário catalogar os livros que já leu | ALTA |
|RF-004| Possibilitar que o usuário registre os livros que está atualmente lendo | ALTA |
|RF-007| Controle para backup de dados do sistema - Exportar Dados | ALTA |
|RF-010| Edição dos dados e status dos livros cadastrados | MÉDIA |
|RF-011| Editar dados da conta de usuário | MÉDIA | 
|RF-012| Permitir o usuário realizar o cadastro de mais de um Acervo Pessoal | MÉDIA |
|RF-013| Permitir que o usuário acesse o sistema através de um dispositivo móvel | BAIXA |

## Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A interface deve ser intuitiva e fácil de usar, adequada para usuários com pouca familiaridade com tecnologia | ALTA | 
|RNF-002| Garantir a segurança dos dados pessoais e de leitura dos usuários | ALTA |
|RNF-003| O sistema deve ser responsivo para rodar em um dispositivos móvel | BAIXA |

## Tecnologias Utilizadas

- MySQL
- Framework Node Express.Js 
- ORM Prisma 
- Biblioteca Passport.Js
- Biblioteca json2xml
- API Google Books (ISBN Search)
  
## API Endpoints

### AUTHENTICATION
- Método: POST
- URL: /auth
- Parâmetros:
  - username: 
  - password:

- Resposta:
  - Sucesso (200 OK)
    {
      "message": "Usuário autenticado com sucesso.",
      "data": {
        token: $bearer_token
      }
    }
  - Erro (400)
  {
  "message": "Requisição inválida. Verifique os parâmetros enviados.",
  "error": 
{
    "type": "InvalidParameter",
    "description": "O parâmetro 'username' é obrigatório e não pode estar vazio."
  },
{
    "type": "InvalidParameter",
    "description": "O parâmetro 'passwords' esta errado."
  }
}
  - Erro (500)
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    "type": "InternalError",
    "description": "Ocorreu um erro ao processar a solicitação de autenticação. Por favor, entre em contato com o suporte técnico."
  }
}

### USERS

- Método: GET
- URL: /users
- Parâmetros:
  - username:
  - password:
  - email:
  - firstname
  - lastname
 - Resposta:
  - Sucesso (200 OK)
    {
     "message": "Lista de usuários recuperada com sucesso.",
  "data": 
    {
      "username": "username1",
      "email": "email1@example.com",
      "firstname": "John",
      "lastname": "Doe"
    }
}
    }
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

- Método: POST
- URL: /users
- Parâmetros:
  - username:
  - password:
  - email:
  - firstname
  - lastname
- Resposta:
  - Sucesso (200 OK)
    {
      "message": "Usuário criado com sucesso.",
      "data": {
        username: $username
      }
    }
  - Erro (400)
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
      }
    }
    ```
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

- Método: PUT
- URL: /users
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
   {
  "message": "Usuário atualizado com sucesso.",
  "data": {
  "username": "NovoUsername",
  "password": "NovaSenha",
  "email": "novoemail@example.com",
  "firstname": "NovoNome",
  "lastname": "NovoSobrenome"
}

Erro 400
{
  "message": "Requisição inválida. Verifique os parâmetros enviados.",
  "error": {
    ...
  }
}


Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}

- Método: DELETE
- URL: /users
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
    {
  "message": "Usuário excluído com sucesso."
}


Erro 404
{
  "message": "Usuário não encontrado.",
  "error": {
    ...
  }
}

Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}

### BOOKS

- Método: GET
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
     - Sucesso (200 OK)
    {
     "message": "Lista de livros recuperada com sucesso.",
  "data": 
    {
      "title": "The Name of The Wind",
      "authors": "Patrick Rothfuss",
      "publishedDate": "09-04-2009",
      "description": "O nome do vento acompanha a trajetória de Kote e as duas forças que movem sua vida...",
      "edition": "1° Edição",
      "isbn": "8599296493",
      "pageCount": "656",
      "categories": "Fantasia",
      "read": "Lendo",
      "collection": "Coleção1",
    }
}
    }
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

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
   
    {
      "message": "Livro registrado com sucesso.",
      "data": {
        title: $title
      }
    }
 
  - Erro (400)
  
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
    
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

- Método: PUT
- URL: /books
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
  {
  "message": "Livro atualizado com sucesso.",
  "data": {
    "title": "Novo Título",
    "authors": ["Novo Autor"],
    "publishedDate": "03-04-2024",
    "description": "Nova descrição do livro",
    "edition": "Nova Edição",
    "isbn": "9780123456789",
    "pageCount": 500,
    "categories": ["Nova Categoria"],
    "read": "Lendo",
    "collection": "Nova Coleção"
 }
}

Erro 400
{
  "message": "Livro não encontrado.",
  "error": {
    ...
  }
}

Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}
  
- Método: DELETE
- URL: /books
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
    {
  "message": "Livro excluído com sucesso."
}


Erro 404
{
  "message": "Livro não encontrado.",
  "error": {
    ...
  }
}

Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}

### COLLECTIONS

- Método: GET
- URL: /collections
- Parâmetros:
  - title: string
  - description: string
    
- Resposta:
  - Sucesso (200 OK)
     - Sucesso (200 OK)
    {
     "message": "Lista de Coleção recuperada com sucesso.",
  "data": 
    {
  "title": "Coleção 1",
  "description": "Coleção para livros de romance",
    }
}
    }
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

- Método: POST
- URL: /collections
- Parâmetros:
  - title: string
  - description: string
    
- Resposta:
  - Sucesso (200 OK)
    {
      "message": "Coleção criada com sucesso.",
      "data": {
        title: $title
      }
    }
  - Erro (400)
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
  - Erro (500)
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

    
- Método: PUT
- URL: /collections
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
  {
  "message": "Coleção atualizada com sucesso.",
  "data": {
    "title": "Novo Título",
    "description": "Nova Descrição",
 }
}

Erro 400
{
  "message": "Coleção não encontrado.",
  "error": {
    ...
  }
}

Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}
  
- Método: DELETE
- URL: /collections
- Parâmetros:
  id  
 - Resposta:
  - Sucesso (200 OK)
    {
  "message": "Coleção excluída com sucesso."
}


Erro 404
{
  "message": "Coleção não encontrado.",
  "error": {
    ...
  }
}

Erro 500
{
  "message": "Erro interno do servidor. Tente novamente mais tarde.",
  "error": {
    ...
  }
}


  ### EXPORT
- Método: GET
- URL: /export
- Parâmetros:
  - username: string
    
- Resposta:
  - Sucesso (200 OK)
   
    {
      "message": "Coleção criada com sucesso.",
      "data": {
        media: appplication/csv file
      }
    }
   
  - Erro (400)
   
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }
   
  - Erro (500)
   
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }
  

### ISBN Search
- Método: GET
- URL: /isbn
- Parâmetros:
  - isbn: string

- Resposta:
  - Sucesso (200 OK)
  
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
  
  - Erro (400)
    
    {
      "message": "Requisição inválida. Verifique os parâmetros enviados.",
      "error": {
        ...
      }
    }

  - Erro (500)
   
    {
      "message": "Erro interno do servidor. Tente novamente mais tarde.",
      "error": {
        ...
      }
    }

## Considerações de Segurança

- Todos os endpoints são protegidos por autenticação via token de acesso, com exceção da criação de usuário no /users (POST).
- Todos os endpoints fazem uso de HTTPS, para criptografar os dados em trânsito e proteger contra ataques de interceptação.
- Os endpoints estão sujeitos à taxa limite de uso para evitar ataques e garantir uma utilização justa dos recursos do servidor.
- Todas as entradas de dados recebidas pela API devem ser validadas para evitar ataques de injeção de código, como SQL injection e XSS (Cross-Site Scripting).
- A API está sujeito a versionamento, com atualizações e correções de segurança para mitigar vulnerabilidades conhecidas.
- As bibliotecas de terceiros utilizadas devem ser mantidas devidamente atualizadas para evitar vulnerabilidades conhecidas. 

## Implantação

1. Requisitos de hardware e software necessários:

- Hardware: Um servidor com pelo menos 4 núcleos de CPU e 8 GB de RAM é recomendado para lidar com a carga esperada da aplicação Bibliotech.
- Software: Sistema operacional linux e windows, com as ferramentas de desenvolvimento necessárias instaladas, como VSCode, Node.js, MySQL.

2. Escolha da plataforma de hospedagem:
- AWS

3.Configuração do ambiente de implantação:

- Dependências necessárias no servidor:Node.js, MySQL.
- Variáveis de ambiente necessárias: credenciais do banco de dados, chaves de API.

4.Deploy da aplicação:

5.Testes no ambiente de produção

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
