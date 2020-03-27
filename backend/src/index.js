const express = require('express'); /* Importar todas as funcionalidades framework para uma variável */
const  cors = require('cors'); /** Importar o módulo de segurança CORS */
const routes = require('./routes'); /* Para indicar que é um arquivo e não um pacote utiliza-se o "./" antes do nome, indicando que está no mesmo diretório. */

const app = express(); /* Variável que armazena a aplicação */

app.use(cors());
app.use(express.json()); /* Entender que os parâmetros serão passados por JSON */
app.use(routes); /* Importante que esteja abaixo do express.json */

/**
 * Rota / Recurso
 * Rota que é o endereço da aplicação: http://localhost:3333
 * E o Recurso é o caminho depois da barra "/": /users (por exemplo)
 */


/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Ex.: 
 *
  app.get('/users', (request, response) => {
  const params = request.query;

  console.log(params);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Leandro F. Takahashi'
  }
  );
})

 * Route Params: Parâmetros utilizados para identificar recursos.
 * Ex.:
 *
  app.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Leandro F. Takahashi'
  }
  );
})
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */


 /**
  * Utilizaremos o SQLite
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() 
  */

app.listen(3333); /* Aplicação vai 'ouvir' a porta 3333 - Porta por onde a aplicação será acessada */

