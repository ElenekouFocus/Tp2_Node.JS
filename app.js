/* TP N°2 de Node.JS)*/

import { createServer } from 'http';

const server = createServer((req, res) => {
    res.end('Le serveur a bien demarrer  !');
});

server.listen(process.env.PORT || 3000);