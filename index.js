const express =require ('express')
const app =express()

const routes = require('./routes/route')
const cors = require('cors');




app.use(express.json())



app.use('/api', routes)
app.use(cors({
    origin: '*'
}));



const port = 8000;

app.listen(port,()=>{
    console.log('server running on port:' + port );
})