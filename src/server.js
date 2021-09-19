const express = require('express');
const next = require('next');
const { path, serveFragment } = require('react-esi/lib/server');

const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
    const server = express();
    server.disable('x-powered-by');

    server.get(path, (req, res) =>
        serveFragment(req, res, (fragmentID) => require(`./components/${fragmentID}`).default),
    );

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
