const express =require ('express')
const app =express()

const routes = require('./routes/route')




app.use(express.json())



app.use('/api', routes)



const port = 8000;

app.listen(port,()=>{
    console.log('server running on port:' + port );
})