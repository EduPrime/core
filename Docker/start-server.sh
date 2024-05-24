#!/bin/sh
echo "Bem-vindo ao EduPrime Hub!"
echo "As APIs estão disponíveis na porta 3000."
node check-db-connection.js && pnpm run start:prod
