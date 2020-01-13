const proxy = require('http-proxy-middleware');
const express = require('express');

module.exports = (server) => {
      server.use(proxy('/', {target: 'http://localhost:3000'}))
}