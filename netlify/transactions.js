const jsonServer = require('json-server');
const path = require('path');

const handler = (event, context) => {
    const server = jsonServer.create();
    const router = jsonServer.router(path.join(__dirname, 'db.json'));
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);

    // Configura la respuesta para funciones serverless
    return new Promise((resolve) => {
        const response = {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'JSON Server is running' }),
        };
        resolve(response);
    });
};

module.exports = { handler };