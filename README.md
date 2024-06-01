# My Project

## Описание

Это проект с клиентской частью на React и серверной частью на Express.

## Структура проекта

- `client/` - клиентская часть на React.
- `server/` - серверная часть на Express.

## Требования

- Node.js
- Docker и Docker Compose

## Установка и запуск

### Клиентская часть

1. Перейдите в папку `client`:

   ```sh
   cd client
2. Запустите команду:

   ```sh
   npm run start

### Серверная часть

1. Перейдите в папку `server`:

   ```sh
   cd server
2. Запустите команды:

   ```sh
   docker compose -f docker-compose build
   ```sh
   docker compose -f docker-compose up
