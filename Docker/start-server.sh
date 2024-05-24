#!/bin/sh
echo "Bem-vindo ao EduPrime Hub!"
echo "Aguardando a inicialização do banco de dados..."
sleep 20
echo "As APIs estão disponíveis na porta 3000."
node check-db-connection.js && pnpm run start:prod
