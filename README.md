# YT Watch Focus

git clone `https://github.com/Raviteja77/yt-watch-focus.git`

cd apps/web

run `npm i`

run `npm run dev`

- Local:         http://localhost:3000
- Network:       http://172.20.6.57:3000

cd services/api

run `npm i`

run `npm run start`

- Local:         http://localhost:5001
- Network:       http://172.20.6.57:5001

## Web

Created project using this command:`npx create-next-app@latest apps/web`

## Services
Created project using this command: `npx @nestjs/cli new services/api`

postgresql - 5432

npm run start
  ↓
Create DB if missing
  ↓
Run migrations (create tables if missing)
  ↓
Start NestJS

## Postgresql

create .env file

DATABASE_URL="postgresql://postgres:[password]@localhost:5432/ytfocus?schema=public"

running npm run start should create database if it doesn't exists and run migrations