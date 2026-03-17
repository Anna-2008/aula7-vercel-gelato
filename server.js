// =============================================================
// server.js — Servidor Principal da API da Gelateria Artesanal
// =============================================================
// Aula 6: API Middleware and Error Handling
//
// O que aprendemos nesta aula?
//   1. O que são Middlewares e para que servem
//   2. Criar um Middleware de Log (logger.js)
//   3. Criar um Middleware de Tratamento de Erros (errorHandler.js)
//   4. Tratar rotas não encontradas (Erro 404)
//   5. A ORDEM dos middlewares importa muito!
//
// Fluxo de uma Requisição (com Middlewares):
//
//  App Mobile da Gelateria
//     │
//     ▼
//  [cors()]              ← Middleware 1: Libera acesso de outras origens
//     │
//     ▼
//  [express.json()]      ← Middleware 2: Transforma o body em JSON
//     │
//     ▼
//  [logger]              ← Middleware 3: Anota a requisição no terminal
//     │
//     ▼
//  Rota correta          ← A requisição chega na rota certa
//  (ex: GET /api/gelatos)
//     │
//     ▼ (se der erro)
//  [errorHandler]        ← Captura qualquer erro das rotas
//     │
//     ▼
//  Resposta enviada ao App Mobile
//
// =============================================================


// ─── 1. Importações das Dependências ─────────────────────────
const express = require('express');
const cors = require('cors');


// ─── 2. Importação dos Middlewares Customizados ───────────────

// Logger: registra no terminal toda requisição que chega
const logger = require('./middlewares/logger');

// ErrorHandler: captura qualquer erro não tratado nas rotas
const errorHandler = require('./middlewares/errorHandler');


// ─── 3. Criação da Aplicação Express ─────────────────────────
const app = express();


// ─── 4. Middlewares Globais do Express ────────────────────────

// Habilita CORS para que o aplicativo da gelateria
// consiga acessar nossa API sem bloqueio do navegador
app.use(cors());

// Permite receber dados JSON (ex: cadastro de sabores)
app.use(express.json());


// =============================================================
// Middleware de Log
// Registra todas as requisições que chegam na API da gelateria
// =============================================================
app.use(logger);


// ─── 5. Rota de Boas-Vindas ───────────────────────────────────
// Rota raiz para verificar se o servidor está funcionando
// Acesse: http://localhost:3000
app.get('/', (req, res) => {
    res.json({ mensagem: '🍨 Bem-vindo à API da Gelateria Artesanal!' });
});


// ─── 6. Importação e Registro das Rotas ───────────────────────
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');

// Categorias de gelato (ex: chocolate, frutas, especiais)
app.use('/api/categorias', rotasCategorias);

// Sabores de gelato
app.use('/api/produtos', rotasProdutos);


// =============================================================
// Tratamento de Rota não encontrada (404)
// =============================================================
app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `❌ O sabor ou recurso '${req.url}' não foi encontrado na API da Gelateria.`
    });
});


// =============================================================
// Middleware Global de Erros
// =============================================================
app.use(errorHandler);


// ─── 7. Iniciando o Servidor ──────────────────────────────────
const PORTA = process.env.PORT||3000;

// app.listen() inicia o servidor na porta definida.
// O callback (função passada como parâmetro) é executado
// assim que o servidor está pronto para receber requisições.
app.listen(PORTA, () => {
    console.log('');
    console.log('🍨 ================================');
    console.log(`🍨 Servidor rodando!`);
    console.log(`🍨 Porta local: ${PORTA}`);
    console.log('🍨 ================================');
    console.log('');
    console.log('📋 Rotas disponíveis:');
    console.log(`   GET    /api/categorias`);
    console.log(`   POST   /api/categorias`);
    console.log(`   GET    /api/produtos`);
    console.log(`   GET    /api/produtos/:id`);
    console.log(`   POST   /api/produtos`);
    console.log(`   PUT    /api/produtos/:id`);
    console.log(`   DELETE /api/produtos/:id`);
    console.log('');
    console.log('💣 Rota de teste de erro:');
    console.log(`   GET    /api/produtos/erro-teste`);
    console.log('');
});
module.exports = app;
