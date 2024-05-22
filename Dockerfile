# Use the official Node.js 22 image as a base image
FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Copy the database connection check script and prisma init script from the Docker directory
COPY Docker/check-db-connection.js Docker/prisma-init.js /usr/src/app/

# Build the NestJS application
RUN pnpm run build

# Set environment variables
ENV POSTGRES_DB=apiprime
ENV POSTGRES_USER=eduprime
ENV POSTGRES_PASSWORD=edu@2025
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5437
ENV POSTGRES_SCHEMA=public

ENV DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=${POSTGRES_SCHEMA}"

# Expose the port for the NestJS application
EXPOSE 3000

# Start script to check the database connection, initialize Prisma, and start the app
CMD ["sh", "-c", "node check-db-connection.js && pnpm run start:prod"]
