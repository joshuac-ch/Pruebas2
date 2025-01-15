const conection=require('mysql2')
const conectar=conection.createConnection({
  host:"localhost",
  user:"root",
  password:"admin123",
  database:"pruebas_vue"
})
conectar.connect((err)=>{
  if(err){
    console.log("se encontro un error al hacer la conexion",err.message)
  }else{
    console.log("conexion realizada")
  }
});

module.exports=conectar
