const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your account is alive!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!");
  });
}

module.exports = keepAlive;
const express = require('express');

const server = express();

server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('<link href="https://Musicium-2.ze3rosiixjieeee.repl.co/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>');

   res.end();

})

function keepAlive(){

   server.listen(3000, ()=>{console.log("Server is online!")});

}

module.exports = keepAlive;
