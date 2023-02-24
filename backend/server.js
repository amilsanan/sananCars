const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./config/db');
const bodyParser = require("body-parser");
const fileupload =require( "express-fileupload" );


// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

const adminrouter = require('./router/adminRouter');
const userrouter = require('./router/userRouter');

//////////////////////////////////
app.use(
    fileupload({
        createParentPath: true,
    }),
);

// app.post("/upload-file", );
/////////////////////////////////////

const PORT = 5000;


db(()=>{
    try {
        console.log("DataBase Successfully Connected");        
    } catch (error) {
        console.log("Database Not Connected : ", error);    
    }
});



app.use(express.json());
app.use('/',userrouter);
app.use('/admin',adminrouter);


app.listen(PORT,()=> console.log("server Started @ 5000 "));

