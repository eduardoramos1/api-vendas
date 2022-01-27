# api-vendas

Criar arquivo ormconfig.json

{
  "type": "sgdb",
  "host": "host",
  "port": "numero_da_porta",
  "username": "seu_usuario",
  "password": "senha",
  "database": "seu_banco",
  "migrations": ["./src/shared/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/**/typeorm/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}
