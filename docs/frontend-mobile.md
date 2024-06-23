# Front-end Móvel

O projeto Bibliotech é uma plataforma de gestão de biblioteca pessoal que visa ajudar os usuários a organizar, catalogar e acompanhar suas leituras de forma eficiente. Através de uma interface intuitiva e amigável, os usuários podem registrar os livros que estão lendo, os livros que já leram e os livros que desejam ler no futuro. A plataforma também permite a criação de coleções personalizadas para catalogar seus livros em vários gêneros. 

Os objetivos do projeto Bibliotech incluem:

* Simplificar a organização e o controle das bibliotecas pessoais dos usuários.
* Oferecer uma interface intuitiva e de fácil uso para promover uma interação fluida dos usuários com a plataforma.
* Permitir que os usuários registrem os livros que estão lendo, já lidos e futuras leituras de maneira prática e organizada.
* Possibilitar a criação de coleções pessoais personalizadas que atendam aos interesses e preferências individuais de cada usuário.

## Tecnologias Utilizadas
[Lista das tecnologias principais que serão utilizadas no projeto.]

## Arquitetura

Componentes React Native:

* Telas: Representam as diferentes interfaces do aplicativo, como tela de login, cadastro de livros, tela de coleções, etc.
* Componentes Reutilizados em várias partes do aplicativo: Componentes como botões, listas, formulários, barras de navegação, etc.

Serviços de API:

* Um serviço para realizar chamadas HTTP para o backend em Node.js, responsável pelas operações de CRUD (Create, Read, Update, Delete) relacionadas a usuários, livros, coleções e acervos pessoais. A interface do usuário irá rendezirar os componentes quando o mesmo fizer uma requisição utilizando um dos recursos do sistema, tendo os serviços de API chamados para atualizar os dados no backend e refletir a mudança dos dados na tela do usuário.


## Modelagem da Aplicação

Na presente aplicação temos como entidades principais:

- Usuário: Representa um usuário registrado na plataforma Bibliotech.
- Livro: Representa um livro dentro da biblioteca pessoal de um usuário.
- Acervo Pessoal: Representa uma coleção de livros organizada por um usuário.

![Diagrama de Modelagem](img/Bibliotech.jpg)

## Projeto da Interface
[Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual
[Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]

### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

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


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

| Caso de Teste ID   | Modulo   | Ação Específica do Teste  | Resultado Esperado | Resultado Atual |  
|-----------------|-----------------|-----------------|-----------------|-----------------|
| LOG-01  | User  | Acessar bibliotech mobile > Clicar em "Cadastrar novo usuário" > Preencher dados obrigatórios > Clicar em "Criar" | Realizar o cadastro de um novo usuário  | Pendente |
| LOG-02  | User  | Acessar ibliotech mobile > Preencher dados de usuário e senha > Clicar em "Entrar" | Realizar o login no site  | Pendente |
| LOG-03  | User  | Logado em ibliotech mobile > Clicar no botão "sair" do site  | Realizar o logout no site  | Pendente |
| LOG-04  | User  | Logado em ibliotech mobile > Clicar no ícone de engrenagem do site > Clicar na opção editar > Preencher dados obrigatórios > Clicar no botão "Salvar"  | Realizar a alteração de dados de usuário  | Pendente |
| LOG-05  | User  | Acessar ibliotech mobile de um dispositivo móvel > Preencher dados de usuário e senha > Clicar em "Entrar" | Realizar o login no site de um dispositvo móvel | Pendente |
| COLLECTION-01  | Collection  | Logado em ibliotech mobile > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Clicar em "Criar Novo Acervo" > Preencher dados obrigatórios > Clicar em "Cadastrar Novo Acervo"  | Realizar o cadastro de novo Acervo de Livros  | Pendente |
| COLLECTION-02  | Collection  | Logado em ibliotech mobile > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Selecionar um dos acervos criados  > Clicar no botão "Editar Dados" > Preencher dados obrigatórios > Clicar em "Salvar" para confirmação alteração  | Realizar a alteração de dados do Acervo Pessoal  | Pendente |
| COLLECTION-03 | Collection  | Logado em ibliotech mobile > Acessar modulos de "Acervo Pessoal" no menu esquerdo > Selecionar um dos Acervos Pessoais > Clicar em "Exportar Acervo Pessoal em arquivo cvs"  | Realizar a exportação de acervo selecionado  | Pendente |
| BOOK-01  | Book  | Logado em ibliotech mobile > Acessar o modulo de books no menu esquerdo > Clicar em "Adicionar novo livro" > Preencher dados obrigatórios > Clicar em "Cadastrar novo livro"  | Realizar o cadastro de novo livro  | Pendente |
| BOOK-02  | Book  | Logado em ibliotech mobile > Acessar o modulo de books no menu esquerdo > Selecionar um dos Livros > Clicar em editar livro > Selecionar campo de "status" do livro > Preencher dados obrigatórios > Clicar em "Salvar"  | Realizar a atualização de status dos livros ou editar suas informações  | Pendente |****

# Referências
https://nodejs.org/docs/latest/api/, https://reactnative.dev/docs/getting-started, https://developer.android.com/studio?hl=pt-br
