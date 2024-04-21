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

Na presente aplicação temos como entidades principais:
- Usuário: Representa um usuário registrado na plataforma Bibliotech.
- Livro: Representa um livro dentro da biblioteca pessoal de um usuário.
- Acervo Pessoal: Representa uma coleção de livros organizada por um usuário.

![Diagrama de Modelagem](img/Bibliotech.jpg)

## Fluxo de Dados

O fluxo de dados na aplicação Bibliotech é um processo que garante a comunicação eficiente entre os usuários e a API, manipulando as requisições HTTP de forma segura e eficaz. Este fluxo é essencial para garantir que os usuários possam interagir com a plataforma de maneira intuitiva e sem problemas, garantindo uma experiência positiva.

### Início do Fluxo:
O fluxo de dados inicia-se quando um usuário interno ou externo realiza uma requisição HTTP para a API da Bibliotech. Essa requisição pode ser feita para qualquer um dos endpoints disponíveis, dependendo da ação desejada pelo usuário, como autenticação, manipulação de usuários, livros ou coleções.

### Roteamento da Requisição:
Após a recepção da requisição HTTP, o controlador correspondente dentro da API é responsável por rotear a requisição para o serviço adequado com base no endpoint solicitado. O controlador interpreta os dados da requisição e determina qual serviço deve ser acionado para processar a solicitação.

### Processamento da Requisição:
Uma vez roteada para o serviço apropriado, a requisição é processada de acordo com a operação solicitada pelo usuário, faz uma consulta no banco de dados da AWS para recuperar informações, atualizações de dados existentes, criação de novos registros ou qualquer outra operação CRUD relevante para a entidade em questão.

### Interação com o Banco de Dados:
Durante o processamento da requisição, o serviço interege com o banco de dados criado na aws para recuperar ou modificar informações, de forma segura e otimizada para garantir a integridade dos dados.

### Geração da Resposta:
Após o processamento da requisição e qualquer interação necessária com o banco de dados, uma resposta é gerada pelo serviço. Esta resposta contém os dados solicitados pelo cliente ou uma confirmação do sucesso da operação, dependendo do tipo de requisição realizada.

### Envio da Resposta ao Cliente:
Finalmente, a resposta é enviada de volta ao usuário que fez a requisição original. A resposta contém os dados solicitados e/ou uma mensagem indicando o resultado da operação realizada. Isso completa o ciclo de comunicação entre o usuáirio e a API.

## Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir o cadastro de novo usuário no site| ALTA |
|RF-002| Processamento de login e logout no site | ALTA | 
|RF-003| Permitir o cadastro de um novo Acervo Pessoal  | ALTA |
|RF-004| Possibilitar que o usuário registre os livros que está lendo | ALTA |
|RF-005| Permitir a edição dos dados e status dos livros cadastrados | MÉDIA |
|RF-006| Permitir o usuário exportar sua coleção no acervo pessoal em arquivo csv | MÉDIA |
|RF-007| Permitir editar dados da conta de usuário | MÉDIA | 
|RF-008| Permitir o usuário editar os dados de um Acervo Pessoal| MÉDIA |
|RF-009| Permitir que o usuário acesse o sistema através de um dispositivo móvel | BAIXA |

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

### Estratégia de Teste
A estratégia de teste para a Bibliotech API incluirá testes unitários para garantir que cada unidade de código funcione conforme o esperado. Cada módulo da API será testado individualmente para garantir sua corretude e robustez. A abordagem de teste priorizará a cobertura dos requisitos funcionais e não funcionais, bem como a validação de entradas e saídas de dados.

### Ferramentas Utilizadas
- Jest: Framework de teste JavaScript para testes de unidade.
- Supertest: Biblioteca de suporte para testes de API RESTful.
- Mockingoose: Biblioteca para criação de mocks de banco de dados para testes.

### Tipos de Teste
- Testes Unitários: Para garantir que unidades individuais de código funcionem corretamente.
- Testes de Integração: Para verificar a interação correta entre os componentes da API.
 -Testes de Entrada e Saída de Dados: Para validar entradas e saídas de dados da API.

### Casos de Teste
1. Testes Unitários
  a. Autenticação (Authentication)
    Caso de Teste: Verificar se o token de acesso é gerado corretamente após a autenticação.
    Passos:
    Chamar o endpoint de autenticação com credenciais válidas.
    Verificar se o token de acesso é retornado.
    Resultado Esperado: O token de acesso é gerado com sucesso.
    Caso de Teste: Verificar se um erro é retornado quando as credenciais de autenticação são inválidas.
    Passos:
    Chamar o endpoint de autenticação com credenciais inválidas.
    Verificar se um erro é retornado.
    Resultado Esperado: Um erro é retornado indicando credenciais inválidas.
  b. Usuários (Users)
    Caso de Teste: Verificar se um novo usuário é criado corretamente.
    Passos:
    Chamar o endpoint de criação de usuário com dados válidos.
    Verificar se o usuário é criado no banco de dados.
    Resultado Esperado: O usuário é criado com sucesso.
    Caso de Teste: Verificar se um usuário é atualizado corretamente.
    Passos:
    Chamar o endpoint de atualização de usuário com dados válidos.
    Verificar se os dados do usuário são atualizados no banco de dados.
    Resultado Esperado: Os dados do usuário são atualizados com sucesso.
   c. Livros (Books)
    Caso de Teste: Verificar se um novo livro é registrado corretamente.
    Passos:
    Chamar o endpoint de criação de livro com dados válidos.
    Verificar se o livro é registrado no banco de dados.
    Resultado Esperado: O livro é registrado com sucesso.
    Caso de Teste: Verificar se um livro é atualizado corretamente.
    Passos:
    Chamar o endpoint de atualização de livro com dados válidos.
    Verificar se os dados do livro são atualizados no banco de dados.
    Resultado Esperado: Os dados do livro são atualizados com sucesso.
  d. Coleções (Collections)
    Caso de Teste: Verificar se uma nova coleção é criada corretamente.
    Passos:
    Chamar o endpoint de criação de coleção com dados válidos.
    Verificar se a coleção é criada no banco de dados.
    Resultado Esperado: A coleção é criada com sucesso.
    Caso de Teste: Verificar se uma coleção é atualizada corretamente.
    Passos:
    Chamar o endpoint de atualização de coleção com dados válidos.
    Verificar se os dados da coleção são atualizados no banco de dados.
    Resultado Esperado: Os dados da coleção são atualizados com sucesso.

2. Testes de Integração
  Caso de Teste: Verificar a integração entre o endpoint de autenticação e os endpoints protegidos por autenticação.
    Passos:
    Autenticar-se utilizando o endpoint de autenticação.
    Tentar acessar um endpoint protegido por autenticação utilizando o token gerado.
    Resultado Esperado: O acesso é permitido com sucesso.
  Caso de Teste: Verificar a integração entre os diferentes endpoints para garantir o fluxo correto de dados.
    Passos:
    Executar um fluxo completo de operações, como criar um usuário, adicionar livros ao acervo, etc.
    Verificar se os dados são consistentes em todos os endpoints relacionados.
    Resultado Esperado: O fluxo de dados ocorre conforme o esperado, sem inconsistências.

3. Testes de Carga
  Caso de Teste: Avaliar o desempenho da API sob carga significativa.
    Passos:
    Simular múltiplas requisições concorrentes para diferentes endpoints da API.
    Medir o tempo de resposta e a estabilidade do sistema sob carga.
    Resultado Esperado: A API mantém um tempo de resposta aceitável e não apresenta falhas sob carga.

4. Testes de Entrada e Saída de Dados
  Caso de Teste: Validar entradas de dados para evitar ataques de injeção de código.
    Passos:
    Enviar dados maliciosos para os endpoints da API.
    Verificar se as entradas de dados são devidamente validadas e tratadas.
    Resultado Esperado: A API rejeita entradas maliciosas e impede ataques de injeção de código.

| Caso de Teste ID   | Modulo   | Ação Específica do Teste  | Resultado Esperado | Resultado Atual |  
|-----------------|-----------------|-----------------|-----------------|-----------------|
| LOG-01  | User  | Acessar bibliotech.com > Clicar em "Cadastrar novo usuário" > Preencher dados obrigatórios > Clicar em "Criar" | Realizar o cadastro de um novo usuário  | Pendente |
| LOG-02  | User  | Acessar bibliotech.com > Preencher dados de usuário e senha > Clicar em "Entrar" | Realizar o login no site  | Pendente |
| LOG-03  | User  | Logado em bibliotech.com > Clicar no botão "sair" do site  | Realizar o logout no site  | Pendente |
| LOG-04  | User  | Logado em bibliotech.com > Clicar no ícone de engrenagem do site > Clicar na opção editar > Preencher dados obrigatórios > Clicar no botão "Salvar"  | Realizar a alteração de dados de usuário  | Pendente |
| LOG-05  | User  | Acessar bibliotech.com de um dispositivo móvel > Preencher dados de usuário e senha > Clicar em "Entrar" | Realizar o login no site de um dispositvo móvel | Pendente |
| COLLECTION-01  | Collection  | Logado em bibliotech.com > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Clicar em "Criar Novo Acervo" > Preencher dados obrigatórios > Clicar em "Cadastrar Novo Acervo"  | Realizar o cadastro de novo Acervo de Livros  | Pendente |
| COLLECTION-02  | Collection  | Logado em bibliotech.com > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Selecionar um dos acervos criados  > Clicar no botão "Editar Dados" > Preencher dados obrigatórios > Clicar em "Salvar" para confirmação alteração  | Realizar a alteração de dados do Acervo Pessoal  | Pendente |
| COLLECTION-03 | Collection  | Logado em bibliotech.com > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Selecionar um dos Acervos Pessoais > Clicar em "Exportar Acervo Pessoal em arquivo cvs"  | Realizar a exportação de acervo selecionado  | Pendente |
| BOOK-01  | Book  | Logado em bibliotech.com > Acessar o modulo de books no menu esquerdo > Clicar em "Adicionar novo livro" > Preencher dados obrigatórios > Clicar em "Cadastrar novo livro"  | Realizar o cadastro de novo livro  | Pendente |
| BOOK-02  | Book  | Logado em bibliotech.com > Acessar o modulo de books no menu esquerdo > Selecionar um dos Livros > Clicar em editar livro > Selecionar campo de "status" do livro > Preencher dados obrigatórios > Clicar em "Salvar"  | Realizar a atualização de status dos livros ou editar suas informações  | Pendente |

# Referências

https://nodejs.org/en
https://expressjs.com/pt-br/
https://aws.amazon.com/
https://swagger.io/specification/
https://developer.mozilla.org/en-US/docs/Web/HTTP
https://web.postman.co/home
https://jestjs.io/pt-BR/
