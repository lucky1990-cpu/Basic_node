console.log('Basic Node concept');

const express = require('express');
const app = express();
const path = require('path')
const EventEmitter = require('events')
const URLpath = require('./Utill/callBack')



app.use(express.static(path.join(__dirname,'public')));
// app.get('/',(req,res)=>{
//     res.send('<h1>first Node page</h1>')
// })

// app.get('/home',(req,res)=>{
//     res.send('Home page details')
// })

let student = [
    {id:1,name:'lucky',address:'patna'},
    {id:2,name:'Nitish',address:'Mumbai'},
    {id:3,name:'Nafis',address:'Siwan'}

]

app.get('/StudentDetails',(req,res)=>{
 res.json(student)
})

app.get('/StudentDetails/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(student)
    let S_deatils = student.filter((e)=>{
       return e.id == req.params.id;
    })

    res.json(S_deatils)
    console.log(S_deatils)


})


console.log('*************Event Emitter ****************')
var ee = new EventEmitter()
ee.on('message', function (text) {
    console.log(text)
  })
  ee.emit('message', 'hello world')


  app.get('/urlSearch',(req,res)=>{
      const url = 'https://www.google.com/';
    URLpath.returnFunction(url,(result)=>{

        res.send(result);
        console.log(result)

    })

  })








const port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
console.log(res);
console.info('Listening on http://localhost:' + port);
})

