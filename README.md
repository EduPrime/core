# Eduprime.hub Project

Este é o README para o projeto eduprime.hub, que utiliza a extensão vscode-restclient para Visual Studio Code.

## Sobre a extensão vscode-restclient

A extensão [vscode-restclient](https://github.com/Huachao/vscode-restclient) é uma ferramenta poderosa para testar e depurar APIs diretamente no VSCode. Ela permite enviar requisições HTTP personalizadas e visualizar as respostas de forma fácil e intuitiva. Com recursos como autenticação, cabeçalhos personalizados e suporte para múltiplas requisições, essa extensão é essencial para desenvolvedores que trabalham com APIs.

## Tecnologias utilizadas

O projeto eduprime.hub utiliza as seguintes tecnologias:

- [NestJS](https://nestjs.com/): um framework para construir aplicações server-side com Node.js. Ele fornece uma arquitetura modular e escalável, facilitando o desenvolvimento de APIs robustas.

- [Prisma](https://www.prisma.io/): um ORM (Object-Relational Mapping) moderno e poderoso para Node.js. Ele simplifica a interação com o banco de dados, permitindo que os desenvolvedores escrevam queries em TypeScript.

- [Fastify](https://www.fastify.io/): um framework web rápido e eficiente para Node.js. Ele é conhecido por sua velocidade e baixo consumo de recursos, tornando-se uma ótima escolha para construir APIs de alto desempenho.

## Gerador de CRUD

Utilizamos o gerador de CRUD do [nestjs-prisma-crud](https://kepelrs.github.io/nestjs-prisma-crud/quickstart) para agilizar o desenvolvimento de operações básicas no banco de dados. Este gerador permite criar rapidamente endpoints para operações CRUD (Create, Read, Update, Delete) com base nos modelos do Prisma.

## Como executar o projeto

Siga os passos abaixo para executar o projeto eduprime.hub:

1. Clone este repositório para o seu ambiente local.

2. Instale as dependências do projeto executando o comando:

   ```bash
   pnpm install
   ```

3. Configure suas variáveis de ambiente no arquivo `.env` com a URL de conexão ao seu banco de dados PostgreSQL. Um exemplo de configuração de URL de conexão pode ser:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/eduprime"
   ```

4. Gere o cliente Prisma e aplique as migrações ao banco de dados executando os seguintes comandos:

   ```bash
   pnpm prisma generate
   pnpm prisma migrate dev
   ```

5. Popule o banco de dados com dados iniciais executando o comando:

   ```bash
   pnpm run seed
   ```

6. Inicie o servidor executando o comando:

   ```bash
   pnpm run start
   ```

7. Abra o VSCode e instale a extensão vscode-restclient.

8. Abra o arquivo `requests.http` na pasta `src` para visualizar e executar as requisições de exemplo.

## Como popular o banco de dados

Para popular o banco de dados com dados iniciais, siga os passos abaixo:

1. **Resetar o banco de dados** (este comando apagará todos os dados existentes e aplicará as migrações):

   ```bash
   pnpm prisma migrate reset
   ```

2. **Rodar o script de seed** para adicionar dados iniciais ao banco de dados:

   ```bash
   pnpm run seed
   ```

O comando `pnpm prisma migrate reset` limpará o banco de dados, aplicará novamente todas as migrações e executará o script de seed configurado, populando o banco de dados com os dados iniciais.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
