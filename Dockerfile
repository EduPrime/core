# Use the official Node.js 22 image as a base image
FROM node:22-alpine

# Defina uma variável de ambiente para o ambiente de produção
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Instale pnpm e nestjs/cli globalmente
RUN npm install -g pnpm @nestjs/cli

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração de pacotes
COPY package.json pnpm-lock.yaml ./

# Instale as dependências do projeto usando pnpm
RUN pnpm install
RUN pnpm install --prod

# Copie o restante do código da aplicação
COPY . .

# Construa o projeto NestJS
RUN pnpm run build

# Exponha a porta na qual a aplicação irá rodar
EXPOSE 3000

# Defina as variáveis de ambiente
ENV POSTGRES_DB=apiprime
ENV POSTGRES_USER=eduprime
ENV POSTGRES_PASSWORD=edu@2025
ENV POSTGRES_HOST=eduprime-db
ENV POSTGRES_PORT=5432
ENV POSTGRES_SCHEMA=public

ENV DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=${POSTGRES_SCHEMA}"

# Copie o script de verificação de conexão com o banco de dados
COPY Docker/check-db-connection.js ./check-db-connection.js

# Defina o comando padrão para iniciar a aplicação
CMD ["sh", "-c", "node check-db-connection.js && pnpm run start:prod"]
