const express=require("express")
const UserRoutes=require('./Routes/UserRoutes')
const eventRoutes=require('./Routes/eventRoutes')
const AdminRoutes=require('./Routes/AdminRoutes')
const TeamRoutes=require('./Routes/TeamRoutes')
var fetchuser=require('./Middleware/fetchUser')
var checkAdmin=require('./Middleware/checkAdmin')
const team=require('./Models/TeamModel')
const app=express()
const cors = require('cors');
const dotenv=require('dotenv').config();
const multer  = require('multer')
const port=5000;
var checkRegister=require("./Middleware/checkRegister")
///////////
var checkMember=require("./Middleware/checkMember")

const path=require("path");
// var storage=multer.diskStorage(
    
//     {
        
//     destination:function(req,file,cb){
//         console.log(req);
//         cb(null,'images')
        
//     },
//     filename:function(req,file,cb){
//         console.log(req);
//         cb(null, Date.now()+path.extname(file.originalname))
        
//     }
// })
// var upload = multer({ storage: storage })
/////////////////////////
app.use(express.json());
app.use(cors());

app.use('/api/users',UserRoutes)
app.use('/api/event',fetchuser,eventRoutes)
app.use('/api/admin',fetchuser,checkAdmin,AdminRoutes)
app.use('/api/team',fetchuser,checkRegister,TeamRoutes)
app.use('/api/member',fetchuser,checkMember,TeamRoutes)


/////////////////////////DEPLOYMENT//////////////////////////////
__dirname=path.resolve();
if(process.env.NODE_ENV==='production'){
        app.use(express.static(path.join(__dirname,'../build')))
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'build','index.html'))
        });
}
else{
    app.get('/',(req,res)=>{
        res.send("api is working dude.....")
    })
}
// app.post("/upload",(req,res)=>{
//     console.log(req);
//     res.send("Image Uploaded");
// })
app.listen(port,()=>{
    console.log("Server Running on port 5000")
})
