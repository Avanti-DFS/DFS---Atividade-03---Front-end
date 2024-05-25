# Desenvolvimento de Front-end para uma plataforma de Gerenciamento de Eventos Culturais com Vite, React e Tailwind CSS
___

## Desafio Front-end | Bootcamp Desenvolvimento Full Stack | Instituto Atlântico Avanti

___

Desenvolvimento de Front-end para uma plataforma de Gerenciamento de Eventos Culturais, usando Vite, React e Tailwind CSS. O projeto envolve a criação de uma aplicação web que permite aos usuários visualizar, pesquisar e interagir com eventos culturais. Além disso, oferece funcionalidades de registro e login. 
<br>

**Equipe docente:**  
- **Professora:** Jheyele Raquel  
- **Facilitador**: Joeldo Olinda da Silva

___

## Documentação do front-end
A documentação fornece uma visão geral do front-end do projeto, incluindo sua estrutura, configuração do ambiente, principais componentes e scripts NPM. Para informações mais detalhadas sobre a implementação de cada componente ou funcionalidade, consulte o código-fonte fornecido.

***

### Requisitos do sistema

***

- Node.js (recomenda-se a versão 14.x ou superior).
- npm (Node Package Manager).
- Git.
- Clone e execute o repositório da API REST desenvolvida para esse projeto:
```
https://github.com/Avanti-DFS/DFS---Atividade-02---Back-end.git
```

***

### Guia de configuração do ambiente para uso do front-end da aplicação
___

#### Passo 01
Clone o repositório do projeto front-end:  
```
https://github.com/Avanti-DFS/DFS---Atividade-03---Front-end.git
```
<br>

#### Passo 02
Instale as dependências do projeto:  
```
npm install
```
<br>


#### Passo 03
Atualize o arquivo **`.env`** na raiz do projeto, configurando o parâmetro da variável de ambiente **`VITE_API_URL`**, que define a URL da API utilizada pelo front-end. Por padrão, está configurada como:
```
http://localhost:3002/
```

- É essencial notar que esta variável está configurada com o prefixo **'http://'** e não **'https://'**. Certificar-se de que a URL está utilizando o protocolo http correto é fundamental para garantir a comunicação adequada entre o front-end e a API REST.  
<br>

#### Passo 04
Execute o comando **`migrate dev`** fornecido pela ferramenta Prisma usando o **`npx`**:   
```
npx prisma migrate dev
```
Esse comando efetua as migrações do banco de dados, usando o Prisma.  
<br>

#### Passo 05
Execute o comando **`run dev`** usando o **`npm`**, para iniciar o servidor de desenvolvimento:
```
npm run dev
```
___

### Principais componentes da aplicação

___

#### Header
Componente que exibe o cabeçalho da página, contendo a logo e links de navegação.
<br>


#### Footer
Componente que exibe o rodapé da página, contendo informações sobre o projeto, links de redes sociais e direitos autorais.
<br>

#### Home
Página inicial da aplicação.
<br>

#### LoginForm
Página de login, onde os usuários podem inserir suas credenciais para acessar a aplicação.
<br>

#### RegisterForm
Página de registro, onde os usuários podem criar uma nova conta fornecendo seu nome, email, senha e indicando se são administradores.
<br>

#### EventCard
Componente que representa um cartão de evento, exibindo o nome e a data do evento.
<br>

#### EventList
Página que lista os eventos disponíveis, permitindo filtrar e pesquisar eventos. Os eventos são exibidos usando o componente EventCard.
<br>

#### EventModal
Componente que exibe um modal com detalhes adicionais sobre um evento selecionado.
<br>
