const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./config/db');

app.use(cors())

const adminrouter = require('./router/adminRouter');
const userrouter = require('./router/userRouter');



const PORT = 5000;


db(()=>{
    try {
        console.log("DataBase Successfully Connected");        
    } catch (error) {
        console.log("Database Not Connected : ", error);        
    }
});

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

app.use(express.json({limit: '50mb'}));
app.use('/user',userrouter);
app.use('/admin',adminrouter);


app.listen(PORT,()=> console.log("server Started @ 5000 "));