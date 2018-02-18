require('dotenv').config();

const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);


app.use(express.static('public'));

server.listen(process.env.PORT, () => {
	console.log(`Listening on  *:${process.env.PORT}`);
});