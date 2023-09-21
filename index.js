var http = require('http');
var dt = require('./myfirstmodule');
var dt1 = require('./mysecondmodule');
var dt2 =require('./login.js');
var dt3cadastro=require('./cadastro.js');
var dt4cadastromedico=require('./cadastromedico');
var dt5cadastrocliente=require('./cadastrocliente');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Cadrastro " + dt.myDateTime() + "<br>"+ "cadastro" + dt1.myDateTime1());
  res.write('<br>login..'+dt2.myDateTime());
  res.write('<br>cadastro..'+dt3cadastro.myDateTime());
  res.write('<br>cadastromedico..'+dt4cadastromedico.myDateTime());
  res.write('<br>cadastrocliente..'+dt5cadastrocliente.myDateTime());
res.end();
}).listen(5014);

console.log("servidor rodando na porta 5014");
