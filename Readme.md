## Solução

Api de teste para connectar com bd postgres num docker usando sequelize

## Requisitos

- sequelize-cli

```
  npm i -g sequelize-cli
```

## Como executar

```
  npm install && docker-compose up -d && npm run dev

```

## Criando Migration

```
  sequelize-cli migration:generate --name=createTableUser

```
