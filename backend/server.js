const conextion=require("./db")
const express=require("express")
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  conextion.query("SELECT * FROM usuarios",(err,resultado)=>{
    if(err){
     res.status(500).json({message:"huno un erro 500"})
    }else{
      res.json(resultado)
    }
  })

})
const port=3006
app.listen(port,()=>{
  console.log(`ingrese al siguiente link http://localhost:${port}`)
})
