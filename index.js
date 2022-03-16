const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>
res.sendFile(__dirname + '/index.html')
)

app.get('/scripts/:file',(req,res)=>
res.sendFile(__dirname + '/scripts/'+ req.params.file)
)

app.get('/styles/:file',(req,res)=>
res.sendFile(__dirname + '/styles/'+ req.params.file)
)

app.listen(port,()=>
console.log('server on port' + port)
)