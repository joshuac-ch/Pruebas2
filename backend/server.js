const conextion=require("./db")
const express=require("express")
const cors=require('cors')
const conectar = require("./db")

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
app.put("/update/use/:id/:nombre",(req,res)=>{
  const {id}=req.params
  const {nombre}=req.params
  const query2update=`
                      UPDATE usuarios
                      SET nombre = ?
                      WHERE id = ?
    `
    if(!nombre){
      res.status(404).json({message:"todos los campos deben estar llenos"})
    }
    conextion.query(query2update,[nombre,id],(err,result)=>{
      if(err){
        res.status(500).json({message:err.message})
      }else{
        if(result.affectedRows>0){
          res.status(201).json({message:"datos actualizados"})
        }else{
          res.status(404).json({message:"no se encontro ese ID"})
        }
    }
    })
})












app.put("/usuarios/update/:id",(req,res)=>{
  const {id}=req.params
  const {nombre}=req.body
    if(!nombre){
    return res.status(400).json({message:"hubo un error en la insercion de datos"})
  }
  const queryUpdate=` UPDATE usuarios
                     SET nombre = ?
                     where id=? `
  conectar.query(queryUpdate,[nombre,id],(err,result)=>{
    if(err){
      console.log("hubo un error")
      res.status(500).json("hubo un erro de parte del servidor")
    }
    else{
      if(result.affectedRows>0){
        res.status(201).json({message:"datos actualizados",
          actualizoID:{id:result.insertId,nombre}})
      }else{
      res.status(404).json({message:"No se encontro el ID"})
      }
    }
  })
})

const port=3006
app.listen(port,()=>{
  console.log(`ingrese al siguiente link http://localhost:${port}`)
})
