# :rocket: Day 2

<img src="image/nlw.jpg">

# :computer: Criando nossa API

## Recapitulando
### Para iniciar o servidor
```bash
$ npm run dev
# ou
$ yarn dev
```

# :tada: E vamos ao conteúdo aplicado do dia

## Principais Conceitos

- Rota: Endereço completo da requisição
- Recurso: Qual entidade estamos acessando do sistema
  
- Request Param: Parâmetros que vem na própria rota que identificam um recurso
- Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação...
- Request Body: Corpo da requisição
<br/>

## Metodos HTTP

- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação existente no backend
- DELETE: Remover uma informação do backend
<br/>

## Exemplo de rota de usuários
```
<method> <url>:<port>/<route>

POST http://localhost:3333:users // Criar um usuário
GET  http://localhost:3333/users // Listar usuários

GET  http://localhost:3333/users/5 // Buscar dados do usuário com ID 5
```

## Criando rotas
```javascript
app.<method>('/<rota>/:<params>', (request, response) => {
    // Your code here
})
```

## Principais métodos de Rotas
index, show, create, update, delete

### Exemplo de uso

```javascript
app.get('/users/:id', (request, response) => {
    // To get Request Params id do
    const id = request.params.id;
    // request.param.<nameParam>

    // or

    // query param
    const search = request.query.search;
})
```

```javascript
app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);
})
```

## App.use

Para que o *express* possa entender requisições em formato JSON, utilize:

```javascript
app.use(express.json());
```

## Ferramentas
- Insomnia
Para instalar o Insomnia [clique aqui](https://insomnia.rest/)
Utilizaremos esta ferramenta para testar e criar requisições para as rotas criadas.
<br/>

# Router

Para utilizar o router do express:
```javascript
const routes = express.Router();
```

# Exportar 

```javascript
export default <fileNameWithoutExtension>;
```

# Banco de dados

## Tabelas: 

### points
* image
* name
* email
* whatsapp
* latitude
* longitude
* city
* uf

### items
* image
* title

### points_items
* point_id
* item_id

Para esta edição do NLW utilizaremos **SQLite**

Para visualizar dados SQLite no VS Code, instale a extensão: SQLite
Em caso de problemas com a extensão você pode utilizar outras interfaces até mesmo dentro do próprio navegador

Para isso utilizaremos **KNEX.JS**

**Exemplo**
Sem KNEX:
```sql
SELECT * FROM users WHERE name = 'Ryan'
```

Para instalar e utilizar o SQLite3:
```bash
$ npm install sqlite3
```

**KNEX.JS**
```javascript
knex('users').where('name', 'Ryan').select('*')
```

Para instalar e utilizar o knex:
```bash
$ npm install knex
```

```javascript
import knex from 'knex';
```

## **Migrations**

> Migrations = Histórico do banco de dados

**Obs:** Importante numerar as migrations para ordenar a ordem de criação das tabelas, evitando erros.

Executando migrations:
```bash
npx knex migrate:latest --knexfile knexfile.ts migrate:latest
```

Um pouco grande não?

Lembre, voce pode criar atalhos no seu package.json
```json
{
  "scripts": {
    "knex:migration": "npx knex migrate:latest --knexfile knexfile.ts migrate:latest"
  }
}
```

Ir para: [Day 3](day3.md)