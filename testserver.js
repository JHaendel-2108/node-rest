"use strict";

import http from 'http';
import { url } from 'inspector';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Server antwortet!');
});

server.listen(3002, 'localhost', () => {
  console.log(`✅ TEST-SERVER LÄUFT AUF ${url}`);
  });
