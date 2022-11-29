process.EventEmitter = require('events').EventEmitter;
var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
const port= process.env.PORT || 3000
zetta()
  .name('FirstName-LastName')
  .use(LED)
  .expose('*')
  //.link('https://herokutest-production-c5d3.up.railway.app/')
  .listen(port, function(){
     console.log('Zetta is running at ${port}');
});
