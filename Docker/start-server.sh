#!/bin/sh

echo "Bem-vindo ao EduPrime Hub!"
echo "Aguardando a inicialização do banco de dados..."

# Verifica se o banco de dados está acessível antes de prosseguir
node check-db-connection.js

# Aplica as migrações do Prisma
node prisma-init.js

echo "As APIs estão disponíveis na porta 3000."

# Inicia o servidor
npm run start:prod
