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
app.post("/insert",(req,res)=>{
  const {nombre}=req.body
  if(!nombre){
    res.status(404).json({message:"todos los campos deben estar llenos"})
  }
  const queryInsertar="INSERT INTO usuarios (nombre) VALUES (?)"
  conextion.query(queryInsertar,nombre,(err,result)=>{
    if(err){
      console.log("hubo un error en la insercion",err.message)
      res.status(500).json({message:"error 500 no se la conexion"})
    }else{
      console.log("datos insertados correctamentes",{id:result.insertId,nombre});
      res.status(201).json({
       message:"datos ingresados",
       regustri:{id:result.insertId,nombre}
      })
    }
  })
})
const port=3006
app.listen(port,()=>{
  console.log(`ingrese al siguiente link http://localhost:${port}`)
})
