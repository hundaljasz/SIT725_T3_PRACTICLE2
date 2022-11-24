const { urlencoded } = require("express")
var express = require("express")

var app = express()
app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const calculator= (type, n1, n2) => {
    var num1 = Number(n1)
    var num2 = Number(n2)
    var result = null;
    console.log(type, num1, num2);
    if (type == "add" || type == "ADD") {
        result = num1 + num2;
    } else if (type == "sub" || type == "SUB") {
        result = num1 - num2;
    } else if (type == "mul" || type == "MUL") {
        result = num1 * num2;
    } else if (type == "div" || type == "DIV") {
        result = num1 / num2;
    } else {
        result = "Please select a type of operation you want perform."
    }
    return result;
}

app.get("/calculator",(req,res) => {
    var n1 = req.query.n1;
    var n2 = req.query.n2;
    var type = req.query.type;
    var result = calculator(type, n1, n2) 
    res.json({statusCode: 200, data: result, message: "success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
})