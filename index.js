var express=require("express");
var app=express();
app.set("view engine",'ejs');
app.set("views",__dirname+'/views');
app.use("/assets",express.static("assets"));
app.use("/uploads",express.static("uploads"));
app.use(require('body-parser').urlencoded({ extended: true }));
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })

app.get("/",function (req,res) {
//main page
    res.render("index");
})

app.post('/fil', upload.single('avatar'), function (req, res, next) {
   res.send("done")
})

//server
var port= process.env.PORT || 3322
app.listen(port,function () {
    console.log("listening at port : 3322");
})
